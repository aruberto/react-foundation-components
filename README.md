# react-foundation-components

Foundation Sites components built with the power of React and CSS Modules!

## Why?

I like [React](https://facebook.github.io/react). I like [CSS Modules](https://github.com/css-modules/css-modules). I like [Foundation Sites](http://foundation.zurb.com/sites.html). This is an experiment to see if it's possible to combine all these libraries in a modular way!

## Installation

```
npm install --save react-foundation-components
```

Please see demo folder for an example webpack setup and example use of each component. Proper documentation to come later ...

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

## Do I have to use CSS Modules?

No, you can use disable modules flag on css-loader and use Global CSS classes. When modules flag is disabled, the Foundation class names will be used in generated CSS style sheet files and used by components! However there is one caveat to using global CSS classes. The grid and flex-grid systems use same class names (row and column). Therefore you must make sure to NEVER IMPORT BOTH GRID SYSTEMS (which means you must import per component and never import main package entry since importing react-foundation-components will cause both Grid systems to appear in final CSS bundle)!

## Thanks

A lot of the components are inspired by [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) and this project even makes heavy use their utility libraries like [react-overlays](https://github.com/react-bootstrap/react-overlays), [dom-helpers](https://github.com/react-bootstrap/dom-helpers), [react-prop-types](https://github.com/react-bootstrap/react-prop-types) and [uncontrollable](https://github.com/jquense/uncontrollable). So big thanks to all these project's contributers for all their amazing work!
