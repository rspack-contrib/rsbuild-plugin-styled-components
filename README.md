# @rsbuild/plugin-styled-components

An Rsbuild plugin to provide compile-time support for styled-components. It improves debugging and adds server-side rendering support for styled-components.

> [styled-components](https://styled-components.com/) is a popular CSS-in-JS implementation library, which uses the new JavaScript feature [Tagged template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to write component CSS styles.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-styled-components">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-styled-components?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-styled-components -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

export default {
  plugins: [pluginStyledComponents()],
};
```

## Example

After registering the plugin, you can use styled-components to write styles:

```ts
import styled from "styled-components";

const div = styled.div`
  color: red;
`;

console.log("div", div);
```

## Options

If you need to customize the compilation behavior of `styled-components`, you can use the following configs.

You can check the [styled-components documentation](https://styled-components.com/) to learn how to use it.

- **Type:**

```ts
type StyledComponentsOptions = {
  displayName?: boolean;
  ssr?: boolean;
  fileName?: boolean;
  meaninglessFileNames?: string[];
  namespace?: string;
  topLevelImportPaths?: string[];
  transpileTemplateLiterals?: boolean;
  minify?: boolean;
  pure?: boolean;
  cssProps?: boolean;
};
```

- **Default:**

```ts
{
  displayName: true,
  // `isSSR` is true in SSR build
  ssr: isSSR,
  // `pure` is enabled in production to reduce bundle size
  pure: isProd,
  transpileTemplateLiterals: true,
}
```

- **Example:**

When the value is an Object, use the `Object.assign` function to merge with the default config.

```ts title="rsbuild.config.ts"
pluginStyledComponents({
  pure: true,
});
```

## License

[MIT](./LICENSE).
