import Button from '../../../../../../components/Button';
import { PlusIcon } from '@heroicons/react/24/solid';
import SearchField from '../../../../../../components/SearchField';
import {Filter} from '../../../../../../components/Icons';

const Header = () => {
return (
  <header className='sectionTwo--header'>
    <div className='top'>
        <h3>تسک ها</h3>
        <Button 
        value='ایجاد تسک جدید'
        isIcon={true}
        classN={'btn--createTask'}
        type={'button'}
        Icon={()=><PlusIcon width={'18px'} height={'18px'} />}
        />
    </div>
    <div className='bottom'>
        <SearchField
        value=''
        //Search operation
        onChange={()=>{}}
            />
        <Button
        type='button'
        classN='btn--filter mr-1'
        value='فیلتر'
        isIcon={true}
        Icon={()=> <Filter />}
        />
    </div>
  </header>
)
}

export default Header