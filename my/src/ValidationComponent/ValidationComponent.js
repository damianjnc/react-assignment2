import React from 'react';

const validationComponent = (props) =>{

    return (
      <div className='paragraph'>
          <input type='text' onChange={props.changed}/>
          <p>{props.content}</p>
          <p>{props.length > 5 ? 'text long enough' : 'text too short'}</p>
      </div>
    );
}


export default validationComponent;