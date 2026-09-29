# Base44 Dev Environment

## Project Overview
Minimal static web project: `index.html`, `script.js`, `styles.css` — no build step, no backend.

## Setup
- Served by Vite dev server (installed at container startup, not baked into image).
- `docker compose -f docker-compose.base44.yml up -d` starts the dev server.
- Preview is on host port 3000 (mapped to Vite's 5173 inside the container).
- Source is bind-mounted at `/app`; edits hot-reload in the preview.

## Verification
- `curl localhost:3000` should return the HTML content.
- Healthcheck probes `http://localhost:5173/` from inside the container.
