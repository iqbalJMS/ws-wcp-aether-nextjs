import { CloseIcon } from '@/lib/element/global/close-icon';
import { ReactNode } from 'react';

type T_SimulationresultMainProps = {
  children: ReactNode;
  onClose: () => void;
};

const CE_SimulationResultMain = ({
  children,
  onClose,
}: T_SimulationresultMainProps) => {
  return (
    <div className="p-10 rounded-xl border border-black border-opacity-30 relative">
      <div className="absolute top-2 right-2" onClick={onClose}>
        <CloseIcon className="text-blue-02 cursor-pointer" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CE_SimulationResultMain;
