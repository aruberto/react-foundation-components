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
export const OVERLAY_POSITIONS_INTERNAL = [...OFF_CANVAS_POSITIONS, 'top'];
export const OVERLAY_POSITIONS = [...OVERLAY_POSITIONS_INTERNAL, 'bottom'];
export const FLOAT_POSITIONS = [...OFF_CANVAS_POSITIONS, CENTER_POSITION];
export const TEXT_ALIGNMENTS = [...FLOAT_POSITIONS, 'justify'];
export const MENU_ALIGNMENTS = [...FLOAT_POSITIONS];
export const FLEX_HORIZONTAL_ALIGNMENTS = [...TEXT_ALIGNMENTS, 'spaced'];
export const [, ...FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL] = FLEX_HORIZONTAL_ALIGNMENTS;
export const MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];
export const FLEX_VERTICAL_ALIGNMENTS = ['top', ...MEDIA_OBJECT_SECTION_ALIGNMENTS, 'stretch'];

export const GRID_ROW_CLASS_NAMES = {
  collapse: {
    basePropName: 'Collapse',
    range: false,
    skipSmall: false,
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    range: false,
    skipSmall: false,
  },
  up: {
    basePropName: 'Up',
    range: true,
    rangeMin: 1,
    rangeMax: 8,
    skipSmall: false,
  },
};
export const GRID_COLUMN_CLASS_NAMES = {
  '': {
    basePropName: '',
    range: true,
    rangeMin: 1,
    rangeMax: 12,
    skipSmall: false,
  },
  offset: {
    basePropName: 'Offset',
    range: true,
    rangeMin: 0,
    rangeMax: 11,
    skipSmall: false,
  },
  centered: {
    basePropName: 'Centered',
    range: false,
    skipSmall: false,
  },
  uncentered: {
    basePropName: 'Uncentered',
    range: false,
    skipSmall: false,
  },
  push: {
    basePropName: 'Push',
    range: true,
    rangeMin: 1,
    rangeMax: 11,
    skipSmall: false,
  },
  pull: {
    basePropName: 'Pull',
    range: true,
    rangeMin: 1,
    rangeMax: 11,
    skipSmall: false,
  },
};

export const FLEX_CHILD_CLASS_NAMES = {
  order: {
    basePropName: 'Order',
    range: true,
    rangeMin: 1,
    rangeMax: 6,
    skipSmall: false,
  },
};
export const FLEX_GRID_ROW_CLASS_NAMES = {
  unstack: {
    basePropName: 'Unstack',
    range: false,
    skipSmall: true,
  },
  collapse: {
    basePropName: 'Collapse',
    range: false,
    skipSmall: false,
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    range: false,
    skipSmall: false,
  },
  up: {
    basePropName: 'Up',
    range: true,
    rangeMin: 1,
    rangeMax: 8,
    skipSmall: false,
  },
};
export const FLEX_GRID_COLUMN_CLASS_NAMES = {
  '': {
    basePropName: '',
    range: true,
    rangeMin: 1,
    rangeMax: 12,
    skipSmall: false,
  },
  expand: {
    basePropName: 'Expand',
    range: false,
    skipSmall: true,
  },
  offset: {
    basePropName: 'Offset',
    range: true,
    rangeMin: 0,
    rangeMax: 11,
    skipSmall: false,
  },
};
