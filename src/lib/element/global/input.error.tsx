import React from 'react';

interface T_InputErrorProps {
  message?: string;
}

const InputError: React.FC<T_InputErrorProps> = ({ message = '' }) => {
  return (
    <div>
      {message && (
        <div className="text-wrap w-60 text-xs text-red-500">{message}</div>
      )}
    </div>
  );
};

export default InputError;
