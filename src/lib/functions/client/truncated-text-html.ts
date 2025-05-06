export const truncatedTextHtml = (text: string, limit: number) => {
  const words = text.trim().split(/\s+/);
  const isLong = words.length > limit;
  const firstPart = words.slice(0, limit).join(' ');

  return {
    truncated: isLong ? `${firstPart}` : text,
    remaining: isLong ? words.slice(limit).join(' ') : '',
  };
};
