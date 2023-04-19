export function getShuffledArr(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
}

export function getRandomAPR() {
  return (
    parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        .toString()
        .slice(0, 7)
        .replaceAll(",", "")
    ) / 100
  );
}

export function getRandomPoolLiquidity() {
  return parseInt(
    getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
      .toString()
      .replaceAll(",", "")
  );
}

export function getRandomMyLiquidity() {
  return parseInt(
    getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
      .toString()
      .slice(0, 5)
      .replaceAll(",", "")
  );
}

