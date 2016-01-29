import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const Subheader = createHigherOrderComponent({
  displayName: 'Subheader',
  mapPropsToClassNames: () => joinObjects(styles, {subheader: true})
});

export const Lead = createHigherOrderComponent({
  displayName: 'Lead',
  mapPropsToClassNames: () => joinObjects(styles, {lead: true})
});

export const UnbulletedList = createHigherOrderComponent({
  displayName: 'UnbulletedList',
  mapPropsToClassNames: () => joinObjects(styles, {'no-bullet': true}),
  defaultComponentClass: 'ul'
});

export const Statistic = createHigherOrderComponent({
  displayName: 'Statistic',
  mapPropsToClassNames: () => joinObjects(styles, {stat: true})
});
