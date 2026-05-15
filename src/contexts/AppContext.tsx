import { createContext, useContext } from 'react';
import type { AppBridge } from '../types/domain';

export const AppContext = createContext<AppBridge | null>(null);

export function useAppContext(): AppBridge {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return ctx;
}
