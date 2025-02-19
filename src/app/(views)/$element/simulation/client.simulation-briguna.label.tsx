'use client';

import { ReactNode, useState } from 'react';

type T_SimulationLabelProps = {
  label: string;
  slot?: ReactNode;
  editable?: boolean;
  onChange?: (_value: boolean) => void;
};

const CE_SimulationBrigunaLabel = ({
  label,
  slot,
  editable = true,
  onChange,
}: T_SimulationLabelProps) => {
  const [hasEdit, setHasEdit] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-xl font-semibold text-black ">{label}</div>
        {editable && (
          <div
            className="text-blaCE_SimulationLabelck text-opacity-50 cursor-pointer"
            onClick={() => {
              setHasEdit(!hasEdit);
              if (onChange) onChange(hasEdit);
            }}
          >
            {!hasEdit ? <></> : <></>}
          </div>
        )}
      </div>
      <div>{slot}</div>
    </div>
  );
};

export default CE_SimulationBrigunaLabel;
