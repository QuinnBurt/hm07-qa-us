const config = require('../config');

let authToken;
const createUserBody = {
	"firstName": "Tester",
	"phone": "+11234567890",
	"address": "1234 Testfield, QA"
}
const createKitBody = {
	"name": "Test Kit",
    "cardId": 1
}
async function createUser(){
	try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(createUserBody)
		});
		const data = response.json();
		authToken = data['authToken'];
	}
	catch(error){
		console.error(error);
	}
}
async function createKit(){
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
            'Authorization': authToken
			},
			body: JSON.stringify(createKitBody)
		});
        console.log(await response.json());
	}
	catch(error){
		console.error(error);
	}
}
createUser();
createKit();