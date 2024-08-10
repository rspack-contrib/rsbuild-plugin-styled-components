# @rsbuild/plugin-styled-components

An Rsbuild plugin to provides compile-time support for styled-components.

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

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginStyledComponents({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
