import React from 'react';
import { applyTextAlignmentStylesTable } from './textAlignmentTable';
import DOMPurify from 'isomorphic-dompurify';

const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || '';
const possibleDomains =
  process.env.DOMAINS || process.env.NEXT_PUBLIC_DOMAINS || '';

const bodyRender = (body: string) => {
  if (!body) {
    return '';
  }

  let rendered = body;
  const domains = possibleDomains.split(',') || [];

  domains.forEach((url) => {
    if (!url) {
      rendered = rendered.replaceAll(
        '/sites/default/files/',
        `${BASE_URL}/api/files/?path=/sites/default/files/`
      );
    } else {
      rendered = rendered.replaceAll(
        `${url}/sites/default/files/`,
        `${BASE_URL}/api/files/?path=/sites/default/files/`
      );
    }
  });

  if (domains.length === 0) {
    rendered = rendered.replaceAll(
      '/sites/default/files/',
      `${BASE_URL}/api/files/?path=/sites/default/files/`
    );
  }
  rendered = applyTextAlignmentStylesTable(rendered);

  return rendered;
};

export function parseHTMLToReact(
  htmlString: string,
  hasBaseUrl = false
): React.ReactNode {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          !hasBaseUrl ? htmlString : bodyRender(htmlString)
        ),
      }}
    />
  );
}
