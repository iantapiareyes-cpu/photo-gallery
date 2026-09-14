---
name: GitHub push authentication
description: Workspace-specific behavior observed when pushing an imported repository to GitHub.
---

The imported workspace's HTTPS Git remote can continue rejecting pushes with "Invalid username or token" even after a GitHub App connection is accepted and attached. The connection may not expose credentials to the shell Git client in that environment.

**Why:** A force-push attempt was explicitly approved, but both the original Git CLI and a retry after attaching the GitHub App failed at authentication rather than at the Git ref update.

**How to apply:** Do not ask the user to paste a token into chat. Have them repair or reconnect GitHub authentication in Replit's Git controls, then retry the push; do not alter the remote to an internal backup URL.