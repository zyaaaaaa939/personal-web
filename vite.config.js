import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // kasih tau Vite kalau file utama ada di folder src
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist' // keluarin hasil build di folder dist (di luar src)
  }
});
