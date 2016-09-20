import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Subheader = createWrapperComponent({
  displayName: 'Subheader',
  styles,
  mapProps: props => ({ props, classNames: 'subheader' }),
});

export const Lead = createWrapperComponent({
  displayName: 'Lead',
  styles,
  mapProps: props => ({ props, classNames: 'lead' }),
});

export const UnbulletedList = createWrapperComponent({
  displayName: 'UnbulletedList',
  styles,
  mapProps: props => ({ props, classNames: 'no-bullet' }),
  defaultComponentClass: 'ul',
});

export const Statistic = createWrapperComponent({
  displayName: 'Statistic',
  styles,
  mapProps: props => ({ props, classNames: 'stat' }),
});

export const TypographyHelpers = { Subheader, Lead, UnbulletedList, Statistic };

export default TypographyHelpers;
