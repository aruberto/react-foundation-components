export const SCREEN_SIZES = ['small', 'medium', 'large', 'xlarge', 'xxlarge'];
export const SMALLER_SCREEN_SIZES = SCREEN_SIZES.slice(0, 1);
export const LARGER_SCREEN_SIZES = SCREEN_SIZES.slice(1);

export const SCREEN_ORIENTATIONS = ['landscape', 'portrait'];

export const COMPONENT_COLORS = ['primary', 'secondary', 'success', 'alert', 'warning'];

export const COMPONENT_SIZES = ['tiny', 'small', 'large'];
export const CALLOUT_SIZES = COMPONENT_SIZES.filter((size) => size !== 'tiny');
export const MODAL_SIZES = COMPONENT_SIZES.concat(['full']);

export const MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];

export const OFF_CANVAS_POSITIONS = ['left', 'right'];
export const TITLE_BAR_POSITIONS = OFF_CANVAS_POSITIONS;
export const OVERLAY_POSITIONS = OFF_CANVAS_POSITIONS.concat(['top']);
export const FLOAT_POSITIONS = OFF_CANVAS_POSITIONS.concat(['center']);
export const TEXT_ALIGNMENTS = FLOAT_POSITIONS.concat(['justify']);

export const GRID_COLUMN_MIN = 1;
export const GRID_COLUMN_MAX = 12;
export const FLOAT_GRID_ROW_CLASS_NAMES = {
  collapse: {
    basePropName: 'Collapse',
    isNumber: false,
    skipSmall: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false,
    skipSmall: false
  },
  up: {
    basePropName: 'Up',
    isNumber: true,
    skipSmall: false
  }
};
export const FLOAT_GRID_COLUMN_CLASS_NAMES = {
  '': {
    basePropName: '',
    isNumber: true,
    skipSmall: false
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true,
    skipSmall: false
  },
  centered: {
    basePropName: 'Centered',
    isNumber: false,
    skipSmall: false
  },
  uncentered: {
    basePropName: 'Uncentered',
    isNumber: false,
    skipSmall: false
  },
  push: {
    basePropName: 'Push',
    isNumber: true,
    skipSmall: false
  },
  pull: {
    basePropName: 'Pull',
    isNumber: true,
    skipSmall: false
  }
};
export const FLEX_GRID_ROW_CLASS_NAMES = {
  unstack: {
    basePropName: 'Unstack',
    isNumber: false,
    skipSmall: true
  },
  collapse: {
    basePropName: 'Collapse',
    isNumber: false,
    skipSmall: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false,
    skipSmall: false
  }
};
export const FLEX_GRID_COLUMN_CLASS_NAMES = {
  '': {
    basePropName: '',
    isNumber: true,
    skipSmall: false
  },
  expand: {
    basePropName: 'Expand',
    isNumber: false,
    skipSmall: true
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true,
    skipSmall: false
  },
  order: {
    basePropName: 'Order',
    isNumber: true,
    skipSmall: false
  }
};
export const FLEX_GRID_HORIZONTAL_ALIGNMENTS = ['right', 'center', 'justify', 'spaced'];
export const FLEX_GRID_VERTICAL_ALIGNMENTS = ['top', 'middle', 'bottom', 'stretch'];
