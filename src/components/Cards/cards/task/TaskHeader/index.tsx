import {FC} from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { checkStatusClass } from '../../../../../utils/helpers';
import { CardHeaderProps } from '../../../../../types/interfaces';


type TaskHeaderProps = {
  header:CardHeaderProps,
  onClick():void;
}



const TaskHeader:FC<TaskHeaderProps> = (
{header:{taskNum,status,},onClick}) => {
const classN = checkStatusClass(status);

  return (
    <header className='cardH taskcard--header'>
            <small className={`${classN} taskNum`}>
                {taskNum}
            </small>
            <EllipsisHorizontalIcon onClick={onClick}  width={'25px'} height={'25px'} />
    </header>
  )
}

export default TaskHeader