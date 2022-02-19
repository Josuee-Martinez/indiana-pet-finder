import React, {useEffect} from 'react'
import useFetch from 'react-fetch-hook';
import axios from 'axios'

function Layout({children}) {
//  const config = {
//    headers: {
//      Accept: "application/json",
//      "Content-Type": "application/json",
//    },
//  };

//  const checkAuthenticated = async () =>{
//      console.log('checking auth')
//     const res = await axios.get("http://localhost:5000/api/authtoken", config)

//     if(res){
//         console.log(res)
//     }else{
//         console.log("it don't work")
//     }
//  }
// useEffect(()=>{
//     (async ()=>{ return await checkAuthenticated()})()
   
// })
    

  return (

    <div>{children}</div>
  )
}

export default Layout