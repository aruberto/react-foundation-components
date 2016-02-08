# react-foundation-components

Foundation Sites 6 components implemented in React and compatible with CSS Modules!

## Why?

I like [React](https://facebook.github.io/react). I like [CSS Modules](https://github.com/css-modules/css-modules). I like [Foundation Sites](http://foundation.zurb.com/sites.html). This is an experiment to see if it's possible to combine all these tools in a modular way!

## Installation

```
npm install --save react-foundation-components
```

Each component requires the subset of Foundation CSS it needs. If CSS Modules is enabled, the final CSS and JS bundle will use local scoped class names instead of Foundation's global class names!

Demo of the components is available [here](http://aruberto.github.io/react-foundation-components). Please see [demo source code](https://github.com/aruberto/react-foundation-components/tree/master/demo) for an example webpack setup and example use of each component. Proper documentation to come later ...

Recommend importing on a per component basis instead of importing the main entry point of package. Importing main entry point will cause final bundle to include all CSS and JS whereas importing on a per component basis will cause your final bundle to only include the CSS and JS you actually need (this may change when tree shaking is introduced in webpack 2)!

Favor

```
import Button from 'react-foundation-components/lib/button';
import {ShowForScreenSize, HideForScreenSize} from 'react-foundation-components/lib/visibility';
```

over

```
import {Button, ShowForScreenSize, HideForScreenSize} from 'react-foundation-components';
```

## Thanks

A lot of the components are inspired by [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) and this project even makes heavy use their utility libraries like [react-overlays](https://github.com/react-bootstrap/react-overlays), [dom-helpers](https://github.com/react-bootstrap/dom-helpers), [react-prop-types](https://github.com/react-bootstrap/react-prop-types) and [uncontrollable](https://github.com/jquense/uncontrollable). So big thanks to all these project's contributers for all their amazing work!
