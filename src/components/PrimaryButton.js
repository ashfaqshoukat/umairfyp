import React from 'react';

const PrimaryButton=({onPressed})=>{
    return(
        <button onClick={onPressed} style={styles}>SUBMIT</button>
    )
}

const styles={
   'background-color': "#555555",
"border": 'none',
'color': 'white',
'padding':' 15px 92px',
'text-align': 'center',
'text-decoration': 'none',
'display': 'inline-block',
'font-size': '16px',
'margin': '4px 2px',
'cursor': 'pointer',
}
export default PrimaryButton;