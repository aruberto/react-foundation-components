export const SCREEN_SIZE_SMALL = 'small';
export const SCREEN_SIZE_MEDIUM = 'medium';
export const SCREEN_SIZES = [SCREEN_SIZE_SMALL, SCREEN_SIZE_MEDIUM, 'large', 'xlarge', 'xxlarge'];
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
export const FLOAT_POSITIONS = [...OFF_CANVAS_POSITIONS, CENTER_POSITION];
export const TEXT_ALIGNMENTS = [...FLOAT_POSITIONS, 'justify'];
export const MENU_ALIGNMENTS = [...FLOAT_POSITIONS];
export const FLEX_HORIZONTAL_ALIGNMENTS = [...TEXT_ALIGNMENTS, 'spaced'];
export const [, ...FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL] = FLEX_HORIZONTAL_ALIGNMENTS;
export const MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];
export const FLEX_VERTICAL_ALIGNMENTS = ['top', ...MEDIA_OBJECT_SECTION_ALIGNMENTS, 'stretch'];

export const CLASS_NAME_TYPES = {
  BOOL: 'BOOL',
  RANGE: 'RANGE',
  ENUM: 'ENUM',
};
export const GRID_ROW_CLASS_NAMES = [
  {
    baseClassName: 'collapse',
    basePropName: 'Collapse',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'uncollapse',
    basePropName: 'Uncollapse',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'up',
    basePropName: 'Up',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 8,
    largeOnly: false,
  },
];
export const GRID_COLUMN_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: '',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 12,
    largeOnly: false,
  },
  {
    baseClassName: 'offset',
    basePropName: 'Offset',
    type: CLASS_NAME_TYPES.RANGE,
    min: 0,
    max: 11,
    largeOnly: false,
  },
  {
    baseClassName: 'centered',
    basePropName: 'Centered',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'uncentered',
    basePropName: 'Uncentered',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'push',
    basePropName: 'Push',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 11,
    largeOnly: false,
  },
  {
    baseClassName: 'pull',
    basePropName: 'Pull',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 11,
    largeOnly: false,
  },
];

export const FLEX_PARENT_CLASS_NAMES = [
  {
    baseClassName: 'align',
    basePropName: 'HorizontalAlignment',
    type: CLASS_NAME_TYPES.ENUM,
    values: FLEX_HORIZONTAL_ALIGNMENTS,
    largeOnly: true,
  },
  {
    baseClassName: 'align',
    basePropName: 'VerticalAlignment',
    type: CLASS_NAME_TYPES.ENUM,
    values: FLEX_VERTICAL_ALIGNMENTS,
    largeOnly: true,
  },
];
export const FLEX_CHILD_CLASS_NAMES = [
  {
    baseClassName: 'align-self',
    basePropName: 'VerticalAlignment',
    type: CLASS_NAME_TYPES.ENUM,
    values: FLEX_VERTICAL_ALIGNMENTS,
    largeOnly: true,
  },
  {
    baseClassName: 'order',
    basePropName: 'Order',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 6,
    largeOnly: false,
  },
];
export const FLEX_GRID_ROW_CLASS_NAMES = [
  {
    baseClassName: 'unstack',
    basePropName: 'Unstack',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: true,
  },
  {
    baseClassName: 'collapse',
    basePropName: 'Collapse',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'uncollapse',
    basePropName: 'Uncollapse',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: false,
  },
  {
    baseClassName: 'up',
    basePropName: 'Up',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 8,
    largeOnly: false,
  },
];
export const FLEX_GRID_COLUMN_CLASS_NAMES = [
  {
    baseClassName: '',
    basePropName: '',
    type: CLASS_NAME_TYPES.RANGE,
    min: 1,
    max: 12,
    largeOnly: false,
  },
  {
    baseClassName: 'expand',
    basePropName: 'Expand',
    type: CLASS_NAME_TYPES.BOOL,
    largeOnly: true,
  },
  {
    baseClassName: 'offset',
    basePropName: 'Offset',
    type: CLASS_NAME_TYPES.RANGE,
    min: 0,
    max: 11,
    largeOnly: false,
  },
];
