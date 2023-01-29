import {FC,useState} from 'react';
import TaskBody from './TaskBody';
import TaskFooter from './TaskFooter';
import TaskHeader from './TaskHeader';
import {DropdownBodyProps,CardHeaderProps,DateProps} from '../../../../types/interfaces';
import DropdownBody from '../../../Dropdown/DropdownBody';
import {Eye,ClipBoardClose,MessageSearch,Hierarchy} from '../../../Icons';

// type TaskCardProps = DropdownBodyProps & CardHeaderProps & {
//     headerProps:{

//     }
//     remainingDays:string | number;
//     leaderImg:string;
//     onClick():void;
//     username:string;
//     filesAmount:string;
//     status:string;
//     role:string;
// };

type TaskBodyProps = {
  username:string;
  date:DateProps;
  city:string;
  softwareN:string;
  remainingDays:string | number;
  leaderImg:string;
}

type TaskFooterProps = {
  filesAmount:string | number;
}

type TaskCardProps = {
  header:CardHeaderProps;
  dropdown:DropdownBodyProps;
  body:TaskBodyProps;
  footer:TaskFooterProps
}

const TaskCard:FC<TaskCardProps> = ({
header
,dropdown
,body
,footer
}) => {
  const [isDisplayed,setIsDisplayed] = useState(false);

  const displayDropdown =()=>{
    setIsDisplayed(prev => !prev);
    console.log('Hello world')
  }

  return (
    <div className='my-2 card taskcard'>
        <TaskHeader 
        header={header}
        onClick ={displayDropdown}
        />

        {
          isDisplayed ?

          <DropdownBody 
          Icons={dropdown.Icons} 
          itemValues={dropdown.itemValues} />
          :
          null
        }

        <TaskBody 
        body={body}
        />

        <TaskFooter
        filesAmount={footer.filesAmount}
        />
    </div>
  )
}

export default TaskCard