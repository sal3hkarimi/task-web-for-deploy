import {FC,useReducer} from 'react';
import TextField from '../../../components/TextField';
import { reducerFn } from '../../../utils/reducer';

const initValues = {
  firstname:'',
  lastname:'',
  email:'',
  password:''
}

const Body:FC = () => {
const [state,reducer] = useReducer(reducerFn,initValues);

  return (
    <div className="profile--body">
          {/* Row 1 Begin*/}
          <div className='row-1 d-flex flex-row align-center'>
            <div className='flex-1 ml-16'>
              <label htmlFor="firstname">
                  نام
              </label>
              <TextField 
                placeholder={'نام'} 
                type={'text'} 
                value={state.firstname}
                onChange={(e) => reducer({type:'FIRSTNAME',payload:e.target.value})}
                id={'firstname'}
                name={'firstname'} 
                classN={''}
              />
            </div>
            <div className='flex-1'>
              <label htmlFor="lastname">
                  نام خانوادگی
              </label>
              <TextField 
                placeholder={'نام خانوادگی'} 
                type={'text'} 
                value={state.lastname}
                onChange={(e) => reducer({type:'LASTNAME',payload:e.target.value})}
                id={'lastname'}
                name={'lastname'} 
                classN={''}
              />
            </div>
          </div>
          {/* Row 1 End */}

          {/* Row 2 Begin*/}
          <div className='row-2 d-flex flex-row align-center mt-10'>
            <div className='flex-1 ml-16'>
              <label htmlFor="lastname">
                  ایمیل
              </label>
              <TextField 
                placeholder={'ایمیل'} 
                type={'email'} 
                value={state.email}
                onChange={(e) => reducer({type:'EMAIL',payload:e.target.value})}
                id={'email'}
                name={'email'} 
                classN={''}
              />
            </div>
            <div className='flex-1'>
              <label htmlFor="lastname">
                   پسوورد
              </label>
              <TextField 
                placeholder={'پسوورد'} 
                type={'password'} 
                value={state.password}
                onChange={(e) => reducer({type:'PASSWORD',payload:e.target.value})}
                id={'password'}
                name={'password'} 
                classN={''}
              />
            </div>
          </div>
      {/* Row 2 End */}
    </div>
  )
}

export default Body