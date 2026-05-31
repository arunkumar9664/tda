import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages subpath only when GITHUB_PAGES=true (see .github/workflows/deploy.yml).
// Netlify and local builds use base '/' (default).
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/tda/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
  },
})
