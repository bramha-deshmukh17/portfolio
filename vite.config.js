import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages'; // Ensure this matches the plugin's API

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/portfolio/', // Replace <repository-name> with your GitHub repository name
});
