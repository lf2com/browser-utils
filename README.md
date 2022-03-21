# Browser Utils

Browser-utils is a set led by a JS script loader. The loader helps us include .js files on page loading. The main usage of browser-utils is these sub-modules converting codes. It transforms codes including .ts, .jsx, .tsx, and .scss at runtime so we can develop simple webs without doing stuffs with module bundler.

---

## Demo

[url-demo-scss]: https://lf2com.github.io/browser-utils/demo/scss
[url-demo-typescript]: https://lf2com.github.io/browser-utils/demo/typescript
[url-demo-react]: https://lf2com.github.io/browser-utils/demo/react

[SCSS][url-demo-scss]

Compiles SCSS codes.

[TypeScript][url-demo-typescript]

Transpiles TypeScript codes.

[React][url-demo-react]

Converts React codes.

## Get Started

Add the util we want:

```html
<script src="https://unpkg.com/@lf2com/browser-utils@latest/dist/scss.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/gh/lf2com/browser-utils@latest/dist/scss.js"></script>
```

Or use [scriptLoader](#scriptloader) to load modules:

```html
<script
  src="PATH/TO/scriptLoader.js"
  module="~/scss"
></script>
```

## Build

Build browser-utils with the command:

```sh
npm run build
```

And the builts of modules will be at `./dist/[name].js`.

## Modules

There are serveral modules to use:

### scriptLoader

We can use scriptLoader to load other sub-modules or JS scripts. The loader shows a progress bar of status of fetching.

There are attributes for scriptLoader:

#### module

Assigns pathes to load and splits them with `|`, `;`, `,`, or ` `. Since the target modules are supposed to be `.js` files, we don't have to append the file extension to them. And the loader will check the path of `path-to-module/index.js` if `path-to-module` was not found.

For the module with path relative to `scriptLoader.js`, prefix the path with `~/`.

> :warning: _**After loading all modules, the `<script>` DOM will be removed.**_

```html
<script
  src="PATH/TO/scriptLoader.js"
  module="
    ~/scss;
    ~/react;
    ./myOwnModule_1;
    ./myOwnModule_2;
  "
></script>
```

#### event:load

Sets the event name on finishing loading modules. The event will be fired on `window`.

Default is `'scriptload'`.

:warning: _**Some modules are supposed to run until all the other modules are loaded.**_

```html
<script
  src="PATH/TO/scriptLoader.js"
  module="~/react"
></script>

<script type="text/react">
  window.addEventListener('scriptload', () => {
    const App = () => (
      <div>
        Hi
      </div>
    );

    reactDOM.render(<App />, document.getElementById('app'));
  });
</script>
```

Customize event name of load:

```html
<script
  src="PATH/TO/scriptLoader.js"
  event:load="ready"
  module="~/react"
></script>

<script type="text/react">
  window.addEventListener('ready', () => {
    const App = () => (
      <div>
        Hi
      </div>
    );

    reactDOM.render(<App />, document.getElementById('app'));
});
</script>
```

### typescript

This module transpiles script written in TypeScript. We need to define the script type as `type="text/typescript"` or assign the file extension of script as `.ts`.

Inline source:

```html
<script src="PATH/TO/typescript.js"></script>
<script type="text/typescript">
  (() => {
    type AddProps = (a: number, b: number) => number;
    
    const add: AddProps = (a, b) => {
      const result = a + b;

      console.log(`${a} + ${b} = ${result}`);

      return result;
    };

    add(5, 8);
  })();
</script>
```

Source as TypeScript file:

```html
<script src="PATH/TO/typescript.js"></script>
<script src="foo.ts"></script>
```

```ts
(() => {
  type AddProps = (a: number, b: number) => number;
  
  const add: AddProps = (a, b) => {
    const result = a + b;

    console.log(`${a} + ${b} = ${result}`);

    return result;
  };

  add(5, 8);
})();
```

### scss

The module compiles style written in SCSS. We have to define the style type as `type="text/scss"` or set the file extension of style as `.scss`.

Inline source:

```html
<script src="PATH/TO/typescript.js"></script>
<style type="text/scss">
  #root {
    $color: #666;

    color: $color;

    .itme {
      border: 1px solid $color;
    }
  }
</style>
```

Source as SCSS file:

```html
<script src="PATH/TO/typescript.js"></script>
<link href="bar.scss" type="text/scss" rel="stylesheet" />
```

```scss
#root {
  $color: #666;

  color: $color;

  .itme {
    border: 1px solid $color;
  }
}
```

### react

It translates code targeting for React by Babel. We are supposed to define the type as `type="text/react"` or assign the file extension of source as `.jsx`/`.tsx`.

Inline source:

```html
<script src="PATH/TO/typescript.js"></script>
<script type="text/react">
  const App = ({ text }) => (
    <div>
      {text}
    </div>
  );

  ReactDOM.render(
    <App text={`Hello`} />,
    document.getElementById('app'),
  );
</script>
```

Source in React file:

```html
<script src="PATH/TO/typescript.js"></script>
<script src="baz.jsx"></script>
```

```jsx
const App = ({ text }) => (
  <div>
    {text}
  </div>
);

ReactDOM.render(
  <App text={`Hi`} />,
  document.getElementById('app'),
);
```

## License

[url-license]: https://github.com/lf2com/browser-utils/blob/master/LICENSE

Browser-utils is [MIT licensed][url-license].
