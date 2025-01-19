import React from 'react';
import Image from '../../images/airlines.png';
import arrowIcon from '../../images/arrow-plane.png';
import { TicketItemType } from '../../App';
import './Item.css';
import moment from 'moment';
import 'moment/locale/ru';

type Props = {
  item:TicketItemType 
}

const Item : React.FC<Props> = ({ item } ) => {

const departureDate= moment(`${item.departure_date}`).format('ll');
const arrivalDate = moment(`${item.arrival_date}`).format('ll');    
  
  return (
    <div className="item-wrapper">
      <div className='price-info'>
        <img src={Image} alt='airlines' />
        <button className='price-btn'>Купить<p> за {item.price} P</p></button>
      </div>
      <div className='flight-info'>
       <div className='time-info'>
            <span>{item.departure_time}</span>       
            <span className='stops-info'>{item.stops > 1 ? `${item.stops} ПЕРЕСАДКИ` : `${item.stops} ПЕРЕСАДКА`}
                 <span className='arrow-icon-line'> <img  className='arrow-icon' src={arrowIcon} alt="plane" />   </span>    
            </span>                
           <span>{item.arrival_time}</span>
      </div>
         <div>
            <span className='departure-info'>
              <p>{item.origin}, {item.origin_name}</p>
              <p>{item.destination_name} , {item.destination}</p>
             </span>
            <span className='destination-info'>
              <p>{departureDate},Пт</p>
              <p>{arrivalDate},Пт</p>
             </span>
        </div>
       </div>
    </div>
  )
}

export default Item;