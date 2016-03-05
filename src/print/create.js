import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const ShowForPrint = createWrapperComponent({
    displayName: 'ShowOnlyForPrint',
    mapPropsToClassNames: () => ({
      [styles['show-for-print']]: true,
    }),
  });

  const HideForPrint = createWrapperComponent({
    displayName: 'HideOnlyForPrint',
    mapPropsToClassNames: () => ({
      [styles['hide-for-print']]: true,
    }),
  });

  const Print = {
    ShowFor: ShowForPrint,
    HideFor: HideForPrint,
  };

  return { Print, ShowForPrint, HideForPrint };
}
