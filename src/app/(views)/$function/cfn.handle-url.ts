'use client';

export function handleurl(rawLink?: string): string {
  const trimmed = rawLink?.trim();

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
    return 'javascript:void(0)';
  }

  return rawLink!.replace('/id', '');
}
