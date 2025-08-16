import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  // data
  const phone = "+91-9471588821";

  return (
    <AppContext.Provider value={phone}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;



