export function classNamesMapper(lookup, classNames) {
  if (lookup && Object.keys(lookup).length) {
    const mappedClassNames = {};

    for (const [key, value] of Object.entries(classNames)) {
      mappedClassNames[lookup[key] || key] = value;
    }

    return mappedClassNames;
  }

  return classNames;
}
