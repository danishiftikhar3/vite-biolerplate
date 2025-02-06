// vite.config.ts
import path from 'path'
import react from 'file:///D:/projects/fractual/app-app/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.2.13_@types+node@20.14.2_/node_modules/@vitejs/plugin-react/dist/index.mjs'
import { defineConfig } from 'file:///D:/projects/fractual/app-app/node_modules/.pnpm/vite@5.2.13_@types+node@20.14.2/node_modules/vite/dist/node/index.js'
import { TanStackRouterVite } from 'file:///D:/projects/fractual/app-app/node_modules/.pnpm/@tanstack+router-vite-plugin@1.37.0_vite@5.2.13_@types+node@20.14.2_/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js'
import eslint from 'file:///D:/projects/fractual/app-app/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.2.13_@types+node@20.14.2_/node_modules/vite-plugin-eslint/dist/index.mjs'
var __vite_injected_original_dirname = 'D:\\projects\\fractual\\app-app'
var vite_config_default = defineConfig({
    plugins: [react(), TanStackRouterVite(), eslint()],
    resolve: {
        alias: {
            '@': path.resolve(__vite_injected_original_dirname, './src'),
        },
    },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxmcmFjdHVhbFxcXFxpbnZlc3RpbWF0ZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXGZyYWN0dWFsXFxcXGludmVzdGltYXRlLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvZnJhY3R1YWwvaW52ZXN0aW1hdGUtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpblwiO1xuaW1wb3J0IGVzbGludCBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBUYW5TdGFja1JvdXRlclZpdGUoKSwgZXNsaW50KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1MsT0FBTyxVQUFVO0FBQ3ZULE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLFlBQVk7QUFKbkIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFBQSxFQUNqRCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
