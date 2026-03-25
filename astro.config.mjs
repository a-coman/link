// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://a-coman.github.io', // TODO: change this to your own username
  base: "/link", // TODO: change this to your repository name
  integrations: [
    icon({
      include: {
        ph: ['*'], // include all Phosphor icons
      },
    }),
  ],
});
