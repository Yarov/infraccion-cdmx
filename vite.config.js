import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/infraccion-cdmx/', // Asegúrate de que este sea el nombre exacto de tu repo
})