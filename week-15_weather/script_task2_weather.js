// 1. Дата передачи информации о температуре на побережье

const dateInfo = document.querySelector("#temp_date");
const todayDate = new Date();
const todayMonth = todayDate.getMonth();

const monthName =
  todayMonth === 0
    ? "янв"
    : todayMonth === 1
    ? "фев"
    : todayMonth === 2
    ? "мар"
    : todayMonth === 3
    ? "апр"
    : todayMonth === 4
    ? "май"
    : todayMonth === 5
    ? "июн"
    : todayMonth === 6
    ? "июл"
    : todayMonth === 7
    ? "авг"
    : todayMonth === 8
    ? "сен"
    : todayMonth === 9
    ? "окт"
    : todayMonth === 10
    ? "ноя"
    : todayMonth === 11
    ? "дек"
    : "ошибка";

dateInfo.textContent =
  todayDate.getDate() +
  " " +
  monthName +
  " " +
  todayDate.getFullYear() +
  " года";

// 2. Массив с городами и пустой массив для температуры

const cities = [
  {
    name: "Улцинь",
    pic: "./city_ulcinj.jpg",
  },
  {
    name: "Бар",
    pic: "./city_bar.jpg",
  },
  {
    name: "Будва",
    pic: "./city_budva.jpg",
  },
  {
    name: "Тиват",
    pic: "./city_tivat.jpg",
  },
];

temperature = new Array(cities.length);

// 3. Ввод данных по нажатию кнопки, функция

const buttonTempSend = document.getElementById("temp_send");
const cityCardWrapper = document.querySelector(".city_card__wrapper");
const tempMaxWrapper = document.querySelector(".temp_max__wrapper");
const tempMinWrapper = document.querySelector(".temp_min__wrapper");
const tempMax = document.getElementById("temp_max");
const tempMin = document.getElementById("temp_min");

function fillCityCards() {
  // Обнуление карточек при повторном нажатии кнопки
  for (let i = 0; i < cities.length; i++) {
    cityCardWrapper.innerHTML = "";
  }
  for (let i = 0; i < cities.length; i++) {
    let tempInput = prompt(`Введите температуру в городе ${cities[i].name}`);
    temperature[i] = tempInput;
    console.log(temperature[i]);
  }
  console.log(temperature);
  //   Создание карточек городов
  for (let i = 0; i < cities.length; i++) {
    const cityCard = document.createElement("div");
    cityCard.classList.add("city_card");
    cityCardWrapper.append(cityCard);

    const cityPic = document.createElement("img");
    cityPic.src = cities[i].pic;
    cityPic.alt = cities[i].name;
    cityPic.classList.add("city_pic");
    cityCard.prepend(cityPic);

    const cityName = document.createElement("h3");
    cityName.textContent = cities[i].name;
    cityName.classList.add("city_name");
    cityCard.append(cityName);

    const cityTemp = document.createElement("p");
    cityTemp.textContent = "Температура: " + temperature[i] + " °С";
    cityTemp.classList.add("city_temp");
    cityCard.append(cityTemp);
  }
  //   Поиск максимального и минимального значения температуры:
  tempMaxWrapper.classList.remove("hide");
  tempMinWrapper.classList.remove("hide");
  tempMax.textContent = Math.max(...temperature) + " °С";
  tempMin.textContent = Math.min(...temperature) + " °С";
}

buttonTempSend.addEventListener("click", fillCityCards);
