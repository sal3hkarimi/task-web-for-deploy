import {FC,useState} from 'react'
import { CheckSquare, Documents, EditMessage, Messages, Pin, Trash } from '../../../components/Icons';
import {EllipsisVerticalIcon} from '@heroicons/react/24/solid';
import Image from '../../../components/Image';
import { faker } from '@faker-js/faker';
import DropdownBody from '../../../components/Dropdown/DropdownBody';

type MessageProps = {
  comment:string;
}


const BotMsg:FC<MessageProps> = ({comment}) => {
const [displayDropdown,setDisplayDropdown] = useState(false);

return (
      <ul className='bot--ul'>
      <li className='bot'>
        <div className="bot--img">
            <p className='ml-2'>
              سارا
            </p>
            <Image 
            width={'40px'}
            height={'40px'}
            src={faker.image.avatar()}
            alt={'سارا احمدی'}
            isRounded={true}
            />
        </div>
        <div className='bot--msg'>
          <EllipsisVerticalIcon 
          width={'22px'}
          height={'22px'}
          onClick={()=> setDisplayDropdown(prev => !prev)}
          />
          <span className='mr-2'>
            سلام خوبی چطور میتونم کمکت کنم؟
          </span>
          {
            displayDropdown ?
            <DropdownBody 
            Icons={[
              {Icon:()=> <Messages /> },
              {Icon:()=> <EditMessage /> },
              {Icon:()=> <Documents /> },
              {Icon:()=> <Pin /> },
              {Icon:()=> <CheckSquare /> },
              {Icon:()=> <Trash /> }
            ]} 
            itemValues={[
              'پاسخ',
              'ویرایش',
              'کپی',
              'پین',
              'انتخاب',
              'حذف'
            ]}                
            />
            :
            null
          }
        </div>
      </li>
    </ul>
  )
}

export default BotMsg