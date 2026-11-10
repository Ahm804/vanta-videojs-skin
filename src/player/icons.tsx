import type { ReactNode } from 'react';
const I = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{children}</svg>
);
export const Play = () => <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" /></svg>;
export const Pause = () => <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1.2" /><rect x="14" y="5" width="4" height="14" rx="1.2" /></svg>;
export const Volume = () => <I><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" /></I>;
export const Muted = () => <I><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" /><path d="m16 9.5 5 5m0-5-5 5" /></I>;
export const Gear = () => <I><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></I>;
export const Pip = () => <I><rect x="3" y="5" width="18" height="14" rx="2" /><rect x="12" y="11" width="7" height="5" rx="1" fill="currentColor" stroke="none" /></I>;
export const FsEnter = () => <I><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></I>;
export const FsExit = () => <I><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" /></I>;
export const Check = () => <I><path d="m5 12.5 4.5 4.5L19 7.5" /></I>;
export const Chevron = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>;
export const Back = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>;
const Skip = ({ flip }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M4 12a8 8 0 1 0 2.6-5.9" /><path d="M4 4v4.5h4.5" />
    <text x="12" y="15.3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Manrope, sans-serif" style={flip ? { transform: 'scaleX(-1)', transformOrigin: '12px 12px' } : undefined}>10</text>
  </svg>
);
export const Back10 = () => <Skip />;
export const Fwd10 = () => <Skip flip />;