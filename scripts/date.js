const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']

function createDate() {
	const now = new Date();
	var date = week[now.getDay()] + ', ' + month[now.getMonth()] + ' ' + now.getDate();
	
	var pDate = document.getElementsByClassName('current-date');
	pDate[0].textContent = date;
}

setInterval(createDate, 1000);
