

import React, { createContext, useState } from "react";


export const DataContext = createContext();

function DataProvider({children}) {
  const [sharedData, setSharedData] = useState("");



  return (
    <DataContext.Provider value={{ sharedData, setSharedData}}>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
