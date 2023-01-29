import {FC} from 'react';
import { CardBProps } from '../../../../../types/interfaces';
import { DateProps } from '../../../../../types/interfaces';
import Image from '../../../../Image';

type TaskProps = CardBProps & {
    remainingDays:string | number;
    leaderImg:string;
    date:DateProps;
    username:string
}

type TaskBodyProps = {
    body:TaskProps
}


const TaskBody:FC<TaskBodyProps> = ({body}) => {
  return (
    <div className='taskcard--body'>
        <div>
            <h4>
                پروژه بررسی کابل اصفهان
            </h4>
            <div className='my-2'>
                <span>کرمان</span>
                -
                <span>ساتیا</span>
            </div>
        </div>
        <div className='mb-5 d-flex row justify-space-between align-center'>
            <div>
                <span>{body.remainingDays}</span>
                <span className='mr-2 deliverDate'>
                    {/* Icon */}
                    <small>
                        تحویل
                        :
                        {/* Day */}
                        <small className='mr-2'>{body.date.day}</small>
                        {/* Month */}
                        <small className='mx-1'>{body.date.month}</small>
                        {/* Year */}
                        <small>{body.date.year}</small>
                    </small>
                </span>
            </div>
                <Image 
                src={body.leaderImg}
                alt={body.username}
                width={'25px'}
                height={'25px'}
                isRounded={true}
                />
        </div>
    </div>
  )
}

export default TaskBody