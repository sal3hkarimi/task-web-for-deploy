import {FC} from 'react'
import Button from '../../../../Button';
import {ArrowLeft} from '../../../../Icons';

type TodayFProps ={
  rejectionHandler?:()=>void;
  acceptHandler?:()=>void;
  role:'admin'| 'user' | 'leader';
}

const index:FC<TodayFProps> = ({
rejectionHandler,
acceptHandler,
role
}) => {
  return (
    <footer className='todayCardF mt-5'>
        {
          role == 'admin' || role == 'leader' ?
          <div className='d-flex justify-space-between row align-center'>

          <Button 
           type={'button'} 
           value={'رد'} 
           onClick={rejectionHandler}
           classN={'btn--reject ml-1'} 
           isIcon={false} 
           />
   
           <Button 
           onClick={acceptHandler}
           type={'button'} 
           value={'پذیرش'} 
           classN={'btn--accept'} 
           isIcon={false}       
           />
          </div>
           : 
           <div className='d-flex justify-space-between row align-center'>
              <small>
                ذخیره شد
              </small>
              <ArrowLeft />
           </div>
        }
    </footer>
  )
}

export default index