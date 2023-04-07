import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
    plugins: [
        solidPlugin(),
        VitePWA({
            manifest: {
                id: "splitwise",
                name: "Splitwise",
                short_name: "Splitwise",
                start_url: "/",
                scope: "/",
                icons: [
                    {
                        src: "/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
            },
            strategies: "generateSW",
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
})
