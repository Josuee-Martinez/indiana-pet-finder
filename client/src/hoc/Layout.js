import React, {useEffect} from 'react'
import useFetch from 'react-fetch-hook';
import axios from 'axios'

function Layout({children}) {
const headers=  {
      'Access-Control-Allow-Origin': '*',
    }
useEffect(()=>{
    axios.get("http://localhost:5000/api/petdata", headers).then(res =>{
        console.log(res)
    })
})
    

  return (

    <div>{children}</div>
  )
}

export default Layout