import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const ShowOnlyForPrint = createWrapperComponent({
    displayName: 'ShowOnlyForPrint',
    mapPropsToClassNames: () => ({
      [styles['show-for-print']]: true,
    }),
  });

  const HideOnlyForPrint = createWrapperComponent({
    displayName: 'HideOnlyForPrint',
    mapPropsToClassNames: () => ({
      [styles['hide-for-print']]: true,
    }),
  });

  return { ShowOnlyForPrint, HideOnlyForPrint };
}
