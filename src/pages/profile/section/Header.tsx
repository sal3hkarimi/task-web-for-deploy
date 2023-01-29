import {FC,useState,ChangeEvent} from 'react'
import { Edit,UserInfo,PasswordKey } from '../../../components/Icons';
import Image from '../../../components/Image';
import profilePlaceholder from '../../../assets/images/profilePlaceholder.png';
import Button from '../../../components/Button';

const Header = () => {
const [profileImg,setProfileImg] = useState('');


const chooseFileHandler =(e:ChangeEvent<HTMLInputElement>)=>{

if(e.target.files && e.target.files[0]){
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setProfileImg(imgUrl)
}

}

  return (
    <header className='profile--header'>
    <div className='settings'>
      <div className='right ml-4'>
          <div className='imgProfile--wrapper ml-3'>
            <label>
            <input onChange={chooseFileHandler} type="file" accept='image/jpeg , image/png ' />
              <Edit />
            </label>
              <Image style={!profileImg ? {backgroundColor:'#E5E8F5',padding:'1em'} : {}} src={profileImg ? profileImg : profilePlaceholder} isRounded={true} alt={'something'} width={'120px'} height={'120px'} />
          </div>
      </div>
      <div className='left'>
        <div>
          <span className='ml-2'> 
            <UserInfo />
          </span>
          <span>اطلاعات من</span>
        </div>
        <div className='mr-16'>
          <span className='ml-2'>
            <PasswordKey />
          </span>
          <span>رمز عبور</span>
        </div>
      </div>
    </div>
    <div className='desktop--buttons buttons'>
      <Button 
      type={'button'} 
      value={'لغو'} 
      classN={'btn--cancel'} 
      isIcon={false}                  
      />
      <Button 
      type={'button'} 
      value={'ذخیره'} 
      classN={'btn--save'} 
      isIcon={false}                  
      />
    </div>
  </header>
  )
}

export default Header