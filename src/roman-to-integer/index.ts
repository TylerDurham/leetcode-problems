function romanToInt(s: string): number {
  type r = { [key: string]: number };
  const romans: r = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr: string = s[i];
    const prev = i > 0 ? s[i - 1] : null;
    if ((curr === "V" || curr === "X") && prev === "I") {
      result = romans[curr] - 1;
    } else if ((curr === "L" || curr === "C") && prev === "X") {
      result = romans[curr] - 10;
    } else if ((curr === "D" || curr === "M") && prev === "C") {
      result = romans[curr] - 100;
    } else {
      result += romans[curr];
    }
  }
  return result;
}

export default romanToInt;
