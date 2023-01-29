import { AuthorizeFProps,LoginFProps } from "../types/interfaces";


//<--Handle Formik Errors-->
export const authorizeValidation = ({email,password,firstname,lastname}:AuthorizeFProps):AuthorizeFProps=>{
    const errors:AuthorizeFProps = {
        firstname:'',
        lastname:'',
        password: '',
        email:''
    };

    //<-- Check firstname -->
    if(!firstname){
        errors.firstname = 'این فیلد الزامی میباشد';
    }else if(firstname.length > 10){
        errors.firstname = 'باید ۱۵ کاراکتر یا کمتر وارد کنید'
    }

    //<-- Check lastname -->
    if(!lastname){
        errors.lastname = 'این فیلد الزامی میباشد';
    }else if(lastname.length > 10){
        errors.lastname = 'باید ۱۵ کاراکتر یا کمتر وارد کنید'
    }

    //<-- Check password -->
    if(!password){
        errors.password = 'این فیلد الزامی میباشد';
    }else if(password.length > 32){
        errors.password = 'باید ۳۲ کاراکتر یا کمتر وارد کنید'
    }

    //<-- Check email -->
    if(!email){
        errors.email = 'این فیلد الزامی میباشد';
    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
        errors.email = 'باید ۳۲ کاراکتر یا کمتر وارد کنید'
    }


    return errors;
}

export const loginValidation = ({email,password}:LoginFProps):LoginFProps =>{
    const errors:LoginFProps = {
        email:'',
        password:''
    }


    //<-- Check email -->
    if(!email){
        errors.email = 'این فیلد الزامی میباشد';
    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
        errors.email = 'باید ۳۲ کاراکتر یا کمتر وارد کنید'
    }

    //<-- Check password -->
    if(!password){
        errors.password = 'این فیلد الزامی میباشد';
    }else if(password.length > 32){
        errors.password = 'باید ۳۲ کاراکتر یا کمتر وارد کنید'
    }

    return errors;
}


//<--Handle Formik Errors-->

