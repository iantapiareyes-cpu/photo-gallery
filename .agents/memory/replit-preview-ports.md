---
name: Replit preview ports
description: Port alignment requirement for this project's Replit web preview.
---

For this web app, the Vite command, Vite configuration, workflow wait port, and `.replit` port mapping must all use `5000`. A stale `3000` value in any one of them can make the workflow appear healthy while Preview fails to open.

**Why:** The workflow was waiting for port 5000 while `npm run dev` still launched Vite on port 3000, causing the preview restart to time out.

**How to apply:** When changing the dev port, update `package.json`, `vite.config.ts`, and the validated `.replit` workflow/ports configuration together, then restart once and verify HTTP 200 plus a screenshot.