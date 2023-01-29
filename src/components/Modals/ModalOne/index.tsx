import {FC,useContext} from 'react'
import { ModalProps } from '../../../types/interfaces'
import Overlay from '../../Overlay'
import Warning from './Warning';
import { ModalCtx } from '../../../context/modalContext';

const ModalOne:FC = () => {
const {isDisplayed} = useContext(ModalCtx);

  return (
    <div className='modal--states'>
        <Warning />
        {
            isDisplayed ? <Overlay /> : null
        }
    </div>
  )
}

export default ModalOne