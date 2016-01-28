export default function joinObjects(lhs = {}, rhs = {}) {
  if (Object.keys(lhs).length) {
    const result = {};

    for (const [key, value] of Object.entries(rhs)) {
      if (lhs[key]) {
        result[lhs[key]] = value;
      }
    }

    return result;
  }

  return rhs;
}
