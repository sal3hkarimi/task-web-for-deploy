import {FC} from 'react'

type TextAProps = {
    description:string;
    placeholder:string;
    value:string;
    onChange():void;
}


const Textarea:FC<TextAProps> = ({
description,
placeholder,
onChange,
value
}) => {
  return (
    <textarea onChange={onChange} value={value || ''} className='textarea' placeholder='' >Textarea</textarea>
  )
}

export default Textarea