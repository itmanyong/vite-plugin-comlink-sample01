import { defineConfig } from "vite";
import plugins from "./.config/plugins";
import css from "./.config/css";
import resolve from "./.config/resolve";
import server from "./.config/server";
import build from "./.config/build";
import worker from "./.config/worker";
// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: plugins(),
    css: css(),
    resolve: resolve(),
    server: server(),
    build: build(),
    worker: worker(),
  };
  return config;
});
