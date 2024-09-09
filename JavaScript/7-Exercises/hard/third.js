function bracketCheck(str) {
  let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join("");

  while (brackets.match(/\(\)|\[\]|\{\}/)) {
    brackets = brackets.replace(/\(\)|\[\]|\{\}/, "");
    console.log(brackets);
  }

  return brackets.length === 0;
}
