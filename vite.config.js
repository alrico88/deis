import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Icons({
      compiler: "svelte",
    }),
    VitePWA({
      manifest: {
        name: "deis",
        description:
          "Web app to check how many days remain / have passed from other dates",
        theme_color: "#fdf8f6",
        icons: [
          {
            src: "favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      client: {
        installPrompt: true,
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,png,svg,ico,woff,woff2}"],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
});
