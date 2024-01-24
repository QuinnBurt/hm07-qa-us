// eslint-disable-next-line no-undef
const config = require('../config');

//Testing GET /api/v1/warehouses - Get a list of warehouses
test('Check status code', async () => {
		let responseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseCode).toBe(200);
});

test('Check that response body is not empty', async () =>{
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toBeTruthy();
})