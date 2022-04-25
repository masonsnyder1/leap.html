var date = new Date();
console.log(date);

/* rusty on js...shouldn't the date var be *in* the function
** scoping/global?  I though global vars were frowned upon
*/

// Function Calendar
function calendar() {
  var month = date.getMonth();
  console.log(`var month is: ${month}`);
  const yyyy = date.getFullYear();
  console.log(`var yyyy is: ${yyyy}`);

  // set the date to the first of the month on this var
  date.setDate(1);

  const name_Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const day_Week = [0, 1, 2, 3, 4, 5, 6];
  var month_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log(`var lastDay is: ${lastDay}`);

  //last date of the previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(`var prevLastDay is: ${prevLastDay}`);

  //first day of the current month
  const firstDayIndex = date.getDay();
  console.log(`var firstDayIndex is: ${firstDayIndex}`);

  //last day of the week
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log(`var lastDayIndex is: ${lastDayIndex}`);

  // To start from the first day of the week
  const nextDays = 7 - lastDayIndex - 1;
  console.log(`var nextDays is: ${nextDays}`);

  // display name of the month and year

  /* this should find the first element in the document with class `monthname` */

  const nameofmonth = document.querySelector(".monthname");
  console.log(`const nameofmonth is: ${nameofmonth} from querySelector`)
  for (var n = 0; n <= 11; n++) {
    if (month_number[n] === month) {
      nameofmonth.innerHTML = `<div><h1>${namesMonth[month]} ${yyyy}</h1></div>`;
    }
  }

  //display name of week days
  const nameofdays = document.querySelector(".calendar-weekDays");
  console.log(`const nameofdays is: ${nameofdays}`)
  console.log("using javascript + nameofdays var + div to write days")
  let nod = "";
  for (var j = 0; j <= 6; j++) {
    nod += `<div class="weekdays">${name_Days[j]}</div>`;
  }
  console.log(`nod is: ${nod}`)
  nameofdays.innerHTML = nod;

  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  const displayDays = document.querySelector(".calendar-monthDays");
  console.log(`const displayDays is: ${displayDays}`)

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div>${i}</div>`;
      displayDays.innerHTML = days;
    } else {
      days += `<div>${i}</div>`;
      displayDays.innerHTML = days;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
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
