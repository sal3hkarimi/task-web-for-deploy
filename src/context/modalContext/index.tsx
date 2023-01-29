import {createContext,useState,FC,useContext} from 'react';
import { PropsTypes } from '../../types/interfaces';

type ContextValues = {
    isDisplayed:boolean;
    hideModal():void;
    displayModal():void;
}

const initialValues:ContextValues = {
    isDisplayed:false,
    hideModal(){},
    displayModal(){}
}

export const ModalCtx = createContext(initialValues);


const ModalContextC:FC<PropsTypes> = ({children})=>{
const [isDisplayed,setIsDisplayed] = useState(false);

const displayModal = ()=>{
    setIsDisplayed(true);
}


const hideModal = ()=>{
    setIsDisplayed(false);
}

return <ModalCtx.Provider value={{isDisplayed,hideModal,displayModal}}>{children}</ModalCtx.Provider>
}


export default ModalContextC;