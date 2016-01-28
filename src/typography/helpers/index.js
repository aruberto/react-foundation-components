import style from './style.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const Subheader = createHigherOrderComponent({
  displayName: 'Subheader',
  mapPropsToClassNames: () => joinObjects(style, {subheader: true}),
  defaultComponentClass: 'h1'
});

export const Lead = createHigherOrderComponent({
  displayName: 'Lead',
  mapPropsToClassNames: () => joinObjects(style, {lead: true})
});

export const UnBulletedList = createHigherOrderComponent({
  displayName: 'UnBulletedList',
  mapPropsToClassNames: () => joinObjects(style, {'no-bullet': true}),
  defaultComponentClass: 'ul'
});

export const Statistic = createHigherOrderComponent({
  displayName: 'Statistic',
  mapPropsToClassNames: () => joinObjects(style, {stat: true})
});
