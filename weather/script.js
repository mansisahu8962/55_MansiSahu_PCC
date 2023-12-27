async function fetchData() {
const url = 'https://foreca-weather.p.rapidapi.com/location/search/mumbai?lang=en&country=in';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ec35af24amsh65d248ffd27221ep1cbfc3jsn36f0bdc69caa',
		'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();
