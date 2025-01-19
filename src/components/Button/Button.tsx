import React, { useEffect } from 'react';
import './Button.css';

type Props = {
  label: string,
}
const Button: React.FC<Props> = ({ label }) => { 
  
  useEffect(() => {
    const buttons = document.querySelectorAll('.button')! as NodeListOf<Element>;
    buttons.forEach((el, index) => {
      if(index === 0)  return el.classList.add('active') 
    })
    
  }, [])
    return (
 <div className='button'>
     {label}
 </div>
  )
}

export default Button;