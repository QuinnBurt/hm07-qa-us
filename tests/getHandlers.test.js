// eslint-disable-next-line no-undef
const config = require('../config');

//Testing GET /api/v1/warehouses - Get a list of warehouses
//First we check that the status code is 200
test('Should be 200', async () => {
		let responseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseCode).toBe(200);
});
//Then we check that the response body is not empty
test('Should be true', async () =>{
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toBeTruthy();
})