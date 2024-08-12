export const checkId = (id: string): boolean => {
  id = id.trim();

  if (id.length === 0) {
    return false;
  }

  const firstChar = id[0];

  return !isNaN(Number(firstChar)) && firstChar !== " ";
};
