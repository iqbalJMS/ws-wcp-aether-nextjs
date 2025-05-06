'use client';

import { EnvContext, EnvContextType } from '@/lib/hook/useEnv';

export function Providers({
  children,
  valueEnvContext,
}: {
  children: React.ReactNode;
  valueEnvContext: EnvContextType;
}) {
  return (
    <EnvContext.Provider value={valueEnvContext}>
      {children}
    </EnvContext.Provider>
  );
}
