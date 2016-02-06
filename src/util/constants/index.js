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
