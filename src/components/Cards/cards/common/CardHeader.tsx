import {FC} from 'react'
import {CardHProps} from '../../../../types/interfaces';


const CardHeader:FC<CardHProps> = ({
taskNum,
date
}) => {
  return (
    <header className='cardH'>
            <small className='taskNum'>
                ۲۳۴-۲۳۵
            </small>
       
            <small className='span--date'>
                <span>۲۲</span>
                <span className='mx-1'>اذر</span>
                <span>۱۴۰۱</span>
            </small>
        
    </header>
  )
}

export default CardHeader