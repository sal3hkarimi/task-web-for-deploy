import {FC} from 'react';
import { CardBProps,CardHProps } from '../../../../types/interfaces';
import TodayBody from './TodayBody';
import TodayFooter from './TodayFooter';
import CardHeader from '../common/CardHeader';


type TodayCProps = CardBProps & CardHProps & {
    rejectionHandler?():void;
    acceptHandler?():void;
    role:'admin'| 'user' | 'leader';
}

const TodayCard:FC<TodayCProps> = ({
city,
softwareN,
rejectionHandler,
acceptHandler,
date,
taskNum,
role
}) => {
  return (
    <>
    <CardHeader
    taskNum={taskNum}
    date={date}
    />
    <TodayBody
    city={city}
    softwareN={softwareN}
    />
    <TodayFooter
    role={role}
    rejectionHandler={rejectionHandler}
    acceptHandler={acceptHandler}
    />
    </>
  )
}

export default TodayCard