import {FC} from 'react';
import { loginValidation } from '../../../../../utils/formik';
import Button from '../../../../../components/Button';
//<--Import Icons/Images-->
import exclamationIcon from '../../../assets/icons/exclamation-circle.svg';

import DropdownList from '../../../../../components/Dropdown';

const SecondForm:FC = () => {
  
//   const formik = useFormik({
//     initialValues:{
//         email:'',
//         password:''
//     },
//     validateOnChange:false,
//     validate:loginValidation,
//     onSubmit:(values:InputState,{resetForm}) =>{
//         resetForm();
//     }
// })

return (
    <>
    <DropdownList 
        itemValues={[
            'سپام',
            'ماکان',
            'شرکت توزیع برق',
            'ساتیا'
        ]}
        isChevron={true}
        Icons={[]}
        btnClassN={'btn--isChevron'}
        btnValue={'نام نرم افزار'}
    />
    <DropdownList 
        itemValues={[
            'تهران',
            'ایلام',
            'اذربایجان غربی',
            'مشهد'
        ]}
        isChevron={true}
        Icons={[]}
        btnClassN={'btn--isChevron'}
        btnValue={'نام استان'}
    />
    <Button 
    value="ثبت نام"
    type="submit"
    isIcon={false}
    classN="btn--submit mt-3"
    />
    </>
  )
}

export default SecondForm