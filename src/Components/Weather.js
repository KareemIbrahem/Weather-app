import React from 'react'

export default function Weather(props) {
  return (
    <div className='info'>
      {
        props.Tempreature &&
        
        <p className='key'>Tempreature :
           <span className='value'>{props.Tempreature}</span>
           </p>
      }
      {
        props.city &&   <p className='key'>City : 
       <span className='value'> {props.city}</span>
        </p>
      }
      {
        props.country && <p className='key'>Country : 
        <span className='value'>{props.country}</span>
        </p>
      }
      {
        props.humidity && <p className='key'>Humidity : 
        <span className='value'>{props.humidity}</span>
        </p>
      }
      {
        props.description && <p className='key'>Description : 
        {props.description}<span className='value'>{props.Tempreature}</span>
        </p>
      }
      {
        props.error && <p className='key'>Error : 
         <span className='value'>{props.error}</span>
        </p>
      }
     
      
    </div>
  )
}

