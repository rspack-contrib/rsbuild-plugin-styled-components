import { defineConfig } from '@rsbuild/core';
import { pluginStyledComponents } from '../src';

export default defineConfig({
  plugins: [pluginStyledComponents()],
});
