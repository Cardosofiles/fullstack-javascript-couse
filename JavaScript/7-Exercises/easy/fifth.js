function smallerPairs([x, y]) {
  const pairs = [];

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      pairs.push([i, j]);
    }
  }

  return pairs;
}
