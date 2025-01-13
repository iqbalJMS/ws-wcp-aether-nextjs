export default function LoaderVariant01({
  textLoading = 'Loading Promo',
}: {
  textLoading?: string;
}) {
  return (
    <div>
      <div className="bounceball relative inline-block h-9 w-4">
        <div className="absolute top-0 w-4 h-4 rounded-full bg-yellow-500 animate-bounce"></div>
      </div>
      <div className="text text-yellow-500 inline-block ml-2 uppercase">
        {textLoading}
      </div>
    </div>
  );
}
