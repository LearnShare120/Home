// Set the target date and time
const countdownDate = new Date("Sep 21, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
	const now = new Date().getTime();
	const distance = countdownDate - now;

	// Time calculations for days, hours, minutes, and seconds
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Update the HTML with the calculated time
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
	document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
	document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

	// When the countdown is finished, display a message
	if (distance < 0) {
		clearInterval(countdownFunction);
		document.getElementById("countdown").style.display = "none";
		const message = document.getElementById("message");
		message.innerHTML = "Welcome to the Future!";
		message.style.visibility = "visible";
	}
}, 1000);
