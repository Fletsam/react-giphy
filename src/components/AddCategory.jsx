import { useState } from "react"


export function AddCategory({onNewCategories}) {
 
	const [inputValue, setInputValue] = useState("")	
	
	const onInputChange = (e) => {
		setInputValue(e.target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault()

		if (inputValue.trim().length<= 1) return {
			
		}
	
		onNewCategories( inputValue.trim())
		setInputValue("")
	}
	
return (
	<>
	<form onSubmit={onSubmit}>
		<input 
		type="text" 
		placeholder="Buscar Gif"
		value={inputValue}
		onChange={ onInputChange }
		/>
	</form>

	</>

  )
}

