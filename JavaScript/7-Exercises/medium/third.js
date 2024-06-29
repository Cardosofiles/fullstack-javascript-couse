function insertIntoString(str, toInsert, indexes) {
  const charsArray = str.split("");
  let insertCount = 0;

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + insertCount, 0, toInsert);
      insertCount++;
    }
  }

  return charsArray.join("");
}
