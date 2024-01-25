// eslint-disable-next-line no-undef
const config = require('../config');

//Testing PUT /api/v1/kits/:id - Changing the kit
const createKitBody = {
	"name": "Test Kit",
    "cardId": 1
}
const changeKitBody = {
	"name": "Modified Kit",
	"productsList":[
		{
			"id": 2,
			"quantity": 1
		},
		{
			"id": 3,
			"quantity": 1
		}
	]
}
let kitId;
//We create a new kit for testing purposes.
async function createKit(){
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(createKitBody)
		});
		const data = await response.json();
		kitId = data['id'];
	}
	catch(error){
		console.error(error);
	}
}
//We check status code and save the response in json to data.
test('Should be 200', async () => {
	let statusCode;
	//First we create a new kit
	await createKit();
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(changeKitBody)
		});
		statusCode = response.status;
		data = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(statusCode).toBe(200);
});

//We check that the "ok" key in the response body has a value of true.
test('Should be true', async () => {
	let data;
	await createKit();
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(changeKitBody)
		});
		data = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(data["ok"]).toBe(true);
});
