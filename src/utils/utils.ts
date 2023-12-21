export const generateToken = (): string => {
  return Math.random().toString(36).substr(2);
};

type SizeMap = {
  s: string;
  m: string;
  l: string;
  xl: string;
};

export const getSizeName: (sizeKey: string) => string | undefined = (
  sizeKey
) => {
  const sizeMap: SizeMap = {
    s: "Small",
    m: "Medium",
    l: "Large",
    xl: "Extra Large",
  };

  return sizeMap[sizeKey as keyof SizeMap];
};
