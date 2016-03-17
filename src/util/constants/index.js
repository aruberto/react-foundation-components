import keyMirrorArray from '../key-mirror-array';

export const SCREEN_SIZE_SMALL = 'small';
export const BUTTON_GROUP_STACK_SCREEN_SIZES = [SCREEN_SIZE_SMALL, 'medium'];
export const SCREEN_SIZES = [...BUTTON_GROUP_STACK_SCREEN_SIZES, 'large', 'xlarge', 'xxlarge'];
export const [, ...LARGER_SCREEN_SIZES] = SCREEN_SIZES;

export const SCREEN_ORIENTATIONS = ['landscape', 'portrait'];

export const COMPONENT_ALTERNATIVE_COLORS = ['secondary', 'success', 'alert', 'warning'];
export const COMPONENT_COLORS = ['primary', ...COMPONENT_ALTERNATIVE_COLORS];

export const CALLOUT_SIZES = ['small', 'large'];
export const COMPONENT_SIZES = ['tiny', ...CALLOUT_SIZES];
export const MODAL_SIZES = [...COMPONENT_SIZES, 'full'];

export const CENTER_POSITION = 'center';
export const OFF_CANVAS_POSITIONS = ['left', 'right'];
export const TITLE_BAR_POSITIONS = [...OFF_CANVAS_POSITIONS];
export const TOP_BAR_POSITIONS = [...OFF_CANVAS_POSITIONS];
export const OVERLAY_POSITIONS_INTERNAL = [...OFF_CANVAS_POSITIONS, 'top'];
export const OVERLAY_POSITIONS = [...OVERLAY_POSITIONS_INTERNAL, 'bottom'];
export const OVERLAY_ALIGNMENTS = [...OVERLAY_POSITIONS, CENTER_POSITION];
export const FLOAT_POSITIONS = [...OFF_CANVAS_POSITIONS, CENTER_POSITION];
export const TEXT_ALIGNMENTS = [...FLOAT_POSITIONS, 'justify'];
export const MENU_ALIGNMENTS = [...FLOAT_POSITIONS];
export const MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];
export const FLEX_HORIZONTAL_ALIGNMENTS = [...TEXT_ALIGNMENTS, 'spaced'];
export const FLEX_VERTICAL_ALIGNMENTS = ['top', ...MEDIA_OBJECT_SECTION_ALIGNMENTS, 'stretch'];

export const CLASS_NAME_TYPES = keyMirrorArray(['BOOL', 'RANGE', 'ENUM']);
export const COLLAPSE_MODES = ['collapse', 'uncollapse'];
export const CENTERED_MODES = ['centered', 'uncentered'];
export const TEXT_ALIGNMENT_CLASS_NAMES = [
  {
    baseClassName: 'text',
    basePropName: 'Alignment',
    type: CLASS_NAME_TYPES.ENUM,
    values: TEXT_ALIGNMENTS,
    flattenSmall: true,
  },
];
export const GRID_ROW_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: 'Collapse',
    type: CLASS_NAME_TYPES.ENUM,
    values: COLLAPSE_MODES,
  },
  {
    baseClassName: 'up',
    basePropName: 'Up',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 8,
  },
];
export const GRID_COLUMN_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: '',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 12,
  },
  {
    baseClassName: 'offset',
    basePropName: 'Offset',
    type: CLASS_NAME_TYPES.RANGE,
    min: 0,
    max: 11,
  },
  {
    baseClassName: '',
    basePropName: 'Centered',
    type: CLASS_NAME_TYPES.ENUM,
    values: CENTERED_MODES,
  },
  {
    baseClassName: 'push',
    basePropName: 'Push',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 11,
  },
  {
    baseClassName: 'pull',
    basePropName: 'Pull',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 11,
  },
];

export const FLEX_PARENT_CLASS_NAMES = [];
export const FLEX_CHILD_CLASS_NAMES = [
  {
    baseClassName: 'order',
    basePropName: 'Order',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 6,
  },
];
export const FLEX_GRID_ROW_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: 'Collapse',
    type: CLASS_NAME_TYPES.ENUM,
    values: COLLAPSE_MODES,
  },
  {
    baseClassName: 'up',
    basePropName: 'Up',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 8,
  },
];
export const FLEX_GRID_COLUMN_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: '',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 12,
  },
  {
    baseClassName: 'offset',
    basePropName: 'Offset',
    type: CLASS_NAME_TYPES.RANGE,
    min: 0,
    max: 11,
  },
];
