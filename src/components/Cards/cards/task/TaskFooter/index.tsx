import {FC} from 'react';
import { ChatBubbleOvalLeftIcon,LinkIcon } from '@heroicons/react/24/outline';

type TaskFooterProps = {
    filesAmount:string | number;
}

const TaskFooter:FC<TaskFooterProps> = ({
  filesAmount
}) => {
  return (
    <div className='taskcard--footer d-flex row align-center justify-space-between mt-3'>
            <div className='top'>
                <ChatBubbleOvalLeftIcon width={'20px'} height={'20px'} />
                <small className='mr-2'>
                    جستجوی نواحی بر اساس...
                </small>
            </div>
            <div className='bottom'>
                    <LinkIcon width={'15px'} height={'15px'} />
                    <small className='mx-2'>فایل</small>
                    <small>{filesAmount}</small>
            </div>
    </div>
  )
}

export default TaskFooter