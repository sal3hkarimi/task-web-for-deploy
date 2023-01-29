import {FC} from 'react';
import {CardBProps} from '../../../../../types/interfaces';
import { Medal } from '../../../../Icons';

const index:FC<CardBProps> = ({
    city,
    softwareN
}) => {
  return (
    <div className='cardB'>
        <div className='mb-2 d-flex row justify-space-between align-center'>
            <h4>
                پروژه بررسی کابل 
                {city}
            </h4>
            <div className='icon'>
                <Medal />
            </div>
        </div>
        <div className='mb-5 d-flex row align-center justify-space-between'>
            <span>
                اصفهان
                -
                ساتیا
            </span>
            <small>
                حاوی پیوست
            </small>
        </div>
        <div className="line--seperator my-2"></div>
    </div>
  )
}

export default index