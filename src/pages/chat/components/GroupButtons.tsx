import {FC} from 'react';

type GroupButtonsProps = {
    setIsActive:Function;
    isActive:number;
}

const links = [
    'تصاویر',
    'لینک ها',
    'فایل ها',
    'صوت ها'
]

const GroupButtons:FC<GroupButtonsProps> = ({
setIsActive,
isActive
}) => {
  return (
    <ul className='groupButtons'>
        {
            links.map((val,idx)=>(
            <li key={idx} onClick={()=> setIsActive(idx)} className={`${isActive === idx ? 'active' : ''}`}>
                <a href="javascript:void(0)">
                   {val} 
                </a>
            </li>
            ))
        }
    </ul>
  )
}

export default GroupButtons