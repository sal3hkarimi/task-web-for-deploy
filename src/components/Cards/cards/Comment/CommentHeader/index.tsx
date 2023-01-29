import {FC} from 'react';
import {
  ChatBubbleOvalLeftIcon
} from '@heroicons/react/24/solid';
import Image from '../../../../Image';
import attach from '../../../../../assets/icons/attach.svg';


type CommentCProps = {
  isUploaded:boolean;
  fileFormat:string;
}

const index:FC<CommentCProps> = ({
isUploaded,
fileFormat
}) => {
  return (
    <div className="commentH">
        {
          isUploaded ?
          <>
          <Image
           src={attach}
           alt={fileFormat}
           width={'20px'}
           height={'20px'}
          />
          <span>
            {fileFormat}
          </span>
          </>
          :
          <>
          <ChatBubbleOvalLeftIcon width={'20px'} height={'20px'} />
          <span className='ml-2'>
            پروژه امروز را به فردا نسپارید
          </span>
          </>
        }
    </div>
  )
}

export default index