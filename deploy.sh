#!/usr/bin/env bash
# MHM Site — Build and deploy to NAS
# Usage: ./deploy.sh [--build-only]
set -euo pipefail

# Secrets injected via Infisical — no .env file needed
if [ -z "$INFISICAL_INJECTED" ]; then
  source ~/Desktop/NAS-Tunnels/.env 2>/dev/null
  exec env INFISICAL_INJECTED=1 infisical run \
    --token="$INFISICAL_TOKEN" \
    --domain="https://secrets.byte-sized.io" \
    --env=prod \
    -- "$0" "$@"
fi

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
NAS_SHARE="/Volumes/appdata/mhm-site"
DIST_DIR="$SITE_DIR/dist"

# Old .env sourcing pattern removed (was: source "$SITE_DIR/.env")

echo "MHM Site Deploy"
echo "==============="

# Step 1: Build
echo "Building..."
cd "$SITE_DIR"
npm run build
echo "Build complete: $DIST_DIR"

if [ "${1:-}" = "--build-only" ]; then
  echo "Build-only mode. Skipping deploy."
  exit 0
fi

# Step 2: Deploy to NAS via SMB
if [ ! -d "$NAS_SHARE" ]; then
  echo "NAS share not mounted at $NAS_SHARE"
  echo "Mount it: mount_smbfs //pbarrick@192.168.1.62/appdata /Volumes/appdata"
  echo "Or create the directory: mkdir -p /Volumes/appdata/mhm-site"
  exit 1
fi

echo "Deploying to NAS..."
rsync -av --delete "$DIST_DIR/" "$NAS_SHARE/"
echo "Deploy complete."

echo ""
echo "Site will be served by the mhm-site nginx container on the NAS."
echo "Domain: https://milehighmarketing.dev"
