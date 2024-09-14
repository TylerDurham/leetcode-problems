function romanToInt(s: string): number {

  type r = { [key: string]: number };
  const rns: r = {
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

    // Current character
    const cc: string = s[i];

    // Previous character
    const pc = i > 0 ? s[i - 1] : null;

    // Next character
    const nc = i < s.length ? s[i + 1] : null;

    if (cc === "I" && nc === "V") {
      result += 4;
      i++;  // Skip to the next character
    } else if (cc === "I" && nc === "X") {
      result += 9;
      i++;  // Skip to the next character
    } else if (cc === "X" && nc === "L") {
      result += 40;
      i++;  // Skip to the next character
    } else if (cc === "X" && nc === "C") {
      result += 90;
      i++;  // Skip to the next character
    } else if (cc === "C" && nc === "D") {
      result += 400;
      i++;  // Skip to the next character
    } else if (cc === "C" && nc === "M") {
      result += 900;
      i++;  // Skip to the next character
    } else {
      result += rns[cc];
    }
  }
  return result;
}

export default romanToInt;
