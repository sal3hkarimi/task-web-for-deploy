import {FC} from 'react';
import CommentBody from './CommentBody';
import CommentHeader from './CommentHeader';
import CommentFooter from './CommentFooter';
import {CommentDateProps} from '../../../../types/interfaces';


type CommentProps = {
  isUploaded:boolean;
  fileFormat:string;
  taskNum:string;
  softwareN:string;
  city:string;
  date:CommentDateProps
}

const Comment:FC<CommentProps> = ({
isUploaded,
fileFormat,
city,
softwareN,
taskNum,
date
}) => {
  
  return (
    <>
    <CommentHeader 
    isUploaded={false} 
    fileFormat={''} 
    />
    <CommentBody 
    taskNum={''} 
    city={''} 
    softwareN={''} 
    />
    <CommentFooter 
    date={{
        dayWeek: '',
        day: '',
        month: '',
        time: {
          hour: '',
          minute: ''
        }
      }} 
      />
    </>
  )
}

export default Comment