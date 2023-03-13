export async function createPromiseMock(mock: any[]) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(mock);
    }, Math.floor(Math.random() * (700 - 200) + 100));
  });
}
