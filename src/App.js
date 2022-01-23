import React, { createContext } from 'react'

import Header from './Header'; 

const FirstName = createContext()


function App() {
  return (
    <>
      <FirstName.Provider value={"Aniket"}>
        <Header />
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName}