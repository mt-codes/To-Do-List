var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December']

function createDate() {
	var now = new Date();
	var date = week[now.getDay()] + ', ' + month[now.getMonth()] + ' ' + now.getDate();
	
	var pDate = document.getElementsByClassName('current-date');
	pDate[0].textContent = date;
}

setInterval(createDate, 1000);
