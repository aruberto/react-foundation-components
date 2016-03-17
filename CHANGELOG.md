<a name="0.11.1"></a>
## [0.11.1](https://github.com/aruberto/react-foundation-components/compare/0.11.0...0.11.1) (2016-03-17)


#### Miscellaneous
* Added Pagination component.


<a name="0.11.0"></a>
# [0.11.0](https://github.com/aruberto/react-foundation-components/compare/0.10.2...0.11.0) (2016-03-17)


#### BREAKING CHANGES
* Migrated to stateless functional components while using [recompose](https://github.com/acdlite/recompose) and [uncontrollable](https://github.com/jquense/uncontrollable) to manage state when needed.
* Overhauled overlay backing code (used by tooltip and dropdown).


#### Miscellaneous
* Added Breadcrumb component.


<a name="0.10.2"></a>
## [0.10.2](https://github.com/aruberto/react-foundation-components/compare/0.10.1...0.10.2) (2016-03-14)


#### Miscellaneous
* Replaced use of Array.prototype.includes() with lodash/includes since babel-plugin-transform-runtime can't transform when it is used on instance variable.


<a name="0.10.1"></a>
## [0.10.1](https://github.com/aruberto/react-foundation-components/compare/0.10.0...0.10.1) (2016-03-14)


#### Miscellaneous
* Fix paths in main entry files.


<a name="0.10.0"></a>
# [0.10.0](https://github.com/aruberto/react-foundation-components/compare/0.9.3...0.10.0) (2016-03-13)


### BREAKING CHANGES
* Project layout restructured to remove more than half the files under src. Key usage difference is when importing flex components. They are no longer a sub folder under non-flex version of the component. You'll need to replace the last '/' with a '-'. Example:

Before:
```
import { ButtonGroup } from 'react-foundation-components/lib/button-group/flex';
import { Row, Column } from 'react-foundation-components/lib/grid/flex';
import { Menu, MenuItem } from 'react-foundation-components/lib/menu/flex';
```

Now:
```
import { ButtonGroup } from 'react-foundation-components/lib/button-group-flex';
import { Row, Column } from 'react-foundation-components/lib/grid-flex';
import { Menu, MenuItem } from 'react-foundation-components/lib/menu-flex';
```


<a name="0.9.3"></a>
## [0.9.3](https://github.com/aruberto/react-foundation-components/compare/0.9.2...0.9.3) (2016-03-07)


#### Miscellaneous
* Support grid and inline layout in FormField.


<a name="0.9.2"></a>
## [0.9.2](https://github.com/aruberto/react-foundation-components/compare/0.9.1...0.9.2) (2016-03-03)


#### Miscellaneous
* Added FormField Component.


<a name="0.9.1"></a>
## [0.9.1](https://github.com/aruberto/react-foundation-components/compare/0.9.0...0.9.1) (2016-03-02)


#### Miscellaneous

* Added ToggleSwitch to main package entry and \_foundation.scss
* Removed small-align-* since same as align-*
* Added responsive alignment props to TextAlignment.


<a name="0.9.0"></a>
# [0.9.0](https://github.com/aruberto/react-foundation-components/compare/0.8.2...0.9.0) (2016-03-02)


#### Miscellaneous

* Added ToggleSwitch component. This is based on https://ghinda.net/css-toggle-switch/foundation.html. Since this is not part of Foundation, this component will not work if using Foundation CSS from CDN. Need to use CSS Modules or import https://github.com/aruberto/react-foundation-components/blob/master/src/toggle-switch/_styles.scss manually.
* Added Flex Responsive Alignments. You can use props like largeHorizontalAlignment="right" to position Flex Children based on screen size. Since this is not part of Foundation, this component will not work if using Foundation CSS from CDN. Need to use CSS Modules or import https://github.com/aruberto/react-foundation-components/blob/master/src/flex/_custom.scss manually.


### BREAKING CHANGES

* Higher order components like ShowForScreenSize used to apply classes on it's child. The problem is that there was no guarantee that the child even used className prop. Therefore now these components always wrap in a span by default. You can use the componentClass prop to override this. Example to create a Button only visible on large screens simply declare it as
```
<ShowForScreenSize screenSize="large" componentClass={Button} onClick={this.handleClick}>
  Button Label
</ShowForScreenSize>
```
* Prop name changes
 * OffCanvas - revealForSize => revealFor
 * Visibility Components - size => screenSize, orientaion => screenOrientation
* FlexParent now sets display: flex so you don't have to.
* Grid / Flex Grid props centered and collapse have changed.
  * [size]Collapse="collapse" to collapse and [size]Collapse="uncollapse" to uncollapse.
  * [size]Centered="centered" to center and [size]Centered="uncentered" to uncenter.

<a name="0.8.2"></a>
## [0.8.2](https://github.com/aruberto/react-foundation-components/compare/0.8.1...0.8.2) (2016-02-29)


#### Miscellaneous

* Menu horizontal and vertical props accept small as value. Value of small is same as a value of true.


<a name="0.8.1"></a>
## [0.8.1](https://github.com/aruberto/react-foundation-components/compare/0.8.0...0.8.1) (2016-02-28)


#### Miscellaneous

* Updated README.


<a name="0.8.0"></a>
# [0.8.0](https://github.com/aruberto/react-foundation-components/compare/0.7.0...0.8.0) (2016-02-28)


### BREAKING CHANGES

* Updated to Foundation Sites 6.2
* Massive re-write of entire project. Main set of components (ones under lib) now assume that CSS Modules is used. If you can't use CSS Modules, use components under lib/global. Components under lib and lib/global are identical with exception that lib/global components use Foundation's class names whereas components under lib use class names generated from requiring SCSS file.
* Removed the component categories. Now import button instead of controls/button.
* Added Menu and Top Bar components.

<a name="0.7.0"></a>
# [0.7.0](https://github.com/aruberto/react-foundation-components/compare/0.6.1...0.7.0) (2016-02-23)


### BREAKING CHANGES

* OffCanvas now has a more composable API. It has been split into 3 components: OffCanvas, OffCanvasContainer and OffCanvasContent. Please see demo for example use of new API.


<a name="0.6.1"></a>
## [0.6.1](https://github.com/aruberto/react-foundation-components/compare/0.6.0...0.6.1) (2016-02-08)


#### Miscellaneous

* Column no longer merges with child component.


<a name="0.6.0"></a>
# [0.6.0](https://github.com/aruberto/react-foundation-components/compare/0.5.1...0.6.0) (2016-02-08)


### BREAKING CHANGES

* Removed usage of REACT_FOUNDATION_COMPONENTS_CSS process flag. Foundation stylesheets are always required. Code will fall back to using global class names if result from require is not an object or an empty object.


<a name="0.5.1"></a>
## [0.5.1](https://github.com/aruberto/react-foundation-components/compare/0.5.0...0.5.1) (2016-02-08)


#### Miscellaneous

* SCSS files were not being copied to lib folder correctly. This should be first working build on npm. Sorry.


<a name="0.5.0"></a>
# [0.5.0](https://github.com/aruberto/react-foundation-components/compare/0.4.0...0.5.0) (2016-02-06)


### BREAKING CHANGES

* Foundation CSS stylesheets are NO LONGER REQUIRED BY DEFAULT! Please see README.md installation instructions to see how to setup Global CSS or CSS Modules


<a name="0.4.0"></a>
# [0.4.0](https://github.com/aruberto/react-foundation-components/compare/0.3.0...0.4.0) (2016-02-04)


### Miscellaneous

* Add accordion, callout, dropdown, media object, off canvas, reveal, table, tabs and title bar container components.


### BREAKING CHANGES

* Use onToggle instead of onChange for switch


<a name="0.3.0"></a>
# [0.3.0](https://github.com/aruberto/react-foundation-components/compare/0.2.1...0.3.0) (2016-02-01)


### Miscellaneous

* Add badge, flex video, label, progress bar, thumbnail and tooltip media components.


<a name="0.2.1"></a>
## [0.2.1](https://github.com/aruberto/react-foundation-components/compare/0.2.0...0.2.1) (2016-01-29)


#### Miscellaneous

* Published wrong version to npm.


<a name="0.2.0"></a>
# [0.2.0](https://github.com/aruberto/react-foundation-components/compare/0.1.2...0.2.0) (2016-01-29)


### Miscellaneous

* Add button, button group, close button and switch control components.


<a name="0.1.2"></a>
## [0.1.2](https://github.com/aruberto/react-foundation-components/compare/0.1.1...0.1.2) (2016-01-28)


#### Miscellaneous

* Add release npm scripts.


<a name="0.1.1"></a>
## [0.1.1](https://github.com/aruberto/react-foundation-components/compare/0.1.0...0.1.1) (2016-01-28)


### Miscellaneous

* Add grid, visibility, float and typography components.
