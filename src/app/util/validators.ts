export const isValidate = (obj: Record<string, unknown>) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null) {
      return false;
    }
    if (typeof value === "string" && value.length === 0) {
      return false;
    }
  }
  return true;
};
