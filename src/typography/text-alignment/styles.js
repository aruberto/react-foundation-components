import keyMirrorArray from '../../util/key-mirror-array';
import { TEXT_ALIGNMENTS } from '../../util/constants';

const styles = TEXT_ALIGNMENTS.map((alignment) => `text-${alignment}`);

export default keyMirrorArray(styles);
