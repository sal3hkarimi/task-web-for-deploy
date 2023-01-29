import {FC} from 'react';

type ImageProps = {
    src:string;
    alt:string;
    width:string;
    height:string;
    isRounded?:boolean;
    style?:{[prop:string]:string};
  }


const Image:FC<ImageProps> = ({
src,
alt,
width,
height,
isRounded,
style
}) => {
  return (
    <img src={src} style={style} width={width} height={height} alt={alt} className={`${isRounded ? 'rounded-full' : ''}`} />
  )
}

export default Image