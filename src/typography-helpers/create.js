import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const Subheader = createWrapperComponent({
    displayName: 'Subheader',
    mapPropsToClassNames: () => styles.subheader,
  });

  const Lead = createWrapperComponent({
    displayName: 'Lead',
    mapPropsToClassNames: () => styles.lead,
  });

  const UnbulletedList = createWrapperComponent({
    displayName: 'UnbulletedList',
    mapPropsToClassNames: () => styles['no-bullet'],
    defaultComponentClass: 'ul',
  });

  const Statistic = createWrapperComponent({
    displayName: 'Statistic',
    mapPropsToClassNames: () => styles.stat,
  });

  return { Subheader, Lead, UnbulletedList, Statistic };
}
