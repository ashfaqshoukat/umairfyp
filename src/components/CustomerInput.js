import React from 'react';

const Input=({placeholde,value, onChangeText,label, name})=>{
	return(
		<div>
			<lable>{label}</lable><br />
			<input name={name} type="text" placeholder={placeholde} value={value} onChange={onChangeText}/><br/>
		</div>
	)
}

export default Input;
