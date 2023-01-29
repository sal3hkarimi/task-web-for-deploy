import {FC,useState} from 'react'
import {Cog6ToothIcon,Squares2X2Icon,CalendarDaysIcon} from '@heroicons/react/24/outline';
import Button from '../../components/Button';
import { Menu,Calendar,MenuBoard,Chat,Cog6Tooth } from '../../components/Icons';


const MainPageIcons = [
    <Menu />,
    <MenuBoard />,
    <Calendar />,
    <Cog6Tooth />
]

const SettingsPageIcons =[
    <Menu />,
    <MenuBoard />,
    <Chat />,
    <Cog6Tooth />
]

type SidebarProps = {
    setIsActive:Function;
    isActive:number;
    page:string;
}


const SideNav:FC<SidebarProps> = ({
setIsActive,
isActive,
page
}) => {

const sidebarBtnHandler =(idx:number)=>{
    setIsActive(idx);
}


return (
    <aside className='sidenav'>
        <div className='sidenav--buttons'>
            {
                page === 'mainPage' ?

                MainPageIcons.map((Icon,idx)=>(
                    <Button
                    key={idx}
                    type='button'
                    onClick={()=>sidebarBtnHandler(idx)}
                    isIcon={true} 
                    value={''}
                    Icon={() => Icon}
                    //Class should have dynamic class
                    classN={`my-5 sidebar--btn ${isActive === idx ? 'active' : ''}`}
                />
                ))

                : page === 'settings' ?

                SettingsPageIcons.map((Icon,idx)=>(
                    <Button
                    key={idx}
                    type='button'
                    onClick={()=>sidebarBtnHandler(idx)}
                    isIcon={true} 
                    value={''}
                    Icon={() => Icon}
                    //Class should have dynamic class
                    classN={`my-5 sidebar--btn ${isActive === idx ? 'active' : ''}`}
                />
                ))

                :
                null
            }
        </div>
    </aside>
  )
}

export default SideNav