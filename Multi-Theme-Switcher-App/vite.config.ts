import { defineConfig } from 'vite'; // 👈 this line is missing in your error
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Unified_Mentor/Multi-Theme-Switcher-App/', // or '/Multi_Theme_App/' for direct repo
  plugins: [react()],
});
