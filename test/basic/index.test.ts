import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';
import { pluginStyledComponents } from '../../dist';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('should transform styled-components with pluginStyledComponents', async ({
  page,
}) => {
  const rsbuild = await createRsbuild({
    cwd: __dirname,
    rsbuildConfig: {
      plugins: [pluginStyledComponents()],
      output: {
        minify: false,
        filenameHash: false,
      },
    },
  });

  await rsbuild.build();

  const indexJs = readFileSync(
    join(rsbuild.context.distPath, 'static/js/index.js'),
    'utf-8',
  );

  expect(indexJs).toContain('div.withConfig');

  const { server, urls } = await rsbuild.preview();

  await page.goto(urls[0]);
  expect(await page.evaluate('typeof window.test')).toBe('object');

  await server.close();
});
