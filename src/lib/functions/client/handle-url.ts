export const handleurl = (rawLink?: string): string => {
  let converted = 'javascript:void(0)';

  try {
    const trimmed = (rawLink || '').trim();

    if (
      !rawLink ||
      trimmed === '#' ||
      trimmed === 'internal:#' ||
      trimmed === 'internal:' ||
      trimmed === 'internal:#?lang=id' ||
      trimmed === 'internal:#?lang=en' ||
      trimmed === ' ' ||
      trimmed === ''
    ) {
      converted = 'javascript:void(0)';
    }

    converted = rawLink!.replace('/id', '');
    converted = converted.replace(/([^:])\/\/+/g, '$1/');
  } catch (_) {}

  return converted;
};
