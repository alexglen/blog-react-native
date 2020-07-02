export const postArticle = (img, text, date, booked, title) => {
	fetch("https://blog-react-native-e68a9.firebaseio.com/articles.json", {
		method: "POST",
		body: JSON.stringify({ img, text, date, booked, title }),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
};

export const deleteOneArticle = async (id) => {
	await fetch(
		`https://blog-react-native-e68a9.firebaseio.com/articles/${id}.json`,
		{
			method: "DELETE",
		}
	);
};

export const addToFave = async (id, marked) => {
	await fetch(
		`https://blog-react-native-e68a9.firebaseio.com/articles/${id}.json`,
		{
			method: "PATCH",
			body: JSON.stringify({
				booked: marked,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}
	);
};
