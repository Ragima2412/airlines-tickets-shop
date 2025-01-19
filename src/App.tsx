import React, { useEffect } from 'react';
import { useState } from 'react';
import FilterList from './components/FilterList/FilterList';
import Item from '../src/components/Item/Item';
import Data from '../src/services/tickets.json';
import './App.css';
import Icon from './components/Icon/Icon';

export type TicketItemType = {
  "origin": string,
  "origin_name": string,
  "destination": string,
  "destination_name": string,
  "departure_date": string,
  "departure_time": string,
  "arrival_date":string,
  "arrival_time": string,
  "carrier": string,
  "stops":number,
  "price": number
};

function App() {
const { tickets } = Data;
const afterSort = () => tickets.sort((a, b) => (a.price - b.price))
const [allTickets, setAllTickets] = useState(afterSort);
const [filteredTickets, setFilteredTickets] = useState([] as TicketItemType[]);
  
useEffect(() => {
setFilteredTickets([...allTickets])
},[])

const handleFilters = (value: string[]):void => {
  if(value.includes('-1')) {
    setFilteredTickets([...allTickets])
  } else {
    let array:TicketItemType[] = [];
     let data = value.map((val) => {
     return allTickets.filter(item => {
        if(item.stops === Number(val)) return item;
      })
    })
    array = data.flat()
     if(!array.length) return setFilteredTickets([...allTickets])
     setFilteredTickets([...array])
    }  
}  
  return (
    <div className="app">
      <Icon />
      <div className='main-wrapper'> 
        <FilterList handleFilters={handleFilters} />  
        <div className='items-wrapper'>
         {filteredTickets?.map((item, index) => (
           <Item 
           key={index} 
           item={item} />
         ))}
        </div>
       </div>    
  
    </div>
  );
};

export default App;
