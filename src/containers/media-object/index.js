import styles from './_styles.scss';
import create from './create';

const { MediaObject, MediaObjectSection } = create(styles);
MediaObject.Section = MediaObjectSection;

export default MediaObject;
export { MediaObject, MediaObjectSection };
