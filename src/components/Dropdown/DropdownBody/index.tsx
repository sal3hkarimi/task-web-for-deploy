import {FC, ElementType,ReactElement } from 'react';
import { DropdownBodyProps } from '../../../types/interfaces';


const DropdownBody:FC<DropdownBodyProps> = ({itemValues,Icons,onClick}) => {
  
  return (
    <ul className="dropdown--block">
    {
        itemValues.map((val,idx) =>(
            <li onClick={onClick} key={idx} className='dropdown--item'>
                <>
                {
                   Icons.length >= 1 ?
                   Icons[idx].Icon?.()
                   : null
                }
                <span>{val}</span>
                </>
            </li>
        ))
    }
    </ul>
  )
}

export default DropdownBody