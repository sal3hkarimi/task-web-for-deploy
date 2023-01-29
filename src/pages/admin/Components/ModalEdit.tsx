import { useState } from 'react'
import { ArrowDownIcon, RefreshLeftSquareIcon, UserIcon } from '../assets/Icons'

export default function ModalEdit() {
  const [project, setProject] = useState('GSI')
  const [city, setCity] = useState('اصفهان')

  const numberRequest = "۷۶۰-۹۵۱"
  const userName = "محمد کریمی"
  const userTask = "فرانت‌اند"
  const projectName = ['GSI', 'TSI']
  const cityList = ['اصفهان', 'تهران', 'مشهد', 'قم', 'شیراز']
  return (
    <div className="parent">
      <div className="edit-modal">
        <div className="head-modal">
          <div className="box-icon">
            <RefreshLeftSquareIcon />
          </div>
          <p>درخواست شماره‌ی <span>{numberRequest}</span></p>
        </div>
        <div className="user-info">
          <div className="box-icon">
            <UserIcon />
          </div>
          <p className="user-name">
            کاربر:
            <span> {userName} - {userTask}</span>
          </p>
        </div>
        <div className="select-wrapper">
          <div className="select-project">
            <p>نام پروژه</p>
            <div className="select">
              {project}
              <ArrowDownIcon />
            </div>
          </div>
          <div className="select-city">
            <p>نام استان</p>
            <div className="select">
              {city}
              <ArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="btns">
          <a href="">لغو</a>
          <a href="">ثبت تغییرات</a>
        </div>
      </div>
    </div>
  )
}
