export const startsWith = (string, letter) => {
  let startsWith = false;
  if (string[0] === letter) {
    startsWith = true;
  }
  return startsWith;
};
