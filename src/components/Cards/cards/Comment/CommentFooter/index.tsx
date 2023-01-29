import {FC} from 'react';
import {CommentDateProps} from '../../../../../types/interfaces';

type FooterProps = {
  date:CommentDateProps
}

//date:{dayWeek,day,month,time:{hour,minute}}
const index:FC<FooterProps> = ({date}) => {
  return (
    <small>
      <span>{date.dayWeek}</span>
      <span>{date.day}</span>
      <span>{date.month}</span>
      <span>{date.time.hour}:{date.time.minute}</span>
    </small>
  )
}

export default index