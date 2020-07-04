export const cutLongTitle = (title) =>
	title?.length > 40 ? `${title.slice(0, 40)}...` : title;

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
