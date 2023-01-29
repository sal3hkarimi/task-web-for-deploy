import {FC} from 'react'
import Button from '../../../../Button';

type TodayFProps ={
  rejectionHandler?:()=>void;
  acceptHandler?:()=>void;
}

const index:FC<TodayFProps> = ({
rejectionHandler,
acceptHandler
}) => {
  return (
    <footer className='importantCardF mt-5'>
      <div className="buttons">
        <Button 
        type={'button'} 
        value={'رد'} 
        classN={'btn--reject ml-1'} 
        isIcon={false} 
        />

        <Button 
        type={'button'} 
        value={'پذیرش'} 
        classN={'btn--accept'} 
        isIcon={false}      
        />
      </div>
    </footer>
  )
}

export default index