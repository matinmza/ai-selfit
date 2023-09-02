const pxToRem = (px: number): string => {
  const converted = px / 16;
  return converted + "rem";
};

export default pxToRem;
