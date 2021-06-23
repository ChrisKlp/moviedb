export const generateTruncateText = (text: string, length = 350) => {
  const textLength = Math.min(length, text.length);
  const textToLong = text.length > length;

  if (textToLong) {
    return `${text.substring(0, textLength)}...`;
  }

  return text;
};
