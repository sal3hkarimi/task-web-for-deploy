import {FC} from 'react';
import {CardBProps} from '../../../../../types/interfaces';

const index:FC<CardBProps> = ({
    city,
    softwareN
}) => {
  return (
    <div className='todayCardB'>
        <h4 className='mb-2'>
            پروژه بررسی کابل 
            {city}
        </h4>
        <div className='mb-5 content d-flex row justify-space-between align-center'>
            <span>
                {/* {city} */}
                کرمان
                -
                Sepanta
                {/* {softwareN} */}
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