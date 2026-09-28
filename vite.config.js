import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Dev-only: lets the site be reached through a temporary tunnel (e.g. Cloudflare Tunnel),
    // whose random *.trycloudflare.com hostname Vite would otherwise reject.
    host: true,
    allowedHosts: true,
  },
})
