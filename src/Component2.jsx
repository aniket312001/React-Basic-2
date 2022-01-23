import React, { useContext } from 'react'
import { FirstName } from './App';
import Component3 from './Component3';

function Component2() {

    const context = useContext(FirstName)


  return (
    <>
        <h1>Component2</h1>
        {context}


        <Component3 />
    </>
  );
}

export default Component2;
