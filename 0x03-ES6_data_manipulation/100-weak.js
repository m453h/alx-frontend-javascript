export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let queryCount = weakMap.get(endPoint) || 0;
  queryCount += 1;
  weakMap.set(endPoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
