import {PropTypes} from 'react';

import style from './style.scss';
import {TEXT_ALIGNMENTS} from '../../util/constants';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default createHigherOrderComponent({
  displayName: 'TextAlignment',
  propTypes: {alignment: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired},
  mapPropsToClassNames: ({alignment}) => joinObjects(
    style,
    {[`text-${alignment}`]: TEXT_ALIGNMENTS.includes(alignment)}
  ),
  defaultComponentClass: 'p'
});
