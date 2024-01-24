// eslint-disable-next-line no-undef
const config = require('../config');

//Testing DELETE api/v1/kits/:id - Deleting the kit
let data;

//We check status code and save the response in json to data.
test('Check status code', async () => {
	let responseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
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

test('Check that "ok" is true', () => {
	expect(data['ok']).toBe(true);
});
