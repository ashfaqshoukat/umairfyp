import React from 'react';

const Input=({placeholde,value,onChangeText})=>{
	return(
		<input type="text" placeholder={placeholde} value={value} onChange={e=>  onChangeText(e.target.value)}/>
	)
}

export default Input;
