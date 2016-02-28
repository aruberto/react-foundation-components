import styles from './_styles.scss';
import create from '../create';
import { FlexParent, FlexChild } from '../../flex';

const { MediaObject, MediaObjectSection } = create(styles, FlexParent, FlexChild);
MediaObject.Section = MediaObjectSection;

export default MediaObject;
export { MediaObject, MediaObjectSection };
