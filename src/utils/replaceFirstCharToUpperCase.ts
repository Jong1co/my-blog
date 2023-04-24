export const replaceFirstCharToUpperCase = (char: string) => {
  return decodeURIComponent(char.replace(/^[a-z]/, (char) => char.toUpperCase()));
};
