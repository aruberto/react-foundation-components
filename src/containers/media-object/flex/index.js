import styles from './_styles.scss';
import create from '../create';
import { FlexChild } from '../../../general/flex';

const { MediaObject, MediaObjectSection } = create(styles, FlexChild);
MediaObject.Section = MediaObjectSection;

export default MediaObject;
export { MediaObject, MediaObjectSection };
