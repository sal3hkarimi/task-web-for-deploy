import {ChangeEvent, FC,useState} from 'react';
import ChatField from '../components/ChatField';
import { onlyPersianRgx } from '../../../regex';


type FieldProps = {
  comment:string;
  setComment:Function;
}

const Field:FC<FieldProps> = ({setComment,comment}) => {

const [isWarning,setIsWarning] = useState(false);



const chatFieldHandler =(e:ChangeEvent<HTMLInputElement>)=>{

  if(onlyPersianRgx.test(e.target.value) || e.target.value == '' ){
    setComment(e.target.value);
    setIsWarning(false);
  }else{
    setIsWarning(true);
  }

}


  return (
    <div className='field--wrapper'>
      <ChatField 
      value={comment}
      classN={isWarning ? 'warning' : ''} 
      onChange={(e) => chatFieldHandler(e)} />
    </div>
  )
}

export default Field