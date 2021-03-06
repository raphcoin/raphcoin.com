import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  mode: "spa",
  srcDir: "src/",
  head: {
    title: "Raphcoin",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  modules: ["@nuxtjs/pwa"],
  plugins: ["~/plugins/types"],
  generate: {
    dir: "public"
  }
};

export default config;
