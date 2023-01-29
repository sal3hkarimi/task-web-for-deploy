import {FC,useState} from 'react'
import TaskCard from '../../../../../components/Cards/cards/task';
import DropdownList from '../../../../../components/Dropdown';
import Header from './Header';
import { faker } from '@faker-js/faker';
import {Trash,MessageSearch,Hierarchy,Edit,ClipBoard,Eye} from '../../../../../components/Icons';

const SectionTwo:FC = () => {
const [dropdownIsDisplayed,setDropdownIsDisplayed] = useState(false)
 
  return (
    <div className='sectionTwo'>
      <Header />
        <div className='cards'>
    
          <div className="card--wrapper">
              <h4>
                انجام نشده
              </h4>
                <TaskCard 
                header={{
                  taskNum:'۵۴۵-۴۳۵',
                  status:'completed'
                }}
                dropdown={{
                  Icons:[
                    {Icon:()=> <Eye/>},
                    {Icon:()=> <MessageSearch />},
                    {Icon:()=> <Trash />},
                    {Icon:()=> <Edit />},
                    {Icon:()=> <Hierarchy />},
                    {Icon:()=> <ClipBoard/>},
                   ],
                  itemValues:[
                    'مشاهده تسک',
                    'سپردن به',
                    'حذف',
                    'ویرایش',
                    'اشتراک گذاری',
                    'پایان تسک'
                  ]
                }}
                body={{
                  username:'مجتبی وندایی',
                  date:{day:'۱۳',month:'ابان',year:'۱۴۰۲'},
                  city:'ابادان',
                  leaderImg:faker.image.avatar(),
                  softwareN:'ساتیا',
                  remainingDays:'۵'
                }}
                footer={{
                  filesAmount:'۷'
                }}
                />
          </div> 
        </div>
    </div>
  )
}

export default SectionTwo