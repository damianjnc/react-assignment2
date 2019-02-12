import React from 'react';

const charComponent = (props) => {
    const myStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return(
        <div onClick={props.click} className='charComponentDiv' style={myStyle}>
            <p>{props.content}</p>
        </div>
    );

}

export default charComponent