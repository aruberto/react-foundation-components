import {PropTypes} from 'react';

import styles from './styles';
import {TEXT_ALIGNMENTS} from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default createHigherOrderComponent({
  displayName: 'TextAlignment',
  propTypes: {alignment: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired},
  mapPropsToClassNames: ({alignment}) => (
    {
      [styles[`text-${alignment}`]]: TEXT_ALIGNMENTS.includes(alignment)
    }
  ),
  defaultComponentClass: 'p'
});
