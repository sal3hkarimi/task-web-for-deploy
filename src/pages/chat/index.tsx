import {FC,useState} from 'react'
import Navbar from '../../layouts/Navbar'
import ChatPanel from '../../layouts/ChatPanel';
import BotMsg from './section/BotMsg';
import UserMsg from './section/Sender';
import Field from './section/Field';

const Chat:FC = () => {
const [comment,setComment] = useState('');


  return (
    <>
        <Navbar />
    <section className='chat--wrapper'>
        <div className='chat--inner'>
            {/* Sidebar */}
                <ChatPanel
                 members={[]} 
                 userImg={''} 
                 taskNum={''}
                  />

              {/* Chat */}
            <div className='chat--area'>
              {/* Message */}
              <div className="message--wrapper">
              <BotMsg
              comment={comment}
              />
              <UserMsg 
              />
              </div>
              {/* Field */}
              <Field
              comment={comment}
              setComment={setComment}
              />
            </div>
        </div>
    </section>
    </>
  )
}

export default Chat