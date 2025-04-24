import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: 'remote',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './RemoteButton': './src/RemoteButton.tsx'
    //   },
    //   dev: true, // 👈 Agregalo para desarrollo
    //   serveUrl: 'http://localhost:5001/assets/' // 👈 Asegura la URL correcta
    // })
    // TODO usar el vite-env.d.ts interface
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteButton': './src/RemoteButton.tsx'
      },
      dev: true,              // TypeScript no se quejará
      serveUrl: 'http://localhost:5001/assets/'
    } as any)
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5001
  }
})
