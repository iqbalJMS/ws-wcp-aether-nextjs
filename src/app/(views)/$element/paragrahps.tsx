import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';

export default function CE_Paragraphs({
  description,
  notes,
}: {
  description: string;
  notes: string;
}) {
  return (
    <div className="grid mt-4">
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-0">
        {description && (
          <div className="col-span-3 body">
            {parseHTMLToReact(description ?? '')}
          </div>
        )}

        {notes && (
          <div className="cols-span-1 w-full">
            <div className="border border-[#f59a22] p-4 rounded-lg body">
              {parseHTMLToReact(notes ?? '')}
            </div>
          </div>
        )}
      </div>

      <div className="cols-span-3">{}</div>
    </div>
  );
}
