import createHigherOrderComponent from '../../util/create-higher-order-component';

export default function create(styles) {
  const Subheader = createHigherOrderComponent({
    displayName: 'Subheader',
    mapPropsToClassNames: () => styles.subheader,
  });

  const Lead = createHigherOrderComponent({
    displayName: 'Lead',
    mapPropsToClassNames: () => styles.lead,
  });

  const UnbulletedList = createHigherOrderComponent({
    displayName: 'UnbulletedList',
    mapPropsToClassNames: () => styles['no-bullet'],
    defaultComponentClass: 'ul',
    mergeSingleChild: false,
  });

  const Statistic = createHigherOrderComponent({
    displayName: 'Statistic',
    mapPropsToClassNames: () => styles.stat,
  });

  return { Subheader, Lead, UnbulletedList, Statistic };
}
