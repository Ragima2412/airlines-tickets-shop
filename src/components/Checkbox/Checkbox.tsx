import React from 'react';
import './Checkbox.css';

type Props = {
    label: string;
    checked?: boolean,
    onChange: () => void
}
const Checkbox: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
      <div className='checkbox-wrapper'>
      <label className="container">{label}
        <input type="checkbox" onChange={onChange} checked={checked}/>
        <span className="checkmark"></span>
     </label>
      </div>
  )
}

export default Checkbox