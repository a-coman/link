# Link

Link is a LinkTree alternative built with Astro.

It supports structured YAML profiles for fast scaffolding or fully handcrafted Astro pages.

## Getting Started

### Prerequisites
- Node.js (v22+)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/a-coman/link.git
   cd link
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser. The application will auto-generate an index directory displaying all available profile endpoints.

## Usage & Customization

Link supports two straightforward systems for composing pages:

### 1. YAML Profiles
Create a new `.yaml` file inside the `src/profiles/` directory.
For example, `src/profiles/alberto.yaml`:

<details>
<summary>Click to expand code block:</summary>

```yaml
name: "The Founders"
description: "Studio Trio : Design & Engineering"
theme:
  background-light: "#ffffff"
  background-dark: "#2a3439"
  text-light: "#2a3439"
  text-dark: "#eeeeee"
  accent-light: "#569cd6"
  accent-dark: "#ffffff"
  font-family: "Inter, sans-serif"
  button-style: "pill" # "sharp" | "rounded" | "pill"

layout:
  - type: "profiles"
    columns: 3 # Number of columns per row for profiles (1, 2, 3 or 4 MAX)
    profiles:
      - name: "Jane"
        description: "Product Designer"
        avatar: "/avatars/jane.jpg"
        url: "https://google.com/"
        socials:
          - platform: "twitter"
            url: "https://google.com/"
          - platform: "dribbble"
            url: "https://google.com/"
      - name: "Juan"
        description: "Product Designer"
        avatar: "/avatars/juan.jpg"
        url: "https://google.com/"
        socials:
          - platform: "twitter"
            url: "https://google.com/"
          - platform: "dribbble"
            url: "https://google.com/"
      - name: "Albert"
        description: "Software Engineer"
        avatar: "/avatars/albert.jpg"
        url: "https://google.com/"
        socials:
          - platform: "github"
            url: "https://google.com/"
          - platform: "linkedin"
            url: "https://google.com/"
  - type: "links"
    links:
      - title: "Visit our Studio Website"
        url: "https://google.com/"
        icon: "ph:globe"
      - title: "Book us for a project"
        url: "https://google.com/"
        icon: "ph:calendar-blank"
      - title: "Read our newsletter"
        url: "https://google.com/"
        icon: "ph:envelope-simple"

  - type: "text"
    content: "Jane's Links"

  - type: "links"
    links:
      - title: "Jane's Dribbble Portfolio"
        url: "https://google.com/"
        icon: "ph:palette"
      - title: "Jane's Design Course"
        url: "https://google.com/"
        icon: "ph:graduation-cap"

  - type: "text"
    content: "Albert's Links"

  - type: "links"
    links:
      - title: "Albert's GitHub"
        url: "https://google.com/"
        icon: "ph:github-logo"
      - title: "Albert's OSS Project"
        url: "https://google.com/"
        icon: "ph:code"
```

</details>

The application dynamically routes this to `localhost:4321/alberto`.

### 2. Custom Astro Pages
If you need absolute structural control, design a completely bespoke interface natively.

Create a `.astro` file inside `src/pages/` (e.g., `src/pages/juan.astro`).
1. Import the `<BaseLayout>` component globally wrapper.
2. Define and pass `title` and `description` to `<BaseLayout>`

For example, `src/pages/juan.astro`:

<details>
<summary>Click to expand code block:</summary>

