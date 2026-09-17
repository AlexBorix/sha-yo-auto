import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sha-yo-auto/', // Ajusté avec le nom exact de votre dépôt GitHub
})
