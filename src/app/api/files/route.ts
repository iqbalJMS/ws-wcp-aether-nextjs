'use server';

import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('path') || '';

    if (query) {
      const getter = await fetch(`${process.env.DRUPAL_ENDPOINT}${query}`, {
        method: 'GET',
      });
      const pathFiles = query.split('/');

      return new Response(getter.body, {
        status: getter.status,
        headers: {
          ...(getter.headers.get('content-type') === 'application/pdf' && {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${pathFiles[pathFiles.length - 1]}"`,
          }),
        },
      });
    } else {
      return new Response('Invalid path', { status: 404 });
    }
  } catch (error) {
    return new Response('File not found or unable to read', { status: 404 });
  }
}
