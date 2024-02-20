const button = document.getElementById("form_button");
const alarmNoDate = document.querySelector(".calc_alarm");
let formDate = document.getElementById("form_date");
let currentDate = Date.now();
let result = document.querySelector(".calc_result");

function daysBeforeBirthday() {
  alarmNoDate.textContent = "";
  if (formDate.value == "") {
    alarmNoDate.textContent = "Выберите дату вашего дня рождения";
  } else {
    let birthdayDate = Date.parse(formDate.value);
    let difference =
      Math.floor((birthdayDate - currentDate) / 1000 / 3600 / 24) + 1;
    let ending =
      (difference > 10) & (difference < 20)
        ? " дней"
        : (difference % 100) / 10 == 1
        ? " дней"
        : difference % 10 == 1
        ? " день"
        : difference % 10 == 2
        ? " дня"
        : difference % 10 == 3
        ? " дня"
        : difference % 10 == 4
        ? " дня"
        : " дней";
    let starting = ending == " день" ? "остался " : "осталось ";

    if (difference < 0) {
      alarmNoDate.textContent = "Ваш день рождения в этом году прошёл";
      result.textContent = "";
    } else if (difference == 0) {
      result.textContent = "Ваш День Рождения сегодня!";
    } else {
      result.textContent = starting + difference + ending;
    }
  }
}

button.addEventListener("click", daysBeforeBirthday);
