/**
 * Maps known social platform aliases → Phosphor icon IDs (Iconify format).
 * If a string is already an Iconify ID (contains a colon) it passes through.
 */
const PLATFORM_ICONS: Record<string, string> = {
  twitter:   'ph:x-logo',
  x:         'ph:x-logo',
  linkedin:  'ph:linkedin-logo',
  github:    'ph:github-logo',
  instagram: 'ph:instagram-logo',
  facebook:  'ph:facebook-logo',
  youtube:   'ph:youtube-logo',
  tiktok:    'ph:tiktok-logo',
  dribbble:  'ph:dribbble-logo',
  behance:   'ph:behance-logo',
  email:     'ph:envelope-simple',
  mail:      'ph:envelope-simple',
  globe:     'ph:globe',
  website:   'ph:globe',
  twitch:    'ph:twitch-logo',
  discord:   'ph:discord-logo',
  figma:     'ph:figma-logo',
  threads:   'ph:threads-logo',
  bluesky:   'ph:butterfly',
  mastodon:  'ph:mastodon-logo',
  telegram:  'ph:telegram-logo',
  whatsapp:  'ph:whatsapp-logo',
  phone:     'ph:phone',
  link:      'ph:link',
};

const PLATFORM_LABELS: Record<string, string> = {
  twitter:   'X (Twitter)',
  x:         'X (Twitter)',
  linkedin:  'LinkedIn',
  github:    'GitHub',
  instagram: 'Instagram',
  facebook:  'Facebook',
  youtube:   'YouTube',
  tiktok:    'TikTok',
  dribbble:  'Dribbble',
  behance:   'Behance',
  email:     'Email',
  mail:      'Email',
  globe:     'Website',
  website:   'Website',
  twitch:    'Twitch',
  discord:   'Discord',
  figma:     'Figma',
  threads:   'Threads',
  bluesky:   'Bluesky',
  mastodon:  'Mastodon',
  telegram:  'Telegram',
  whatsapp:  'WhatsApp',
  phone:     'Phone',
  link:      'Link',
};

/**
 * Resolve a platform alias or raw Iconify ID to a final icon ID + label.
 * - Known alias  →  e.g. "twitter" → { icon: "ph:x-logo", label: "X (Twitter)" }
 * - Iconify ID   →  e.g. "ph:globe" → passes through unchanged
 * - Unknown      →  fallback to ph:link
 */
export function resolveIcon(platform: string): { icon: string; label: string } {
  // Already a full Iconify ID (contains a colon)
  if (platform.includes(':')) {
    const label = PLATFORM_LABELS[platform.split(':')[1]] ?? platform;
    return { icon: platform, label };
  }

  const key = platform.toLowerCase();
  return {
    icon:  PLATFORM_ICONS[key]  ?? 'ph:link',
    label: PLATFORM_LABELS[key] ?? platform,
  };
}
