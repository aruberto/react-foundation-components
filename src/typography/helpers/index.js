import styles from './styles';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const Subheader = createHigherOrderComponent({
  displayName: 'Subheader',
  mapPropsToClassNames: () => styles.subheader,
});

export const Lead = createHigherOrderComponent({
  displayName: 'Lead',
  mapPropsToClassNames: () => styles.lead,
});

export const UnbulletedList = createHigherOrderComponent({
  displayName: 'UnbulletedList',
  mapPropsToClassNames: () => styles['no-bullet'],
  defaultComponentClass: 'ul',
  mergeSingleChild: false,
});

export const Statistic = createHigherOrderComponent({
  displayName: 'Statistic',
  mapPropsToClassNames: () => styles.stat,
});
