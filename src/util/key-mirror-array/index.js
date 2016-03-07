export default function keyMirrorArray(array) {
  const result = {};

  array.forEach((item) => {
    result[item] = item;
  });

  return result;
}
