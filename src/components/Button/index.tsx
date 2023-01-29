import {FC} from 'react';
import {Cog6ToothIcon,Squares2X2Icon,CalendarDaysIcon} from '@heroicons/react/24/solid';
import {HeroIcon} from '../../types/interfaces';

export interface ButtonProps extends HeroIcon{
  type:'button' | 'submit';
  value:string;
  classN:string;
  onClick?:() =>void;
  isIcon:boolean;
}

const Button:FC<ButtonProps> = (
{
type,
value,
classN,
onClick,
isIcon,
Icon = ()=> <Cog6ToothIcon  />
}) => {
  return (
    <button onClick={onClick} type={type} className={classN}>
      {
        isIcon && value ?
        <>
          {<Icon />}
          {value}
        </>
        : isIcon && !value ?
        <Icon />
        : !isIcon && value ?
        value
        :
        null
      }
    </button>
  )
}

export default Button