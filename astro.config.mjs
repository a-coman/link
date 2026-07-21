// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  base: "/",
  redirects: {
    "/go/itis-26":
      "https://drive.google.com/file/d/1IH1dstEvGVV8fiiIxkWrdrdcTxETvwoi/view?usp=drive_link",
  },
  integrations: [
    icon({
      include: {
        ph: ['*'], // include all Phosphor icons
      },
    }),
  ],
});
