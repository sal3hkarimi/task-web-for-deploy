import { faker } from '@faker-js/faker';
import {FC} from 'react';
import Image from '../../../components/Image';

type PicturesProps = {
  picNames:string[];
  imgAddresses:string[];
}


const Pictures:FC<PicturesProps> = ({
picNames,
imgAddresses
}) => {
  return (
    <div>
      {/* Loop over images */}
      <Image
      alt={'filename'}
      src={faker.image.avatar()}
      width={'100px'}
      height={'90px'}
      />
  </div>
  )
}

export default Pictures