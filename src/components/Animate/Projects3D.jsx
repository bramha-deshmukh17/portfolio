import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const projectData = [
    {
        title: 'Flash Chat',
        image: './projects/flash_chat.png',
        url: 'https://github.com/bramha-deshmukh17/flash_chat',
        desc: `Flash Chat is a chatting app built using MERN\n
  It provides cloud support via MongoDB Atlas for storing user chats.\n
  Uses WebSocket for real‑time communication.\n
  Allows file and media sharing.`
    },
    {
        title: 'Smart RTO',
        image: './projects/rto.jpg',
        url: 'https://github.com/bramha-deshmukh17/SmartRTO',
        desc: `Smart RTO is a mobile app designed using Flutter\n
  Streamlines RTO operations in India by providing citizens online access to license and fine management services.\n
  Manages user queries for licenses and vehicle fines.\n
  Integrates with payment gateways for fine payments.`
    },
    {
        title: 'TourGuide',
        image: './projects/tourguide.png',
        url: 'https://github.com/bramha-deshmukh17/tourguide',
        desc: `TourGuide is a guide‑booking website built with Django\n
  Offers a comprehensive platform for tourists to book local guides.\n
  Showcases tourist attractions, restaurants, and hotels.\n
  Enhances the travel experience with detailed listings and easy booking.`
    },
    {
        title: 'EduMate',
        image: './projects/edumate.png',
        url: 'https://github.com/bramha-deshmukh17/edumate',
        desc: `EduMate is an e-learning platform developed in PHP\n
  Features three modules: Student, Admin, and Discussion Forum.\n
  Provides a user friendly environment for course management.\n
  Encourages interactive discussions and collaborative learning.`
    }
];
  

const createTextTexture = (text) => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#000000';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lines = text.match(/.{1,30}(?:\s|$)/g);
    lines.forEach((line, i) => {
        ctx.fillText(line, size / 2, size / 2 + (i - lines.length / 2) * 30);
    });
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
};

const Projects3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const displayWidth = canvas.clientWidth;
        const displayHeight = 600;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(displayWidth, displayHeight, false);
        renderer.setPixelRatio(dpr);

        const camera = new THREE.PerspectiveCamera(45, displayWidth / displayHeight, 0.1, 1000);
        camera.position.z = 10;

        const scene = new THREE.Scene();

        const loader = new THREE.TextureLoader();
        const meshes = [];
        const radius = 4;
        const size = 3;

        projectData.forEach((proj, i) => {
            const angle = (i / projectData.length) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            // Create six materials, default white
            const materials = [];
            for (let j = 0; j < 6; j++) materials.push(new THREE.MeshBasicMaterial({ color: 0xffffff }));

            // Front face (positive Z): project image
            loader.load(proj.image, (tex) => {
                tex.encoding = THREE.sRGBEncoding;
                materials[4].map = tex; // face index 4 corresponds to positive Z
                materials[4].needsUpdate = true;
            });
            // Back face (negative Z): description
            const textTex = createTextTexture(proj.desc);
            materials[5].map = textTex; // face index 5 is negative Z
            materials[5].needsUpdate = true;

            const geom = new THREE.BoxGeometry(size, size, 0.5);
            const mesh = new THREE.Mesh(geom, materials);
            mesh.position.set(x, 0, z);
            mesh.lookAt(0, 0, 0);
            mesh.userData.url = proj.url;

            scene.add(mesh);
            meshes.push(mesh);
        });

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const onClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const hit = raycaster.intersectObjects(meshes)[0];
            if (hit) window.open(hit.object.userData.url, '_blank');
        };
        canvas.addEventListener('click', onClick);

        const animate = () => {
            requestAnimationFrame(animate);
            scene.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            canvas.removeEventListener('click', onClick);
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '500px', display: 'block' }} />;
};

export default Projects3D;
