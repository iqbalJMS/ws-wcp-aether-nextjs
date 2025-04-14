'use client';

export function handleurl(rawLink?: string): string {
    const trimmed = rawLink?.trim();
  
    if (!trimmed || 
        trimmed === '#' || 
        trimmed === 'internal:#' || 
        trimmed === 'internal:' || 
        trimmed === 'internal:#?lang=id' || 
        trimmed === 'internal:#?lang=en' || 
        trimmed === ' ') {
      return 'javascript:void(0)';
    }
  
    return rawLink!;
}
  