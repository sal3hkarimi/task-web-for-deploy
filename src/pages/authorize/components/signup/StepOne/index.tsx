import {FC} from 'react';
import { useFormik } from 'formik';
import { authorizeValidation } from '../../../../../utils/formik';
import {AuthorizeFProps} from '../../../../../types/interfaces';

import Button from '../../../../../components/Button';
import TextField from '../../../../../components/TextField';

type StepOneProps = {
    setFormNum:Function;
}

type InputData ={
    value:string;
    type:"email" | "password" | "text";
    state:string;
    name:string
}

const StepOne:FC<StepOneProps>= ({setFormNum}) => {
const formik = useFormik({
    initialValues:{
        firstname:'',
        lastname:'',
        email:'',
        password:''
    },
    validateOnChange:false,
    validate:authorizeValidation,
    onSubmit:(values:AuthorizeFProps,{resetForm}) =>{
        resetForm();
    }
})

const inputData:InputData[] = [
    {
        value:'نام',
        type:'text',
        state:formik.values.firstname,
        name:'firstname'
    
    },
    {
        value:'نام خانوادگی',
        type:'text',
        state:formik.values.lastname,
        name:'lastname'
    
    },
    {
        value:'ایمیل',
        type:'email',
        state:formik.values.email,
        name:'email'
    
    },
    {
        value:'رمز عبور',
        type:'password',
        state:formik.values.password,
        name:'password'
    
    }
];



const continueBtnHandler =()=>{
    //formik.handleSubmit()
    setFormNum((prev:number)=> prev + 1);
}

  return (
    <>
    {
    inputData.map(({name,state,type,value},idx) => (
    <div key={idx} className="form--control">

        <TextField 
        placeholder={value}
        onChange={formik.handleChange}
        name={name}
        value={state}
        classN={'form--input'}
        type ={type}
        />

        {formik.errors[name as keyof AuthorizeFProps] ? 
        <small className='text-red-400'>
           {/* Icon */}
            {formik.errors[name as keyof AuthorizeFProps]}
        </small> 
        : null}
    </div>
    ))}
    <Button 
    isIcon={false}
    value="ادامه"
    type="submit"
    classN="btn--continue"
    onClick={continueBtnHandler}
    />
    </>
  )
}

export default StepOne