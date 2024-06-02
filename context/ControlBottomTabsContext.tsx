import { createContext, useState } from 'react';

export const ControlBottomTabsContext = createContext({
  showTabs: true,
  setShowTabs: (show: boolean) => {},
});

export const ControlBottomTabsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showTabs, setShowTabs] = useState<boolean>(true);
  return (
    <ControlBottomTabsContext.Provider value={{ showTabs, setShowTabs }}>
      {children}
    </ControlBottomTabsContext.Provider>
  );
};
