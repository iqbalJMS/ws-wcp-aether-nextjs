import { API_BASE_URL } from "@/app/(views)/$constant/variables";
import React from "react";

const possibleDomains =
  process.env.DOMAINS || process.env.NEXT_PUBLIC_DOMAINS || "";

const bodyRender = (body: string) => {
  let rendered = body;
  const domains = possibleDomains.split(",") || [];

  domains.forEach((url) => {
    if (!url) {
      rendered = rendered.replaceAll(
        "/sites/default/files/",
        `${API_BASE_URL}/api/files/?path=/sites/default/files/`
      );
    } else {
      rendered = rendered.replaceAll(
        `${url}/sites/default/files/`,
        `${API_BASE_URL}/api/files/?path=/sites/default/files/`
      );
    }
  });

  if (domains.length === 0) {
    rendered = rendered.replaceAll(
      "/sites/default/files/",
      `${API_BASE_URL}/api/files/?path=/sites/default/files/`
    );
  }

  return rendered;
};

export function parseHTMLToReact(
  htmlString: string,
  hasBaseUrl = false
): React.ReactNode {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: !hasBaseUrl ? htmlString : bodyRender(htmlString),
      }}
    />
  );
}
