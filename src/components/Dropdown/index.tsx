import {FC,useState,ElementType} from 'react';
import DropdownBtn from './DropdownBtn';
import DropdownBody from './DropdownBody';
import { DropdownBodyProps } from '../../types/interfaces';

interface DropdownProps extends DropdownBodyProps{
btnValue:string;
isChevron:boolean;
btnClassN:string;
onClick?():void;
}


const DropdownList:FC<DropdownProps> = (
{
Icons,
itemValues,
btnValue,
isChevron,
btnClassN,
onClick
}
) => {
const [isDisplayed,setIsDisplayed] = useState(false);

  return(
  <div className='dropdown'>
    <DropdownBtn setIsDisplayed={setIsDisplayed}  isChevron={isChevron} value={btnValue} classN={btnClassN} />
    {
        isDisplayed ?
        <DropdownBody
        onClick={onClick}
        itemValues={itemValues}
        Icons={Icons}
        />
    :
    null
    }
  </div>
  )
}

export default DropdownList