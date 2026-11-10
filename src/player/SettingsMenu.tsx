import { Menu, useCaptionsOptions, usePlaybackRateOptions, useQualityOptions } from '@videojs/react';
import { Back, Check, Chevron, Gear } from './icons';

// Structural shape shared by the option hooks documented for Video.js v10.
interface Opts {
  state: { availability: string };
  selectedLabel: string;
  value: string;
  setValue: (v: string) => void;
  options: { value: string; label: string; disabled?: boolean }[];
}

function Sub({ label, o }: { label: string; o: Opts }) {
  return (
    <Menu.Root>
      <Menu.Trigger className="v-item" render={(p) => (
        <div {...p}><span>{label}</span><span className="v-val">{o.selectedLabel}<Chevron /></span></div>
      )} />
      <Menu.Content className="v-panel">
        <Menu.Item className="v-back"><Back />{label}</Menu.Item>
        <Menu.RadioGroup className="v-group" value={o.value} onValueChange={o.setValue} aria-label={label}>
          {o.options.map((x) => (
            <Menu.RadioItem key={x.value} value={x.value} disabled={x.disabled} className="v-item">
              <span>{x.label}</span>
              <Menu.ItemIndicator checked={x.value === o.value} forceMount className="v-check"><Check /></Menu.ItemIndicator>
            </Menu.RadioItem>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export function SettingsMenu() {
  const rate = usePlaybackRateOptions() as Opts | undefined;
  const quality = useQualityOptions() as Opts | undefined;
  const captions = useCaptionsOptions() as Opts | undefined;
  const ok = (o?: Opts): o is Opts => o?.state.availability === 'available';
  if (!ok(rate) && !ok(quality) && !ok(captions)) return null;
  return (
    <Menu.Root side="top" align="end">
      <Menu.Trigger className="v-btn v-settings" aria-label="Settings" render={<button type="button" />}><Gear /></Menu.Trigger>
      <Menu.Popup className="v-menu">
        <Menu.Content className="v-content">
          {ok(rate) && <Sub label="Speed" o={rate} />}
          {ok(quality) && <Sub label="Quality" o={quality} />}
          {ok(captions) && <Sub label="Captions" o={captions} />}
        </Menu.Content>
      </Menu.Popup>
    </Menu.Root>
  );
}
