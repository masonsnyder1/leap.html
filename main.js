var date = new Date();

// Function Calendar
function calendar() {
  const month = date.getMonth();
  const yyyy = date.getFullYear();

  // set the date to the first of the month on this var
  date.setDate(1);

  // Get the current date only once; previous code had 1 new date call of each day of month
  const $curDay = new Date()
  const name_Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const day_Week = [0, 1, 2, 3, 4, 5, 6];
  const month_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const namesMonth = [
    "January",
    "Febuary",
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

  // Last date of the current month
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  //last date of the previous month
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  //first day of the current month
  const firstDayIndex = date.getDay();

  //last day of the week
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  // To start from the first day of the week
  const nextDays = 7 - lastDayIndex - 1;

  // display name of the month and year
  // this should find the first element in the document with class `monthname` */
  const nameofmonth = document.querySelector(".monthname");
  console.log(`const nameofmonth is: ${nameofmonth} from querySelector`)
  for (var n = 0; n <= 11; n++) {
    if (month_number[n] === month) {
      nameofmonth.innerHTML = `<div>${namesMonth[month]} ${yyyy}</div>`;
    }
  }

  //display name of week days
  const nameofdays = document.querySelector(".calendar-dayNames");
  console.log(`const nameofdays is: ${nameofdays}`)
  let nod = "";
  for (var j = 0; j <= 6; j++) {
    nod += `<div>${name_Days[j]}</div>`;
  }
  nameofdays.innerHTML = nod;

  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prevDate">${prevLastDay - x + 1}</div>`;
  }

  const displayDays = document.querySelector(".calendar-dayNumbers");
  console.log(`const displayDays is: ${displayDays}`)

  for (let i = 1; i <= lastDay; i++) {
    if (i === $curDay.getDate() && month === $curDay.getMonth() && yyyy === $curDay.getFullYear()) {
      days += `<div class="curDate">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  displayDays.innerHTML = days;

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="futureDate">${j}</div>`;
    displayDays.innerHTML = days;
  }
}

calendar();
//prev month

const prev_btn = document.querySelector(".prevMonth");
prev_btn.addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  calendar();
})

//next month
const next_btn = document.querySelector(".nextMonth");
next_btn.addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  calendar();
})
