//<--Global Components/Pages Props-->
export interface PropsTypes {
    children:JSX.Element;
}

export interface HeroIcon{
Icon?:() => JSX.Element;
} 
//<--Global Components/Pages Props-->

export interface DateProps {
    month:string;
    day:string | number;
    year:string | number;
}
export interface CardHProps {
    taskNum:string;
    date:DateProps;
}

export interface CardBProps{
    softwareN:string;
    city:string;
}

export interface CommentDateProps {
    dayWeek:string;
    day:string | number;
    month:string;
    time:{
      hour:string;
      minute:string
    }
}

export interface ExpiredDFProps {
    remainingDays:string | number;
    createdAt:DateProps;
    deliverAt:DateProps
}

export interface AuthorizeFProps{
    firstname:string;
    lastname:string;
    password:string;
    email:string;
}

export interface LoginFProps{
    email:string;
    password:string;
}


export interface ModalProps{
    setIsDisplayed:Function;
    isDisplayed:boolean;
}

export interface CardHeaderProps{
    taskNum:string | number;
    status:string;
    onClick?():void;
}

export interface DropdownBodyProps{
Icons:HeroIcon[];
itemValues:string[];
onClick?():void;
}








