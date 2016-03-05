import styles from './_styles.scss';
import create from '../create';
import { FlexParent, FlexChild } from '../../flex';

const { MediaObject, MediaObjectSection } = create(styles, FlexParent, FlexChild);

export default MediaObject;
export { MediaObject, MediaObjectSection };
