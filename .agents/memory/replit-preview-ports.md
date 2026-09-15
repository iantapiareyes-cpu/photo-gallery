---
name: Replit preview ports
description: Port alignment requirement for this project's Replit web preview.
---

For this web app, the Vite command, Vite configuration, workflow wait port, and `.replit` local port must use `5000`. The `.replit` mapping must expose that local port as external port `80` for the public Preview proxy.

**Why:** A stale local port `3000` caused the workflow to time out. After local startup worked on `5000`, mapping it to external port `5000` still made the public development URL return HTTP 502; external port `80` fixed forwarding.

**How to apply:** Keep the app and workflow on local port `5000`, map `localPort = 5000` to `externalPort = 80`, then verify both localhost and the Replit development domain return HTTP 200.