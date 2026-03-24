import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// ── Reusable sub-schemas ─────────────────────────────────────────────────────

const ThemeSchema = z.object({
  accentColor: z.string().default('#ffffff'),
  /** "sharp" | "rounded" | "pill" */
  buttonStyle: z.enum(['sharp', 'rounded', 'pill']).default('sharp'),
  fontFamily: z.string().optional(),
});

const SocialSchema = z.object({
  /** Known alias (e.g. "twitter") or any Iconify icon ID (e.g. "ph:github-logo") */
  platform: z.string(),
  url: z.string().url(),
  label: z.string().optional(),
  /** Override the auto-resolved icon with any Iconify ID */
  icon: z.string().optional(),
});

const ProfileItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  avatar: z.string().optional(),
  url: z.string().url().optional(),
  socials: z.array(SocialSchema).optional(),
});

const LinkItemSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  description: z.string().optional(),
  /** Any Iconify icon ID, e.g. "ph:globe" or "ph:calendar-blank" */
  icon: z.string().optional(),
  newTab: z.boolean().default(true),
});

// ── Block discriminated union ─────────────────────────────────────────────────

const ProfilesBlockSchema = z.object({
  type: z.literal('profiles'),
  columns: z.number().int().min(1).max(4).default(2),
  profiles: z.array(ProfileItemSchema).min(1),
});

const LinksBlockSchema = z.object({
  type: z.literal('links'),
  links: z.array(LinkItemSchema).min(1),
});

const TextBlockSchema = z.object({
  type: z.literal('text'),
  content: z.string(),
});

const DividerBlockSchema = z.object({
  type: z.literal('divider'),
});

const BlockSchema = z.discriminatedUnion('type', [
  ProfilesBlockSchema,
  LinksBlockSchema,
  TextBlockSchema,
  DividerBlockSchema,
]);

// ── Collection ───────────────────────────────────────────────────────────────

const profiles = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/profiles' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    theme: ThemeSchema.optional(),
    layout: z.array(BlockSchema),
  }),
});

export const collections = { profiles };
