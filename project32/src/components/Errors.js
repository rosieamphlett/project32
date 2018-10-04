import React from 'react';
import './Login.css';

export const Errors = ({errors}) => 
  <div className='errors'>
    {Object.keys(errors).map((fieldName, i) => {
      if(errors[fieldName].length > 0){
        return (<p key={i}>{errors[fieldName]}</p>)        
      } else {
        return '';
      }
    })}
</div>