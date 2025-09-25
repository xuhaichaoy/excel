import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import path from "path";

const plugins = [
  react({
    babel: {
      babelrc: true,
      plugins: [
        ["@babel/plugin-proposal-optional-chaining-assign", {
          version: "2023-07"
        }],
      ],
    }
  }), 
  tanstackRouter()
];

export default defineConfig({
  plugins: plugins,
  css: {
    modules: {
      scopeBehaviour: "global"
    },
    preprocessorOptions: {
      scss: {
        additionalData: '',
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true,
    port: 5173,
    host: '127.0.0.1'
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  // env variables
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "esnext",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    cssCodeSplit: process.env.TAURI_DEBUG ? false : undefined
  }
});