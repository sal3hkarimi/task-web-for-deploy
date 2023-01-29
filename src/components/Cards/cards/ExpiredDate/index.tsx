import {FC} from 'react';
import ExpiredDBody from './ExpiredDateBody'
import ExpiredDFooter from './ExpiredDateFooter';
import CardHeader from '../common/CardHeader';
import { CardBProps, CardHProps,ExpiredDFProps } from '../../../../types/interfaces';

type ExpiredDProps = CardHProps & CardBProps & ExpiredDFProps ;


const ExpiredCard:FC<ExpiredDProps> = ({
city,
softwareN,
taskNum,
date,
deliverAt,
createdAt,
remainingDays
}) => {
  return (
    <>
        <CardHeader 
        taskNum={taskNum} 
        date={date} 
        />

        <ExpiredDBody 
        softwareN={softwareN} 
        city={city} 
        />

        <ExpiredDFooter 
        remainingDays={remainingDays}
        createdAt={createdAt}
        deliverAt={deliverAt}
        />
    </>
  )
}

export default ExpiredCard