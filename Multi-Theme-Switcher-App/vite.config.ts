import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Unified_Mentor/Multi-Theme-Switcher-App/', // 👈 must match subfolder path in repo
  plugins: [react()],
});
