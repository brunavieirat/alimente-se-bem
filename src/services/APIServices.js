import axios from 'axios'

//this function will receive the url from where you want to get something and a method 
 const getFromAPI = (url) => (
	axios.get('http://renatafelix-001-site1.gtempurl.com/api/'+url)
)

const postFromAPI = (url, props) => (
	axios.post('http://renatafelix-001-site1.gtempurl.com/api/'+url, props)
)

const deleteFromAPI = (id) => (
	axios.delete('http://renatafelix-001-site1.gtempurl.com/api/'+id)
)

export { deleteFromAPI}
export { postFromAPI }
export default getFromAPI
