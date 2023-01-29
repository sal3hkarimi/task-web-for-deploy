import {FC} from 'react';


const listItemValues:string[] = ['امروز','مهم','کامنت ها','تاریخ گذشته'];

type FilterbarProps = {
    setIsActive:Function;
    isActive:number;
}

const Filterbar:FC<FilterbarProps> = ({
setIsActive,
isActive
}) => {
  return (
    <div className='filterbar'>
            <ul className='filterbar--ul'>
            {
                listItemValues.map((val,idx)=>(
                    <li key={idx} className={`filterbar--li ${isActive === idx ? 'active' : ''}`} onClick={()=> setIsActive(idx)}>
                        {val}
                    </li>
                ))
            }
            </ul>
            <div className='filterbar--progressBar'></div>
    </div>
  )
}

export default Filterbar