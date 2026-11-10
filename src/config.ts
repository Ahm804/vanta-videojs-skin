// Set VITE_MUX_PLAYBACK_ID to use your own Mux asset. Otherwise the public
// Video.js docs demo stream is used (it is NOT hosted on your Mux account).
const id = import.meta.env.VITE_MUX_PLAYBACK_ID as string | undefined;
const DEMO_ID = 's41JYeqIpBMBzE4OzxDyGR2yrp2hD1CQ6gJN9SlVGDQ';
export const playbackId = id || DEMO_ID;
export const isDemo = !id;
export const src = `https://stream.mux.com/${playbackId}.m3u8`;
export const poster = `https://image.mux.com/${playbackId}/thumbnail.webp?time=2&width=1280`;
export const title = 'VANTA — Demo reel';
export const heading = 'Demo reel';
export const meta = 'Demo stream · Video.js v10';
export const description = 'A sample stream playing through the VANTA custom Video.js v10 skin. Edit src/config.ts to change this text and set VITE_MUX_PLAYBACK_ID to use your own video.';