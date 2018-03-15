import axios from 'axios'

//this function will receive the url from where you want to get something and a method 
const getFromAPI = (url, methodToExecute) => (
	axios.get(url)
		.then(
			methodToExecute
		)
)

export default getFromAPI