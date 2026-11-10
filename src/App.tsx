import { createPlayer } from '@videojs/react';
import { videoFeatures } from '@videojs/react/video';
import { HlsJsVideo } from '@videojs/react/media/hlsjs-video';
import { VantaSkin } from './player/VantaSkin';
import { src, poster, title, heading, meta, description, isDemo } from './config';

const { Player } = createPlayer({ features: videoFeatures });

export default function App() {
  return (
    <main className="stage">
      <header className="brand"><span className="brand-mark" aria-hidden="true" />VANTA</header>
      <Player poster={poster}>
        <VantaSkin title={title} heading={heading} meta={meta} description={description}>
          <HlsJsVideo source={{ src }} crossOrigin="anonymous" playsInline preload="metadata" />
        </VantaSkin>
      </Player>
      <p className="note">{isDemo ? 'Demo stream: public Video.js docs sample. Set VITE_MUX_PLAYBACK_ID to use your own.' : 'Streaming from your Mux playback ID.'}</p>
    </main>
  );
}