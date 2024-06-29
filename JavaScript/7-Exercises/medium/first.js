function romanNumeral(str) {
  const numeralsArray = str.split("");

  const decimalsArray = numeralsArray.map((numeral) => {
    switch (numeral) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  });

  return decimalsArray.reduceRight((accum, current, index, array) => {
    if (current < array[index + 1]) {
      return accum - current;
    } else {
      return accum + current;
    }
  }, 0);
}
