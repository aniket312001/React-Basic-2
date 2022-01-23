import React, { useEffect, useState } from 'react'
import { FirstName } from './App';
import axios from 'axios'



function Component3() {

    const [data,setData] = useState(0)
    const [data2,setData2] = useState(0)
    const [mydata,setMyData] = useState("")

    // useEffect(()=>{
    //     alert("You Click")

    // },[data])


    useEffect(()=>{

        const getData =  async()=>{
            const apiData = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(apiData.data)
            
        }

        getData()
        
    })


  return (
    <>
       <h1>Component3</h1>


        <FirstName.Consumer> 
            { (name)=>{
                return <h1> Your Name is {name}</h1> 
            }} 
        </FirstName.Consumer>

            {/* ============================================== */}

        <button onClick={()=>{setData(data+1)}}>Click {data}</button>
        <button onClick={()=>{setData2(data2+1) }}>Click {data2}</button> <br />
     
     
        {}
            
    </>
  );
}

export default Component3;
