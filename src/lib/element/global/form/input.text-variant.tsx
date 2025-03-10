// components/GradientSlider.tsx
import React, { useMemo, useRef } from 'react';

interface GradientSliderProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  disabled?: boolean;
  onChange?: (_value: number) => void;
  children?: React.ReactNode;
  rightText?: string;
  leftText?: string;
  rightSlot?: React.ReactNode;
  leftSlot?: React.ReactNode;
}

const InputTextVariant: React.FC<GradientSliderProps> = ({
  min,
  disabled = false,
  max,
  step = 1,
  value: defaultValue = min,
  onChange,
  rightText = '',
  leftText = '',
  rightSlot,
  leftSlot,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useMemo(() => {
    return defaultValue;
  }, [defaultValue]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (onChange) onChange(newValue);
  };

  let limitValue = 0;
  if (value >= min && value <= max) {
    limitValue = value;
  }

  return (
    <div
      className={`flex w-full h-12 py-1 items-center border overflow-hidden px-4 rounded-md bg-transparent border-black border-opacity-10 focus-within:border-blue-01 focus-within:border-opacity-50 focus-within:ring-4 focus-within:ring-light-02 focus-within:ring-opacity-30 ${
        disabled ? 'bg-gray-500 bg-opacity-5' : 'bg-transparent'
      } `}
    >
      {leftSlot || leftText ? (
        <div className="flex items-center justify-center mr-2 h-full text-black02 text-15 leading-15 whitespace-nowrap">
          {leftSlot}
          {leftText}
        </div>
      ) : null}
      <input
        disabled={disabled}
        ref={inputRef}
        className="w-full h-full text-base mdmax:text-sm placeholder-black placeholder-opacity-40 focus:outline-none flex-1 bg-transparent"
        min={min}
        max={max}
        step={step}
        value={limitValue}
        onChange={handleChange}
      />
      {rightSlot || rightText ? (
        <div className="flex items-center justify-center ml-2 h-full text-black02 text-opacity-90 text-15 whitespace-nowrap">
          {rightSlot}
          {rightText}
        </div>
      ) : null}
    </div>
  );
};

export default InputTextVariant;
