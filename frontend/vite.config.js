import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

/**
 * @type {import('vite').UserConfigExport}
 */
export default {
  plugins: [
    react(),
    checker({
      eslint: { lintCommand: 'eslint src/**/*.{ts,tsx}' },
      stylelint: { lintCommand: 'stylelint src/**/*.scss' },
      // typescript: true,
    }),
  ],
  server: {
    port: 3000,
    hmr: {
      /**
       * Port forwarding in codespaces doesn't open the local dev server port on the proxy so HMR
       * websocket connections should just be made via the HTTPS port
       */
      clientPort: process.env.CODESPACES ? 443 : 3000,
    },

    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
};
