import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), 
      },
    },
    server: {
    host: true,
    port: 4173,
      proxy: {
        '/main': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/main/, ''),
        },
      },
    }
  };
});