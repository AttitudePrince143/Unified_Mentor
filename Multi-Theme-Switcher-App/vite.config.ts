import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Multi_Theme_App/', // 👈 Must match the GitHub repo name
  plugins: [react()],
});
