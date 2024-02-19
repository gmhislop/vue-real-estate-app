import { config as dotenvConfig } from 'dotenv';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

// Load environment variables from .env file
dotenvConfig({ path: fileURLToPath(new URL('.env', import.meta.url)) });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
