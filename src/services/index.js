// export const getArticles = async () => {
// 	const res = await fetch(
// 		`https://blog-react-native-e68a9.firebaseio.com/articles.json`,
// 		{
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		}
// 	);

// 	return await res.json();
// };

// export const fetchArticles = async () => {
//     showLoader();
//     clearError();
//     try {
//         const res = await fetch(
//             `https://todo-react-native-84e02.firebaseio.com/todos.json`,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         const data = await res.json();

//         const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
//         dispatch({ type: FETCH_TODOS, payload: todos });
//     } catch (e) {
//         showError("Упс. Что-то пошло не так...");
//     } finally {
//         hideLoader();
//     }
// };
