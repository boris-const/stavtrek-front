import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import checker from 'vite-plugin-checker';
//, tsconfigPaths(), checker({typescript: true})

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(process.env.VITE_PORT),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // mui: ['@mui/material'],
          },
        },
      },
      outDir: 'dist',
    },
  });
};
