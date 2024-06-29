function quotation(fullName) {
  const names = fullName.split(" ");
  let initials = "";

  for (let i = 0; i < names.length - 1; i++) {
    initials += ` ${names[i][0].toUpperCase()}.`;
  }
  return `${names[names.length - 1].toUpperCase()},${initials}`;
}
