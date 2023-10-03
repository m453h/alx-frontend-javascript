export default function updateUniqueItems(groceryList) {
  if (groceryList instanceof Map) {
    for (const [key, value] of groceryList) {
      if (value === 1) {
        groceryList.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return groceryList;
}
