import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData, getUser } from '../apis'
import GridSection from '../components/GridSection'

import Topsection from '../components/Topsection'
const Home = () => {
    const [user, setUser] = useState({})
    const [data, setData] = useState([])

    
   
    useEffect(()=>{
        getUser(setUser)
        getData(setData)

    },[])
  return (
    <>
   <Topsection user={user}/>
   <GridSection data={data}/>
    </>
  )
}

export default Home