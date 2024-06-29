function calculateDigit(arr) {
  const step1 = arr.reduce(
    (accum, current, index) =>
      index === 0 || index % 2 === 0 ? accum + current : accum,
    0
  );
  const step2 = step1 * 3;
  const step3 =
    step2 +
    arr.reduce(
      (accum, current, index) => (index % 2 !== 0 ? accum + current : accum),
      0
    );

  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0;
}
