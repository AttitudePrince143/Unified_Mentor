// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Multi_Theme_App/', // ⚠️ Use your repo name here
  plugins: [react()],
});
