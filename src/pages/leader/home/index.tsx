import {FC,useState} from 'react';
import Sidebar from '../../../layouts/Sidebar';
import SectionOne from './section/SectionOne';
import SectionTwo from './section/SectionTwo';

const Home:FC = () => {
  const [isActive,setIsActive] = useState(0);

 return (
    <section className='leader'>
      <Sidebar
      setIsActive={setIsActive}
      isActive={isActive}
      page={'mainPage'}
      />
      {
        isActive === 0 ?
        <SectionOne />
        : isActive === 1 ?
        <SectionTwo />
        : isActive === 3 ?
        <div>third</div>
        : null
      }
    </section>
 )}


export {Home as Leader};

 