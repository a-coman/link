export type InlineLinkToken =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

const markdownLinkPattern =
  /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\)/g;
const rawUrlPattern = /(https?:\/\/[^\s<]+|mailto:[^\s<]+)/g;

function splitRawUrls(text: string): InlineLinkToken[] {
  const tokens: InlineLinkToken[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(rawUrlPattern)) {
    const [rawHref] = match;
    const matchIndex = match.index ?? 0;
    const textBefore = text.slice(lastIndex, matchIndex);

    if (textBefore) {
      tokens.push({ type: "text", value: textBefore });
    }

    let href = rawHref;
    let trailing = "";

    while (href.length > 0 && /[.,!?;:)\]]$/.test(href)) {
      trailing = href[href.length - 1] + trailing;
      href = href.slice(0, -1);
    }

    tokens.push({ type: "link", value: href, href });

    if (trailing) {
      tokens.push({ type: "text", value: trailing });
    }

    lastIndex = matchIndex + rawHref.length;
  }

  const remainder = text.slice(lastIndex);

  if (remainder) {
    tokens.push({ type: "text", value: remainder });
  }

  return tokens;
}

export function linkifyText(text: string): InlineLinkToken[] {
  const tokens: InlineLinkToken[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(markdownLinkPattern)) {
    const [fullMatch, label, href] = match;
    const matchIndex = match.index ?? 0;
    const textBefore = text.slice(lastIndex, matchIndex);

    if (textBefore) {
      tokens.push(...splitRawUrls(textBefore));
    }

    tokens.push({ type: "link", value: label, href });
    lastIndex = matchIndex + fullMatch.length;
  }

  const remainder = text.slice(lastIndex);

  if (remainder) {
    tokens.push(...splitRawUrls(remainder));
  }

  return tokens;
}
