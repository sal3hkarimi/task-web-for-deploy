import {FC} from 'react'
import { ExpiredDFProps } from '../../../../../types/interfaces';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const index:FC<ExpiredDFProps> = ({
remainingDays,
createdAt,
deliverAt
}) => {
  return (
    <footer className='expiredDC--footer mt-5 d-flex row align-center justify-space-between'>
        <div>
            <small className='d-block mb-2'>
                تاریخ ایجاد:
                <span>
                    <span className='mr-3'>۱۲</span>
                    <span className='mx-1'>اذر</span>
                    <span>۱۴۰۲</span>
                </span>
            </small>
            <small className='d-block'>
                تاریخ تحویل:
                <span>
                    <span className='mr-3'>۱۲</span>
                    <span className='mx-1'>اذر</span>
                    <span>۱۴۰۲</span>
                </span>
            </small>
        </div>
        <div>
            {remainingDays}
            <CalendarDaysIcon width={'50px'} height={'50px'} />
        </div>
    </footer>
  )
}

export default index