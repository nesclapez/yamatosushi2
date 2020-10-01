export const basketCount = (basketState) =>
  basketState.reduce((total, basketItem) => total + basketItem.count, 0);
