import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import { HideForScreenReader } from '../visibility';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const CloseButton = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('close-button'));

  return (
    <button {...restProps} className={classNames} type="button">
      <HideForScreenReader>&times;</HideForScreenReader>
    </button>
  );
};

CloseButton.propTypes = {
  className: PropTypes.string,
};

export default CloseButton;
