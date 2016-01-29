import {PropTypes} from 'react';

import style from './style.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const TEXT_ALIGNMENTS = ['left', 'right', 'center', 'justify'];

export default createHigherOrderComponent({
  displayName: 'TextAlignment',
  propTypes: {alignment: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired},
  mapPropsToClassNames: ({alignment}) => joinObjects(
    style,
    {[`text-${alignment}`]: TEXT_ALIGNMENTS.includes(alignment)}
  )
});
