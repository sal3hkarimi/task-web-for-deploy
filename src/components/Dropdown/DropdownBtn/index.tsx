import {FC,useState} from 'react';
import {ChevronUpIcon,ChevronDownIcon} from '@heroicons/react/24/solid';

type DrowdownBtnProps ={
    isChevron:boolean;
    value:string;
    classN?:string;
    setIsDisplayed:Function;
}


const DropdownBtn:FC<DrowdownBtnProps> = ({setIsDisplayed,isChevron,value,classN}) => {
const [isRotated,setIsRotated] = useState(false);

const dropdownBtnHandler = ()=>{
    setIsRotated(prev => !prev);
    setIsDisplayed((prev:boolean)=> !prev);
}


const checkIsRotated = ()=>{
    if(isRotated){
        return <ChevronUpIcon width={'20px'} height={'20px'} />
    }else{
        return <ChevronDownIcon width={'20px'} height={'20px'} />
    }
}

  return (
    <button onClick={dropdownBtnHandler} className={`btn--dropdown ${classN}`}>
        {value}
       {
        isChevron ?
        checkIsRotated()
        :
        null
       }
    </button>
  )
}

export default DropdownBtn