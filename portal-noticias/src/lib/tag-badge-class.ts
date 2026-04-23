const palette = [
  "tag-badge--c0",
  "tag-badge--c1",
  "tag-badge--c2",
  "tag-badge--c3",
  "tag-badge--c4",
  "tag-badge--c5",
];

export function tagBadgeClassFor(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h + slug.charCodeAt(i) * (i + 1)) % palette.length;
  return palette[h] ?? palette[0];
}
