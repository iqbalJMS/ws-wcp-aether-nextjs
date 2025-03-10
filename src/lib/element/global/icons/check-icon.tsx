import { T_Icon } from '@/lib/types/icon';

export function CheckIcon({
  width = 24,
  height = 24,
  className,
  fill,
}: T_Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : 'currentColor'}
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
      />
    </svg>
  );
}