```js
---
---
/**
 * juan.astro : A FULLY CUSTOM Linktree page.
 * No YAML schema involved — pure Astro + CSS.
 *
 * Use this as a template when you want complete design freedom
 * beyond what the YAML/template system offers.
 *
 * You should always start with a BaseLayout component with a title and description.
 */

import BaseLayout from "../layouts/BaseLayout.astro";
import { Icon } from "astro-icon/components";
const title = "Juan Rodríguez";
const description = "Creative Director & Filmmaker";
const pageTitle = `Link / ${title}`;
---

<BaseLayout title={pageTitle} description={description}>
  <div class="page">
    <!-- ── Header ─────────────────────────────────────────── -->
    <header class="hero">
      <div class="avatar-ring">
        <span class="avatar-initials">JR</span>
      </div>
      <div class="hero-text">
        <p class="hero-eyebrow">Creative Director</p>
        <h1 class="name">{title}</h1>
        <div class="socials">
          <a
            href="https://google.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            class="social-btn"
          >
            <Icon name="ph:x-logo" width={14} height={14} aria-hidden="true" />
          </a>
          <a
            href="https://google.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="social-btn"
          >
            <Icon
              name="ph:instagram-logo"
              width={14}
              height={14}
              aria-hidden="true"
            />
          </a>
          <a href="mailto:a@a.com" aria-label="Email" class="social-btn">
            <Icon
              name="ph:envelope-simple"
              width={14}
              height={14}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </header>

    <!-- ── Rule ─────────────────────────────────────────── -->
    <div class="rule"></div>

    <!-- ── Links ──────────────────────────────────────── -->
    <section class="links-section stagger-links" aria-label="Links">
      <a
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card featured"
      >
        <div class="link-card-inner">
          <span class="link-label">Portfolio</span>
          <span class="link-card-title">View my Work</span>
          <span class="link-card-sub">Films · Photography · Direction</span>
        </div>
        <span class="link-ext-icon" aria-hidden="true">
          <Icon name="ph:arrow-up-right" width={13} height={13} />
        </span>
      </a>

      <div class="link-pair">
        <a
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-card half"
        >
          <span class="link-label">Calendar</span>
          <span class="link-card-title">Book a Call</span>
        </a>
        <a
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-card half"
        >
          <span class="link-label">Vimeo</span>
          <span class="link-card-title">Short Films</span>
        </a>
      </div>

      <a
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <div class="link-card-inner">
          <span class="link-label">Newsletter</span>
          <span class="link-card-title">Notes on Craft</span>
          <span class="link-card-sub"
            >Monthly reflections on filmmaking &amp; design</span
          >
        </div>
        <span class="link-ext-icon" aria-hidden="true">
          <Icon name="ph:arrow-up-right" width={13} height={13} />
        </span>
      </a>

      <a
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <div class="link-card-inner">
          <span class="link-label">Shop</span>
          <span class="link-card-title">Presets &amp; Templates</span>
          <span class="link-card-sub">Pro-grade tools for filmmakers</span>
        </div>
        <span class="link-ext-icon" aria-hidden="true">
          <Icon name="ph:arrow-up-right" width={13} height={13} />
        </span>
      </a>
    </section>
  </div>
</BaseLayout>

<style>
  .page {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vw, 3.75rem) clamp(1rem, 5vw, 1.25rem)
      clamp(3.5rem, 9vw, 5.5rem);
    min-width: 0;
  }

  /* ── Hero ─────────────────────────────────────── */
  .hero {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-bottom: 1.75rem;
  }

  .avatar-ring {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(237, 237, 235, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(237, 237, 235, 0.03);
  }
  :global(html[data-theme="light"]) .avatar-ring {
    border-color: rgba(0, 0, 0, 0.11);
    background: rgba(0, 0, 0, 0.03);
  }

  .avatar-initials {
    font-family: var(--font-display, "IBM Plex Mono", monospace);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgba(237, 237, 235, 0.52);
  }
  :global(html[data-theme="light"]) .avatar-initials {
    color: rgba(0, 0, 0, 0.55);
  }

  .hero-text {
    flex: 1;
    min-width: 0;
  }

  .hero-eyebrow {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    opacity: 0.62;
    margin-bottom: 0.2rem;
    font-family: "SF Mono", ui-monospace, monospace;
    line-height: 1;
  }

  .name {
    font-family: var(--font-display, "IBM Plex Mono", monospace);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 0.7rem;
  }

  .socials {
    display: flex;
    gap: 0.3rem;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(237, 237, 235, 0.09);
    color: inherit;
    opacity: 0.45;
    transition:
      opacity 0.22s ease,
      border-color 0.22s ease,
      transform 0.22s ease;
    text-decoration: none;
  }
  :global(html[data-theme="light"]) .social-btn {
    border-color: rgba(0, 0, 0, 0.09);
  }

  .social-btn:hover {
    opacity: 1;
    border-color: rgba(237, 237, 235, 0.28);
    transform: translateY(-1px);
  }
  :global(html[data-theme="light"]) .social-btn:hover {
    border-color: rgba(0, 0, 0, 0.25);
  }

  /* ── Rule ─────────────────────────────────────── */
  .rule {
    border-top: 1px solid rgba(237, 237, 235, 0.07);
    margin-bottom: 1.5rem;
  }
  :global(html[data-theme="light"]) .rule {
    border-color: rgba(0, 0, 0, 0.07);
  }

  /* ── Links ────────────────────────────────────── */
  .links-section {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  /* Staggered entrance for link cards */
  .stagger-links > * {
    animation: fadeSlideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .stagger-links > *:nth-child(1) {
    animation-delay: 0.1s;
  }
  .stagger-links > *:nth-child(2) {
    animation-delay: 0.18s;
  }
  .stagger-links > *:nth-child(3) {
    animation-delay: 0.25s;
  }
  .stagger-links > *:nth-child(4) {
    animation-delay: 0.31s;
  }
  .stagger-links > *:nth-child(5) {
    animation-delay: 0.36s;
  }

  .link-card {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    position: relative;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(237, 237, 235, 0.08);
    background: rgba(237, 237, 235, 0.022);
    text-decoration: none;
    color: inherit;
    transition:
      border-color 0.25s ease,
      background 0.25s ease,
      transform 0.25s ease;
    overflow: hidden;
    min-width: 0;
  }
  :global(html[data-theme="light"]) .link-card {
    border-color: rgba(0, 0, 0, 0.08);
    background: rgba(0, 0, 0, 0.022);
  }

  .link-card:hover {
    border-color: rgba(237, 237, 235, 0.2);
    background: rgba(237, 237, 235, 0.05);
    transform: translateY(-1px);
  }
  :global(html[data-theme="light"]) .link-card:hover {
    border-color: rgba(0, 0, 0, 0.18);
    background: rgba(0, 0, 0, 0.045);
  }

  .link-card:active {
    transform: translateY(0) scale(0.998);
    transition-duration: 0.08s;
  }

  .link-card.featured {
    border-color: rgba(237, 237, 235, 0.13);
    background: rgba(237, 237, 235, 0.035);
    padding: 1.15rem 1.1rem;
  }
  :global(html[data-theme="light"]) .link-card.featured {
    border-color: rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.032);
  }

  .link-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
  }

  .link-card-inner {
    display: flex;
    flex-direction: column;
    gap: 0;
    min-width: 0;
  }

  .link-label {
    display: block;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    opacity: 0.62;
    margin-bottom: 0.25rem;
    font-family: "SF Mono", ui-monospace, monospace;
  }

  .link-card-title {
    display: block;
    font-family: var(--font-display, "IBM Plex Mono", monospace);
    font-size: 0.92rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .link-card-sub {
    display: block;
    font-size: 0.71rem;
    opacity: 0.68;
    margin-top: 0.22rem;
    letter-spacing: 0.01em;
    line-height: 1.45;
    font-family: var(--font-body, "IBM Plex Sans", system-ui, sans-serif);
  }

  .link-ext-icon {
    flex-shrink: 0;
    opacity: 0.2;
    transition:
      opacity 0.22s ease,
      transform 0.22s ease;
    margin-top: 0.15rem;
  }
  .link-card:hover .link-ext-icon {
    opacity: 0.55;
    transform: translate(2px, -2px);
  }

  @media (max-width: 400px) {
    .page {
      padding-inline: 0.9rem;
    }
    .hero {
      flex-direction: column;
      text-align: center;
    }
    .socials {
      justify-content: center;
    }
    .link-pair {
      grid-template-columns: 1fr;
    }
  }
</style>
```

