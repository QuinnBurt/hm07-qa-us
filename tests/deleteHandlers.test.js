// eslint-disable-next-line no-undef
const config = require('../config');

//Testing DELETE api/v1/kits/:id - Deleting the kit
const createKitBody = {
	"name": "Test Kit",
    "cardId": 1
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
	var responseCode;
	//First we create a new kit
	await createKit();
	//Then we delete the kit we just created
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		responseCode = response.status;
		data = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(responseCode).toBe(200);
});
//We check that the "ok" key in the response has a value of true
test('Should be true', async () => {
	var data;
	//First we create a new kit
	await createKit();
	//Then we delete the kit we just created
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		data = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(data['ok']).toBe(true);
});
