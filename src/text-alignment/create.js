import { PropTypes } from 'react';

import { TEXT_ALIGNMENTS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const TextAlignment = createWrapperComponent({
    displayName: 'TextAlignment',
    propTypes: {
      alignment: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired,
    },
    mapPropsToClassNames: ({ alignment }) => ({
      [styles[`text-${alignment}`]]: TEXT_ALIGNMENTS.includes(alignment),
    }),
    defaultComponentClass: 'p',
  });

  return { TextAlignment };
}
