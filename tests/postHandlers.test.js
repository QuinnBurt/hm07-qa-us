// eslint-disable-next-line no-undef
const config = require('../config');
//Testing POST /api/v1/kits/:id/products - Adding items to a kit
const requestBody = {
    "productsList": [
		{
			"id": 2,
			"quantity": 1
		}
	]
}
//We check that the status code in the response is 200.
test('Should be 200', async () => {
	let responseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		responseCode = response.status;
	}
	catch(error) {
		console.error(error);
	}
expect(responseCode).toBe(200);
});
//We check if the last product ID is the one that we added. According to the kit_model, the last product by default is ID 92.
test('Should be 2', async () =>{
	let data;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
		expect(data['productsList'][data.productsList.length - 1]['id']).toBe(2);
	}
	catch(error){
		console.error(error);
	}
})
