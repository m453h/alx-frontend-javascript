export default function hasValuesFromArray(set, array) {
  let isFound = true;

  array.forEach((value) => {
    if (!set.has(value)) {
      isFound = false;
    }
  });

  return isFound;
}
