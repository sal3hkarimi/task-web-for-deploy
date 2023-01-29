import {FC} from 'react'

type CommentCProps = {
  taskNum:string;
  city:string;
  softwareN:string;
}


const index:FC<CommentCProps> = ({
taskNum,
city,
softwareN
}) => {

return (
<div className='cardBody--comment'>
  <span>
      تسک شماره
      <span className='ml-2'>{taskNum}</span>
  </span>
  <span>
      <span>{city}</span>
      -
      <span className='ml-2'>{softwareN}</span>
  </span>
</div>
)
}

export default index