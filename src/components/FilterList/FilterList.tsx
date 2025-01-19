import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import './FilterList.css';

type Props = {
  handleFilters: (value: string[]) => void;
}

type CheckboxLabelType = {
  name: string,
  _id: string,
}
const FilterList: React.FC<Props> = ({ handleFilters}) => {

  const [Checked, setChecked] = useState([] as string[]);  
  
  const btnLabels: string[] = ['RUB', 'USD','EUR'];
  const checkboxLabels: CheckboxLabelType[] = [{_id:'-1',name:'Все'},{_id:'0',name:'Без пересадок'},
{_id:'1', name:'1 пересадка'}, {_id:'2', name: '2 пересадки'},{_id:'3', name: '3 пересадки'}] 
  
  const handleToggle = (value:string) => {
    
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Array.from(Checked)];   

    if(currentIndex === -1) {
      newChecked.push(value);  
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);    
    handleFilters(newChecked);
  }
  return (
    <div className='filterWrapper'>
      <h4>ВАЛЮТА</h4>
     <div className='buttons'>    
       {btnLabels.map((label, index) => <Button key={index} label={label} />)}
    </div>  
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
    <div className='checkboxes'>
      {checkboxLabels.map((value, index) =>( 
      <Checkbox
       onChange={() => handleToggle(value._id)}
       key={index} 
       label={value.name} 
       checked={Checked?.indexOf(value._id) === -1 ? false : true}/>))}
    </div>      
    </div>
  )
}

export default FilterList;