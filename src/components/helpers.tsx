export const calculateBorderColor = (baseColor: string, borders: string): string => {
  const colorSubS = baseColor.substring(1);
  const r = parseInt(colorSubS[0], 16);
  const g = parseInt(colorSubS[1], 16);
  const b = parseInt(colorSubS[2], 16);

  const calcColorChannel = (val: number) => {
    const result = borders === "light" ? val + 4 : val - 4;
    if (result < 0) {
      return "0";
    }
    return Math.min(15, result).toString(16);
  };

  const newR = calcColorChannel(r);
  const newG = calcColorChannel(g);
  const newB = calcColorChannel(b);
  return `#${newR}${newG}${newB}`;
};