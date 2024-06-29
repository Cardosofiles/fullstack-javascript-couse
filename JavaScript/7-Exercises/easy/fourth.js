function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

function factorial(num) {
  const bigInt = BigInt(num);

  if (bigInt === 0n) return 1n;
  else return bigInt * factorial(bigInt - 1n);
}
