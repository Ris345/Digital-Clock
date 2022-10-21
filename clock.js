runClock();

function runClock() {
  setInterval(() => {
    const date = getDate();
    const time = getTime();
    updateDisplay(date, time);
  }, 250);
}

function updateDisplay(date, time) {
  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}

function getTime() {
  const currentTime = new Date();
  let meridiem = getMeridiem(currentTime.getHours());
  minutes = appendZeroIfNeeded(currentTime.getMinutes());
  seconds = appendZeroIfNeeded(currentTime.getSeconds());
  hour = converTo12Clock(currentTime.getHours());

  return `${hour}:  ${minutes}: ${seconds} ${meridiem}`;
}

function getDate() {
  const currentTime = new Date();
  let date = currentTime.getDate();
  let day = currentTime.getDay();
  let month = currentTime.getMonth();
  const year = currentTime.getFullYear();

  day = getDayName(day);
  month = getMonthName(month);
  date = dateWithSuffix(date);

  return `${day},  ${month} ${date} ${year}`;
}

function getMeridiem(hour) {
  return hour < 12 ? "AM" : "PM";
}

function appendZeroIfNeeded(num) {
  return num < 10 ? `0${num}` : num;
}

function converTo12Clock(hour) {
  return hour > 12 ? hour - 12 : hour;
}

function getMonthName(idx) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[idx];
}

function getDayName(idx) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[idx];
}

function dateWithSuffix(date) {
  if (date === 1 || date === 21 || date === 31) date += "st";
  else if (date === 2 || date === 22) date += "nd";
  else if (date === 3 || date === 23) date += "rd";
  else date += "th";
  return date;
}
