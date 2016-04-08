# react-foundation-components

Foundation Sites 6 components implemented in React and compatible with CSS Modules!

## Why?

I like [React](https://facebook.github.io/react). I like [CSS Modules](https://github.com/css-modules/css-modules). I like [Foundation Sites](http://foundation.zurb.com/sites.html). This is an experiment to see if it's possible to combine all these tools in a modular way!

## Installation

```
npm install --save react-foundation-components
```

Each component uses local scoped CSS by requiring the subset of the Foundation stylesheets it needs.

Documentation (in progress) or demos of the components are available at http://aruberto.github.io/react-foundation-components. Please look at https://github.com/aruberto/react-foundation-components/tree/master/docs for an example webpack setup and example use of each component.

You can also look at https://github.com/aruberto/react-foundation-components/tree/master/examples/css-modules as an example project that uses CSS Modules with this library.

If you want to use CSS modules and customize Foundation at the same time, look at https://github.com/aruberto/react-foundation-components/tree/master/examples/css-modules-custom which uses https://www.npmjs.com/package/jsontosass-loader to inject sass variables that override Foundation's default settings.

Recommend importing on a per component basis instead of importing the main entry point of package. Importing main entry point will cause final bundle to include all CSS and JS whereas importing on a per component basis will cause your final bundle to only include the CSS and JS you actually need (this may change when tree shaking is introduced in webpack 2)!

Favor

```
import Button from 'react-foundation-components/lib/button';
import { ShowForScreenSize, HideForScreenSize } from 'react-foundation-components/lib/visibility';
```

over

```
import { Button, ShowForScreenSize, HideForScreenSize } from 'react-foundation-components';
```

If you can't use CSS Modules, a set of components that use Foundation's global scoped class names are also provided. These are located under react-foundation-components/lib/global. To import Button that uses global scoped class names:

```
import Button from 'react-foundation-components/lib/global/button';
import { ShowForScreenSize, HideForScreenSize } from 'react-foundation-components/lib/global/visibility';
```

If you use the components under react-foundation-components/lib/global, you are responsible for loading Foundation CSS stylesheet. You can do this in a few ways:
 * include stylesheet such as https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation.min.css in head of your html with CDN link
 * Import/Require react-foundation-components/lib/\_foundation.scss
 * Use https://www.npmjs.com/package/foundation-sites-loader

Here are some example applications that use global scoped class name components:
 * Uses Foundation from CDN - https://github.com/aruberto/react-foundation-components/tree/master/examples/cdn
 * Uses Foundation (Flexbox Version) from CDN - https://github.com/aruberto/react-foundation-components/tree/master/examples/cdn-flex
 * Requires react-foundation-components/lib/\_foundation.scss with global-flexbox set to false - https://github.com/aruberto/react-foundation-components/tree/master/examples/global
 * Requires react-foundation-components/lib/\_foundation.scss with global-flexbox set to true - https://github.com/aruberto/react-foundation-components/tree/master/examples/global-flex

## Thanks

A lot of the components are inspired by [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) and this project even makes heavy use their utility libraries like [react-overlays](https://github.com/react-bootstrap/react-overlays), [dom-helpers](https://github.com/react-bootstrap/dom-helpers), [react-prop-types](https://github.com/react-bootstrap/react-prop-types) and [uncontrollable](https://github.com/jquense/uncontrollable). So big thanks to all these project's contributers for all their amazing work!
