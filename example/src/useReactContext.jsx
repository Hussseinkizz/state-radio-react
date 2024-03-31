import { createContext, useContext, useState, useMemo } from 'react';

const storeContext = createContext();

const StoreProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);

  let memoizedState = useMemo(() => [state, setState], [state]);

  return (
    <storeContext.Provider value={memoizedState}>
      {children}
    </storeContext.Provider>
  );
};

export default function ReactHands() {
  const useStore = () => useContext(storeContext);

  return { useStore, StoreProvider };
}
