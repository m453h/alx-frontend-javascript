export default function uploadPhoto(fileName) {
  const promise = new Promise(((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  }));
  return promise;
}
