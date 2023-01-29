import { useState } from "react";
import StepOne from "./components/signup/StepOne";
import StepTwo from "./components/signup/StepTwo";
import {ChevronRightIcon} from '@heroicons/react/24/solid'

const Authorize = () => {
const [formNum,setFormNum] = useState(0);

const formSubmitHandler = (e:any)=>{
  e.preventDefault();
}

const navigateBackHandler =()=>{
setFormNum((prev:number) => {
  if(prev <= 0){
    return 0;
  }else{
    return prev - 1;
  }
});
}

  return (
    <div className="form--wrapper">
      <form className='form form--signup' onSubmit={formSubmitHandler}>
        {
          formNum >= 1
          ?
          <small onClick={navigateBackHandler} className="form--backBtn">
            <ChevronRightIcon width={'20px'} height={'20px'} />
            بازگشت
          </small>
          :
          null
        }
        <h3 className='my-1'>ثبت نام</h3>
        {
          formNum === 1 ?
          <StepTwo />
          : 
          <StepOne 
          setFormNum={setFormNum}
          />
        }
      </form>
    </div>
  )
}

export default Authorize