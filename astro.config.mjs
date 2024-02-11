import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  routing: {
    prefixDefaultLocale: false
  },
  projectRoot: "./src",
  site: "https://seyhak.github.io",
  integrations: [tailwind(), react()]
})
