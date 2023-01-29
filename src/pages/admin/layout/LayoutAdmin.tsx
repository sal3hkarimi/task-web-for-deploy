import React, { useState } from 'react'
import Navbar from '../../../layouts/Navbar'
import Sidebar from '../../../layouts/Sidebar'
import "../styles/style.css";


type LayoutAdminProps ={
    children : React.ReactNode
}

const LayoutAdmin = (props: LayoutAdminProps) => {
  const [isActive, setIsActive] = useState(0)
  return (
    <>
      <Navbar />
      <div className="admin">
        <Sidebar
          setIsActive={setIsActive}
          isActive={isActive}
          page={'mainPage'}
        />
        {props.children}
      </div>
    </>
  )
}

export default LayoutAdmin;