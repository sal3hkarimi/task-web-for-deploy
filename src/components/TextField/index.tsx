import {FC,ChangeEvent} from 'react';
export interface InputPropType<T>{
  placeholder:string;
  type:"email" | "password" | "text";
  onChange:(arg:T) => void;
  value:string;
  id?:string;
  name:string;
  classN:string;
}

const TextField:FC<InputPropType<ChangeEvent<HTMLInputElement>>> = ({
placeholder,
type,
onChange,
value,
classN,
name,
id
}) => {
  return (
    <input id={id} name={name} type={type} placeholder={placeholder} className={classN} value={value || ''} onChange={onChange} />
  )
}

export default TextField