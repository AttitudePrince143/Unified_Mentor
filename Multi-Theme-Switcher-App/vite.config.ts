import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Unified_Mentor/Multi-Theme-Switcher-App/', // 👈 this is important
  plugins: [react()],
});
