import {ChangeEvent,useState,FC} from 'react'
import { VoiceRecorder,Bound } from '../../../components/Icons'

type ChatFieldProps = {
value:string;
onChange(e:ChangeEvent<HTMLInputElement>):void;
classN:string;
}

const ChatField:FC<ChatFieldProps> = ({
value,
onChange,
classN
}) => {
  return (
    <div className={`${classN}`}>
        <label>
            <Bound />
        </label>
        <label>
            <VoiceRecorder />
        </label>

        <input className='chatField' type={'text'}  placeholder='نظر خود را بنویسید' onChange={onChange} value={value} />
    </div>
  )
}

export default ChatField