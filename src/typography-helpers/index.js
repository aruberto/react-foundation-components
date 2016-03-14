import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Subheader = createWrapperComponent({
  displayName: 'Subheader',
  styles,
  mapPropsToClassNames: () => 'subheader',
});

export const Lead = createWrapperComponent({
  displayName: 'Lead',
  styles,
  mapPropsToClassNames: () => 'lead',
});

export const UnbulletedList = createWrapperComponent({
  displayName: 'UnbulletedList',
  styles,
  mapPropsToClassNames: () => 'no-bullet',
  defaultComponentClass: 'ul',
});

export const Statistic = createWrapperComponent({
  displayName: 'Statistic',
  styles,
  mapPropsToClassNames: () => 'stat',
});

export const TypographyHelpers = { Subheader, Lead, UnbulletedList, Statistic };

export default TypographyHelpers;
