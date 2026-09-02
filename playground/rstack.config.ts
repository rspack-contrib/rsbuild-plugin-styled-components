// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginStyledComponents } from '../src/index.ts';

define.app({
  plugins: [pluginStyledComponents()],
});
