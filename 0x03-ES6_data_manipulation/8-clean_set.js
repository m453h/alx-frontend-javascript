export default function cleanSet(set, startString) {
  if (startString !== '' && typeof startString === 'string') {
    const startsWith = Array.from(set)
      .filter((value) => value.startsWith(startString))
      .map((value) => value.substring(startString.length));

    return startsWith.join('-');
  }
  return '';
}
