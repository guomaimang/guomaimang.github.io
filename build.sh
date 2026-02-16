#!/bin/bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
VUEPRESS_DIST="$ROOT_DIR/src/.vuepress/dist"
MYSELF_DIR="$ROOT_DIR/myself"
MYSELF_OUT="$MYSELF_DIR/out"

echo "=== Step 1: Build VuePress ==="
cd "$ROOT_DIR"
pnpm run docs:build

echo "=== Step 2: Build Next.js (myself) ==="
cd "$MYSELF_DIR"
pnpm install --frozen-lockfile
pnpm run build

echo "=== Step 3: Copy Next.js output to VuePress dist ==="
# Remove any old myself directory in dist to avoid stale files
rm -rf "$VUEPRESS_DIST/myself"
# Copy Next.js static export into dist/myself/
cp -r "$MYSELF_OUT/" "$VUEPRESS_DIST/myself/"

echo "=== Step 4: Patch sitemap.xml with Next.js pages ==="
SITEMAP="$VUEPRESS_DIST/sitemap.xml"
if [ -f "$SITEMAP" ]; then
  TODAY=$(date +%Y-%m-%d)
  # Insert myself entries before closing </urlset>
  sed -i '' "s|</urlset>|<url><loc>https://guomaimang.github.io/myself/index.html</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url><url><loc>https://guomaimang.github.io/myself/cn.html</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url></urlset>|" "$SITEMAP"
  echo "Patched sitemap.xml with /myself/ and /myself/cn"
fi

echo "=== Done! Output at $VUEPRESS_DIST ==="
