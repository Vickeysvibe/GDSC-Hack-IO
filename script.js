// Set the target date and time for the countdown
const targetDate = new Date("March 18, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  count = hours + ":" + minutes + ":" + seconds;
  document.getElementById("regbut").textContent = count;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("regbut").textContent = "Register";
  }
}, 1000);
