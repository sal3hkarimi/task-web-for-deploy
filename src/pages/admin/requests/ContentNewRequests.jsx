import React, { useState } from 'react'
import BgModals from '../Components/BgModal'
import Card from '../Components/Card'
import ModalEdit from '../Components/ModalEdit'

export default function ContentNewRequests() {
  const [display, setDisplay] = useState('none')
  return (
    <div className="admin-content">
      <BgModals
        display={display}
      ><ModalEdit /></BgModals>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
