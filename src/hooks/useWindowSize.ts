import {useEffect, useState} from 'react';

const ifWinExists = typeof window === 'object' && window;

const useWindowSize = ()=>{
    const [wSize,setWSize] = useState(ifWinExists && window.innerWidth);

    const windowSizeHandler =()=>{
        setWSize(window.innerWidth);
    }

    useEffect(()=>{

    if(ifWinExists){
        window.addEventListener('resize',windowSizeHandler)
    }

    return ()=> window.removeEventListener('resize',windowSizeHandler)
    },[]);


return wSize;
}


export default useWindowSize;