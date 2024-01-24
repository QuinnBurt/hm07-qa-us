// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
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
let data;

//We check status code and save the response in json to data.
test('Check status code', async () => {
	let statusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
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
test('Check that "ok" is true', () => {
	expect(data["ok"]).toBe(true);
});

