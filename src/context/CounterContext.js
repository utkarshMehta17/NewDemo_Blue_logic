import React, {createContext} from 'react';

const CounterContext = createContext(0);

export const CounterProvider = ({children}) => {
  const [val, setVal] = React.useState(0);
  return (
    <CounterContext.Provider value={{val, setVal}}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
