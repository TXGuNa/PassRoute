#!/bin/bash
# PassRoute — FULL local preview (static site + /api Worker + admin panel)
# Requires Node.js. First run downloads wrangler automatically.
# Site:  http://localhost:8787/home/
# Admin: http://localhost:8787/admin/   (first visit: create a local admin password)
# Stop:  Ctrl+C
cd "$(dirname "$0")"
echo ""
echo "  PassRoute FULL local server (with admin API) starting..."
echo "  Site:   http://localhost:8787/home/"
echo "  Admin:  http://localhost:8787/admin/"
echo ""
exec npx wrangler dev --port 8787
