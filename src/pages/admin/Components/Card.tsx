import { MapIcon, MonitorIcon, RefreshLeftSquareIcon, UserIcon } from "../assets/Icons"
import BgModals from "./BgModal"
import ModalEdit from "./ModalEdit"
import { useState } from "react";



export default function Card() {
  const numberRequest = "۷۶۰-۹۵۱"
  const userName = "محمد کریمی"
  const userTask = "فرانت‌اند"
  const project = 'GSI'
  const city = 'اصفهان'

  return (
    <div className="admin-card">
      <div className="head-card">
        <div className="box-icon">
          <RefreshLeftSquareIcon />
        </div>
        <p className="title">درخواست شماره‌ی <span>{numberRequest}</span></p>
      </div>
      <div className="body-card">
        <div className="info name">
          <div className="box-icon">
            <UserIcon />
          </div>
          <p className="info-name">
            کاربر:
            <span className="info-desc"> {userName} - {userTask}</span>
          </p>
        </div>
        <div className="info project">
          <div className="box-icon">
            <MonitorIcon />
          </div>
          <p className="info-name">
            پروژه:
            <span className="info-desc"> {project}</span>
          </p>
        </div>
        <div className="info city">
          <div className="box-icon">
            <MapIcon />
          </div>
          <p className="info-name">
            استان:
            <span className="info-desc"> {city}</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-card">
        <a className="edit-user">ویرایش</a>
        <a className="select-rahbar">انتخاب راهبر</a>
      </div>
    </div>
  )
}
