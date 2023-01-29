import {FC,useState} from 'react';
import { ChevronDoubleRightIcon,ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import useWindowSize from '../../hooks/useWindowSize';


import Navbar from '../../layouts/Navbar';
import SideNav from '../../layouts/Sidebar';
import Body from './section/Body';
import Header from './section/Header';
import Button from '../../components/Button';

const Profile:FC = () => {
const wSize = useWindowSize();
const [isActive,setIsActive] = useState(0);
const [isExpand,setIsExpand] = useState(false);


  return (
    <section className='profile'>
        <Navbar />
        <div className={`left ${isExpand ? 'expand' : ''}`}>
          <SideNav 
          setIsActive={setIsActive} 
          isActive={isActive} 
          page={'settings'}
          />
          <div>
          {
            wSize <= 768 ? 
            <span onClick={()=> setIsExpand(prev => !prev )} className='openSidenav'>
              {
                isExpand ?
                <ChevronDoubleRightIcon width={'20px'} height={'20px'} />
                :
                <ChevronDoubleLeftIcon width={'20px'} height={'20px'} />
              }
            </span>
            :
            null
          }
            <div className="hero"></div>
            <div className="content">
              {/* Profile Header */}
                  <Header />
              {/* Profile Body */}
                  <Body />
              {/* Smaller Dimensions Buttons */}
                <div className='mb-2 mobile--buttons buttons'>
                  <Button 
                    type={'button'} 
                    value={'لغو'} 
                    classN={'btn--cancel'} 
                    isIcon={false}                  
                  />
                  <Button 
                    type={'button'} 
                    value={'ذخیره'} 
                    classN={'btn--save'} 
                    isIcon={false}                  
                  />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Profile