</details>

### 3. Icons (Astro-Icon)
This project natively implements `astro-icon` and is pre-configured with [Phosphor Icons](https://phosphoricons.com/) library (`@iconify-json/ph`).

**Usage in YAML:**
When composing `.yaml` profiles, simply designate the `ph:` icon ID where supported:
```yaml
    links:
      - title: "My GitHub"
        url: "https://github.com/myusername"
        icon: "ph:github-logo"
```

**Usage in custom Astro pages:**
If you're building a custom `.astro` page, import and deploy the `<Icon />` component seamlessly:
```astro
---
import { Icon } from 'astro-icon/components';
---
<a href="https://twitter.com/myusername">
  <Icon name="ph:x-logo" width={24} height={24} />
</a>
```
**Adding other icon libraries:**
Link fully supports any icon set from [Iconify](https://icones.js.org/). If you prefer a different style (like Material Design, FontAwesome, etc.):
1. Install the library's JSON package:
   ```bash
   npm install @iconify-json/mdi
   ```
2. Register the prefix in `astro.config.mjs`:
   ```javascript
   import icon from 'astro-icon';

   export default defineConfig({
     integrations: [
       icon({
         include: {
           ph: ['*'],
           mdi: ['*'], // Add your new library prefix
         },
       }),
     ],
   });
   ```
3. You can now use `icon: "mdi:account"` anywhere in your YAML or Astro components!

### 4. Profile Pictures
To add profile pictures in YAML profiles, simply place your image files inside the `public/avatars/` directory and reference them in your YAML:
```yaml
profiles:
  - name: "Jane"
    description: "Product Designer"
    avatar: "/avatars/jane.jpg" # Reference your image here
    ....
```
This will automatically serve the images correctly in your deployed site.
For custom Astro pages, you can directly reference any image in the `public/` directory:
```js
<img src="/avatars/juan.jpg" alt="Juan's Avatar" class="avatar" />
```

## Deployment (GitHub Pages)

This project is strictly configured to automatically launch to GitHub Pages via a GitHub Actions CI workflow (`.github/deploy.yml`).

1. **Update Configurations**
   Double-check `astro.config.mjs` and make sure your `site` endpoint explicitly matches your GitHub deployment:
   ```javascript
   export default defineConfig({
     site: 'https://a-coman.github.io', // Edit this to your GitHub Pages username
     base: '/link', // Edit this to your repository name
     // ...
   });
   ```

2. **Enable GitHub Actions Deployment**
   - Push your code to your repository.
   - Go to your repository settings on GitHub: `Settings` > `Pages`.
   - Under **Build and deployment**, designate the **Source** strictly to `GitHub Actions`.

3. **Deploy**
    Your site will automatically compile, optimize, and deploy universally every time you push to the `main` branch.
