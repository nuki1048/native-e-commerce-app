import { ControlBottomTabsContext } from '@/context/ControlBottomTabsContext';
import { useContext } from 'react';

export const useControlBottomTabs = () => {
  const context = useContext(ControlBottomTabsContext);

  if (context === undefined) {
    throw new Error(
      'useControlBottomTabs must be used within a ControlBottomTabsProvider'
    );
  }

  return context;
};
