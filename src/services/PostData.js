import axios from 'axios'

export function PostData(type, userData) {
	// let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/'
	// let BaseURL = 'http://localhost:3000/'

	let BaseURL =  'http://renatafelix-001-site1.gtempurl.com/api/Usuario/Cadastrar'
    
	return new Promise((resolve, reject) =>{
		console.log(userData.name)
		axios.post(BaseURL, {
			nome: userData.name,
			email: userData.email
		}).then((res) => {
			resolve(res)
		})
			.catch((error) => {
				reject(error)
			})
		
	})
}