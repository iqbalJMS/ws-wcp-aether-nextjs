// components/GradientSlider.tsx
import React, { useMemo } from 'react';

interface GradientSliderProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  onChange?: (_value: number) => void;
}

const InputSlider: React.FC<GradientSliderProps> = ({
  min,
  max,
  step = 1,
  value: defaultValue = min,
  onChange,
}) => {
  const value = useMemo(() => {
    return defaultValue;
  }, [defaultValue]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (onChange) onChange(newValue);
  };

  const getBackgroundSize = () => {
    return `${((value - min) / (max - min)) * 100}% `;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        className="cursor-pointer"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        style={{
          background: `linear-gradient(90deg, #c70740 ${getBackgroundSize()}, #e0e0e0 0%)`,
        }}
      />
      {/* <span className="mt-2 text-lg">{value}</span> */}
    </div>
  );
};

export default InputSlider;
