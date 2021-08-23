export const setParams = (params: Record<string, string | undefined>) => {
  const newSearchParams = new URLSearchParams();

  for (const [name, value] of Object.entries(params)) {
    if (value) {
      newSearchParams.set(name, value);
    }
  }

  return newSearchParams.toString();
};
