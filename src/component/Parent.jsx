import React from 'react'
import SideLocation from './SideLocation'
import Header from './Header'
import { useSelector } from 'react-redux'

const Parent2 = () => {

  const show = useSelector((store)=>store.side.isSideBar);
  console.log(show);
  return (
    <div>
      <Header/>
      <SideLocation/>
    </div>
  )
}

export default Parent2;
