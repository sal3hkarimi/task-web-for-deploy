import {FC,useContext} from 'react';
import {XMarkIcon,TrashIcon } from '@heroicons/react/24/outline';
import Button from '../../../Button';
import {ModalProps} from '../../../../types/interfaces';
import {ModalCtx} from '../../../../context/modalContext';

const Warning:FC = () => {
const {hideModal} = useContext(ModalCtx);

const deleteTaskHandler =()=>{

    hideModal();
}

  return (
    <div className='modal modal--warning'>
        <header className='modal--header'>
            <div>
                <span className='modal--span-icon'>
                    <TrashIcon width={'30px'} height={'30px'} />
                </span>
                <h4>
                    حذف تسک
                </h4>
            </div>
            <XMarkIcon width={'25px'} height={'25px'} />
        </header>
        <span>ایا از حذف این تسک مطمین هستید؟</span>
        <div className="modal--buttons">
            <Button 
            type={'button'}
            value={'خیر'} 
            classN={''} 
            isIcon={false}
            onClick={hideModal}
            />
            <Button 
            type={'button'}
            value={'بله حذف شود'} 
            classN={''} 
            isIcon={false}
            onClick={()=> deleteTaskHandler()}
            />
        </div>
    </div>
  )
}

export default Warning