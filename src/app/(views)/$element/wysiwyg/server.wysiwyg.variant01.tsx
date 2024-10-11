'use server';

import { T_WysiwygProps } from '@/app/(views)/$element/types/wysiwyg';
import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default async function SE_WysiwygVariant01({
  title,
  createdAt,
  buttonText,
  imageContent,
  content,
}: Omit<T_WysiwygProps, 'variant'>) {
  return (
    <section className="container my-8">
      {title && <h1 className="font-bold text-3xl mb-4">{title}</h1>}
      {createdAt && <p className="text-sm text-gray-400">{createdAt}</p>}
      {buttonText && (
        <div className="flex justify-end py-10">
          <button
            className={`font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500`}
          >
            {buttonText}
          </button>
        </div>
      )}
      <div className="w-full h-full rounded-xl overflow-hidden my-5 inline-block">
        <Image
          extern={false}
          src={imageContent ?? ''}
          alt="image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      {content && <div className="w-full">{parseHTMLToReact(content)}</div>}
    </section>
  );
}
