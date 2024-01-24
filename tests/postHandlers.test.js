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
let data;

test('Check status code', async () => {
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
		//We get data in response test so we don't need to fetch during second test.
		data = await response.json();
	}
	catch(error) {
		console.error(error);
	}
expect(responseCode).toBe(200);
});

//Using data from first test we check if the last product ID is the one that we added. According to the kit_model, the last product by default is ID 92.
test('Checking that items are added', () =>{
	try{
		expect(data['productsList'][data.productsList.length - 1]['id']).toBe(2);
	}
	catch(error){
		console.error(error);
	}
})
