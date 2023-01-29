import {FC} from 'react'
import Image from '../../components/Image';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {faker} from '@faker-js/faker';

type NavbarProps = {
    userImgSrc?:string;
    username?:string;
}


const Navbar:FC<NavbarProps> = ({
userImgSrc = faker.image.avatar(),
username='مجتبی وندایی'
}) => {
  return (
    <header className='nav--header'>
        <div className='nav--user'>
            <Image 
            src={userImgSrc}
            alt={username}
            width={'35px'}
            height={'35px'}
            />
            <span className='nav--username'>
                {username}
            </span>
            <ChevronDownIcon width={'20px'} height={'20px'} />
        </div>
    </header>
  )
}

export default Navbar