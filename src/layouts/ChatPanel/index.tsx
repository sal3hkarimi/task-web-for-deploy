import {FC,useState} from 'react';
import {faker} from '@faker-js/faker';
import Image from '../../components/Image';
import GroupButtons from '../../pages/chat/components/GroupButtons';
import Pictures from '../../pages/chat/components/Pictures';
import Links from '../../pages/chat/components/Links';
import Files from '../../pages/chat/components/Files';
import Audios from '../../pages/chat/components/Audios';

type ChatPanelProps = {
    members:string[];
    userImg:string;
    taskNum:string;
}

const ChatPanel:FC<ChatPanelProps> = ({
taskNum,
userImg,
members
}) => {
const [isActive,setIsActive] = useState(0);

  return (
    <div className='chatPanel'>
        {/* Header Begin */}
        <header className="chatPanel--header pt-16">
            <Image 
            isRounded={true}
            src={faker.image.avatar()}
            alt={'Test'}
            width={'120px'}
            height={'120px'}
            />
            <span className='d-block my-8'>
                شماره تسک:
                <span>۳۳-۴۴۵</span>
            </span>
        </header>
        {/* Header End */}

            {/* Members Begin */}
        <div className="chatPanel--members">
            <h4>اعضا</h4>
            <div className='members'>
                {/* Loop over members */}
                    <div>
                        <Image
                        isRounded={true} 
                        src={faker.image.avatar()}
                        alt={'سارا احمدی'}
                        width={'30px'}
                        height={'30px'}
                        />
                        <span className='mr-4'>
                            سارا احمدی
                        </span>
                    </div>

                    {/* Loop over members */}

                    <div>
                        <Image
                        isRounded={true} 
                        src={faker.image.avatar()}
                        alt={'سارا احمدی'}
                        width={'30px'}
                        height={'30px'}
                        />
                        <span className='mr-4'>
                            سارا احمدی
                        </span>
                    </div>

                    <div>
                        <Image 
                        isRounded={true}
                        src={faker.image.avatar()}
                        alt={'سارا احمدی'}
                        width={'30px'}
                        height={'30px'}
                        />
                        <span className='mr-4'>
                            سارا احمدی
                        </span>
                    </div>

            </div>
        </div>
        {/* Members End */}

        {/* Files Begin */}
            <div className='links mt-8'>
                <h4 className='mb-5'>
                    پیوست ها
                </h4>

                <div className='groupButtons--wrapper mb-5'>
                    <GroupButtons
                    setIsActive = {setIsActive}
                    isActive={isActive}
                    />
                </div>

                <div className='related-files'>
                    {
                        isActive === 0 ?
                        <Pictures
                        picNames={['']}
                        imgAddresses={['']}
                        />
                        :
                        isActive === 1 ?
                        <Links
                        links={['']}
                        />
                        :
                        isActive === 2 ?
                        <Files
                        files={['']}
                        />
                        :
                        isActive === 3 ?
                        <Audios
                        audios={['']}
                        />
                        :
                        null
                    }

                </div>
            </div>
        {/* Files End */}
    </div>
  )
}

export default ChatPanel