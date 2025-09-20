import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages({ cname: 'bramhadeshmukh.me' })],
  // Use root base for custom domain or user/organization pages
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
