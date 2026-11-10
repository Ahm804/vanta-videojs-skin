import type { ReactNode } from 'react';
import {
  BufferingIndicator, CaptionsButton, Container, Controls, ErrorDialog, FullscreenButton, Hotkey,
  MuteButton, PiPButton, PlayButton, Poster, SeekButton, StatusAnnouncer, Time, TimeSlider, VolumeSlider,
} from '@videojs/react';
import { SettingsMenu } from './SettingsMenu';
import { Back10, Fwd10, FsEnter, FsExit, Muted, Pause, Pip, Play, Volume } from './icons';
import './vanta.css';

interface Props { children: ReactNode; title?: string; heading?: string; meta?: string; description?: string }

export function VantaSkin({ children, title, heading, meta, description }: Props) {
  return (
    <Container className="vanta" aria-label={title ?? 'Video player'}>
      {children}
      <Poster.Root className="v-poster"><Poster.Image className="v-poster-img" /></Poster.Root>
      <BufferingIndicator className="v-buffering" render={(p) => <div {...p}><div className="v-spinner" /></div>} />

      <Controls.Root>
        <Controls.Content className="v-hud">
          <div className="v-center">
            <SeekButton seconds={-10} className="v-skip" render={(p) => <button {...p}><Back10 /></button>} />
            <PlayButton className="v-big" render={(p, s) => <button {...p}>{s.paused ? <Play /> : <Pause />}</button>} />
            <SeekButton seconds={10} className="v-skip" render={(p) => <button {...p}><Fwd10 /></button>} />
          </div>

          <div className="v-info">
            <div className="v-show">{title}</div>
            {meta && <div className="v-meta">{meta}</div>}
            {heading && <h2 className="v-heading">{heading}</h2>}
            {description && <p className="v-desc">{description}</p>}
          </div>

          <div className="v-bottom">
            <TimeSlider.Root className="v-time">
              <TimeSlider.Track className="v-track">
                <TimeSlider.Buffer className="v-buffer" />
                <TimeSlider.Fill className="v-fill" />
              </TimeSlider.Track>
              <TimeSlider.Thumb className="v-thumb" />
              <TimeSlider.Value type="pointer" className="v-tip" />
            </TimeSlider.Root>
            <Time.Value type="remaining" className="v-remaining" />
            <Controls.Group className="v-tools" aria-label="Player options">
              <div className="v-volume">
                <MuteButton className="v-btn" render={(p, s) => <button {...p}>{s.muted ? <Muted /> : <Volume />}</button>} />
                <VolumeSlider.Root className="v-vol-slider">
                  <VolumeSlider.Track className="v-vol-track"><VolumeSlider.Fill className="v-vol-fill" /></VolumeSlider.Track>
                  <VolumeSlider.Thumb className="v-vol-thumb" />
                </VolumeSlider.Root>
              </div>
              <CaptionsButton className="v-btn v-cc" render={(p) => <button {...p}>CC</button>} />
              <SettingsMenu />
              <FullscreenButton className="v-btn" render={(p, s) => <button {...p}>{s.fullscreen ? <FsExit /> : <FsEnter />}</button>} />
              <PiPButton className="v-btn v-pip" render={(p) => <button {...p}><Pip /></button>} />
            </Controls.Group>
          </div>
        </Controls.Content>
      </Controls.Root>

      <Hotkey keys="Space" action="togglePaused" />
      <Hotkey keys="k" action="togglePaused" />
      <Hotkey keys="m" action="toggleMuted" />
      <Hotkey keys="f" action="toggleFullscreen" />
      <Hotkey keys="ArrowLeft" action="seekStep" value={-10} />
      <Hotkey keys="ArrowRight" action="seekStep" value={10} />
      <Hotkey keys="j" action="seekStep" value={-10} />
      <Hotkey keys="l" action="seekStep" value={10} />
      <StatusAnnouncer />

      <ErrorDialog.Root>
        <ErrorDialog.Popup className="v-error">
          <ErrorDialog.Title />
          <ErrorDialog.Description />
          <ErrorDialog.Close className="v-error-close" />
        </ErrorDialog.Popup>
      </ErrorDialog.Root>
    </Container>
  );
}