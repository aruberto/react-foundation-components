import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const ShowForPrint = createWrapperComponent({
  displayName: 'ShowOnlyForPrint',
  styles,
  mapProps: props => ({ props, classNames: 'show-for-print' }),
});

export const HideForPrint = createWrapperComponent({
  displayName: 'HideOnlyForPrint',
  styles,
  mapProps: props => ({ props, classNames: 'hide-for-print' }),
});

export const Print = { ShowFor: ShowForPrint, HideFor: HideForPrint };

export default Print;
