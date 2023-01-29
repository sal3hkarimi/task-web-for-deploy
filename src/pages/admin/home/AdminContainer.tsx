import { useState } from 'react'
import ContentCommentAdmin from './ContentCommentAdmin';
import ContentExpierAdmin from './ContentExpierAdmin';
import ContentImportantAdmin from './ContentImportantAdmin';
import ContentTodayAdmin from './ContentTodayAdmin';
import FilterBarAdmin from './FilterBarAdmin';
import "../styles/style.css";

export default function AdminContainer() {
  const [active, setActive] = useState(0)
  const listFilterBar = ['امروز', 'مهم', 'کامنت‌ها', 'تاریخ گذشته']
  return (
    <div className="admin-container">
      <FilterBarAdmin setAct={setActive} isActive={active} listItem={listFilterBar} button="درخواست‌ها"/>
      {
        active === 0 ? <ContentTodayAdmin />
          : active === 1 ? <ContentImportantAdmin />
            : active === 2 ? <ContentCommentAdmin />
              : active === 3 ? <ContentExpierAdmin />
                : null
      }
    </div>
  )
}
