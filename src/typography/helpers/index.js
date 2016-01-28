import style from './style.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const Subheader = createHigherOrderComponent({
  displayName: 'Subheader',
  mapPropsToClassNames: () => joinObjects(style, {subheader: true})
});

export const Lead = createHigherOrderComponent({
  displayName: 'Lead',
  mapPropsToClassNames: () => joinObjects(style, {lead: true})
});

export const UnbulletedList = createHigherOrderComponent({
  displayName: 'UnbulletedList',
  mapPropsToClassNames: () => joinObjects(style, {'no-bullet': true}),
  defaultComponentClass: 'ul'
});

export const Statistic = createHigherOrderComponent({
  displayName: 'Statistic',
  mapPropsToClassNames: () => joinObjects(style, {stat: true})
});
