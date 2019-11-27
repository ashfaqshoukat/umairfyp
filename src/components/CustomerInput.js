import React from 'react';

const Input=({placeholde,value,onChangeText,label})=>{
	return(
		<div>
			<lable>{label}</lable><br />
			<input  type="text" placeholder={placeholde} value={value} onChange={e=>  onChangeText(e.target.value)}/><br/>
		</div>
	)
}

export default Input;
