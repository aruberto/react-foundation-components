import styles from './_styles.scss';
import create from './create';

const { OffCanvas, OffCanvasContent, OffCanvasContainer } = create(styles);
OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

export default OffCanvas;
export { OffCanvas, OffCanvasContent, OffCanvasContainer };
