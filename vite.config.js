import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shayo-auto/', // Remplace 'shayo-auto' par le nom exact de ton dossier GitHub
})
