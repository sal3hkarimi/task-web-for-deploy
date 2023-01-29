import {FC} from 'react'
import { CardBProps } from '../../../../../types/interfaces'


const index:FC<CardBProps> = ({
softwareN,
city
}) => {

  return (
    <div>
       <div className='mb-5 d-flex row align-center justify-space-between'>
            <h4>
                پروژه بررسی کابل 
                {city}
            </h4>
            <div>
                <span>
                    {city}
                    -
                    {softwareN}
                </span>
                <small>
                    حاوی پیوست
                </small>
            </div>
       </div>
    <div className="line--seperator my-2"></div>
</div>
  )
}

export default index