import axios from 'axios'

//this function will receive the url from where you want to get something and a method 
const getFromAPI = (url) => (
	axios.get('http://renatafelix-001-site1.gtempurl.com/api/'+url)
)

export default getFromAPI