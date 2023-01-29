import {FC,useState} from 'react';
import Filterbar from '../../../../../components/Cards/Filterbar';
import TodayCard from '../../../../../components/Cards/cards/Today';
import ImportantCard from '../../../../../components/Cards/cards/Important';
import CommentCard from '../../../../../components/Cards/cards/Comment';
import ExpiredCard from '../../../../../components/Cards/cards/ExpiredDate';


const SectionOne:FC = () => {
const [isActive,setIsActive] = useState(0);

  return (
    <div className='sectionOne'>
        <Filterbar
        isActive={isActive}
        setIsActive={setIsActive}
        />
      <div className="cards">
        <div className="card">
          {
            isActive === 0 ?

            <TodayCard
            role='user' 
            softwareN={''} 
            city={''} 
            taskNum={''} 
            date={{
              month: '',
              year: '',
              day: '',
            }}          
            />
            : isActive === 1 ?

            <ImportantCard 
            softwareN={''} 
            city={''} 
            taskNum={''} 
            date={{
                month: '',
                year: '',
                day: ''
              }}         
            />
            : isActive == 2 ?

              <CommentCard 
              isUploaded={false} 
              fileFormat={''} 
              taskNum={''} 
              softwareN={''} 
              city={''} 
              date={{
                dayWeek:'',
                day:'',
                month:'',
                time:{
                hour:'',
                minute:''
              }}} 
              />
            : isActive ?

            <ExpiredCard 
            taskNum={''} 
            date={{day:'',month:'',year:''}} 
            softwareN={''} 
            city={''} 
            remainingDays={''} 
            createdAt={{day:'',month:'',year:''}} 
            deliverAt={{day:'',month:'',year:''}} 
            />
            :
            null 
          }
        </div>
      </div>
    </div>
  )
}

export default SectionOne