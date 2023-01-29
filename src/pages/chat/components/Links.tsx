import {FC} from 'react'

type LinksProps = {
  links:string[];
}


const Links:FC<LinksProps> = ({links}) => {
  return (
    <div>Links</div>
  )
}

export default Links