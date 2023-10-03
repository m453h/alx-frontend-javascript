export default function cleanSet(set, startString) {
  const startsWith = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return startsWith.join('-');
}
