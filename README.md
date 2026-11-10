# VANTA — Video.js v10 skin
Cinematic custom skin built on `@videojs/react` (Container, Controls, TimeSlider, Menu, Hotkey, ErrorDialog…).

    npm install
    npm run dev          # local
    npm run build        # tsc + vite build -> dist/
    npm run preview

Own Mux video: copy `.env.example` to `.env` and set `VITE_MUX_PLAYBACK_ID` (public playback policy).
Deploy: Netlify (`netlify.toml`) or Vercel (`vercel.json`) — build `npm run build`, publish `dist`. Add the env var in the host dashboard.
Shortcuts: Space/K play, M mute, F fullscreen, ←/→ ±5s, J/L ±10s, Esc closes menus.
