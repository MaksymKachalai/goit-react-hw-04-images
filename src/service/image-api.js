export default function ImageAPi(query, page = 1) {
	const apiKey = "21459621-fc317cd07d31a3b6e25198c55";
	return fetch(
		`https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
	).then((response) => {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(
			new Error(`There is no images available for search${query}`)
		);
	});
}
