export const cutLongTitle = (title) =>
	title.length > 40 ? `${title.slice(0, 40)}...` : title;

const declinationOfNumbers = (n) => (titles) =>
	n +
	" " +
	titles[
		n % 10 === 1 && n % 100 !== 11
			? 0
			: n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
			? 1
			: 2
	];

const months = [
	"января",
	"февраля",
	"марта",
	"апреля",
	"мая",
	"июня",
	"июля",
	"августа",
	"сентября",
	"октября",
	"ноября",
	"декабря",
];

const getNameOfMonth = (number) => months[number];

export const formatDate = (date) => {
	const day = new Date(date).getDate();
	const month = new Date(date).getMonth();
	const year = new Date(date).getFullYear();
	const hour = new Date(date).getHours();
	let minutes = new Date(date).getMinutes();

	minutes = minutes < 10 ? `0${minutes}` : minutes;

	return `${day} ${getNameOfMonth(month)} ${year}, ${hour}:${minutes}`;
};
