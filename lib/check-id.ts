export const checkId = (id: string): boolean => {
  id = id.trim();
  if (id.length === 0) {
    return false;
  }

  for (const char of id) {
    if (isNaN(Number(char)) || char === " ") {
      return false;
    }
  }

  return true;
};
