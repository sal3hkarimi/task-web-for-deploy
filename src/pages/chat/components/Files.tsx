import {FC} from 'react';

type FilesProps = {
  files:string[];
}

const Files:FC<FilesProps> = ({files}) => {
  return (
    <div>Files</div>
  )
}

export default Files