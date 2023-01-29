import {FC} from 'react';
import ImportantBody from './ImportantBody';
import CardHeader from '../common/CardHeader';
import ImportantFooter from './ImportantFooter';
import { CardBProps,CardHProps } from '../../../../types/interfaces';

type TodayCProps = CardBProps & CardHProps & {
    rejectionHandler?():void;
    acceptHandler?():void;
}

const TodayCard:FC<TodayCProps> = ({
city,
softwareN,
rejectionHandler,
acceptHandler,
date,
taskNum,
}) => {
  return (
    <>
    <CardHeader
    taskNum={taskNum}
    date={date}
    />
    <ImportantBody
    city={city}
    softwareN={softwareN}
    />
    <ImportantFooter
    rejectionHandler={rejectionHandler}
    acceptHandler={acceptHandler}
    />
    </>
  )
}

export default TodayCard