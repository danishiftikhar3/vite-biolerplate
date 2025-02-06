import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), TanStackRouterVite(), eslint(), tsconfigPaths()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    root: './',
    build: {
        outDir: 'dist',
    },
    publicDir: 'public',
    test: {
        // 👋 add the line below to add jsdom to vite
        environment: 'jsdom',
        globals: true,
        setupFiles: './__tests__/setup.js',
    },
})
