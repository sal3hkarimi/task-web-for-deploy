import {FC} from 'react'

type AudiosProps = {
  audios:string[];
}

const Audios:FC<AudiosProps> = ({
audios
}) => {
  return (
    <div>Audios</div>
  )
}

export default Audios