const directorFullInfo = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

// Добавила новые элементы с содержимым из массива объектов:
const cardWrapper = document.querySelector(".card_wrapper");

directorFullInfo.forEach(function (card) {
  const cardDirector = document.createElement("div");
  cardDirector.classList.add("card_director");
  cardWrapper.append(cardDirector);

  const directorName = document.createElement("h3");
  directorName.classList.add("director_name");
  directorName.textContent = `${directorFullInfo.indexOf(card) + 1}. ${
    card.name
  }`;
  cardDirector.append(directorName);

  const directorInfo = document.createElement("p");
  directorInfo.classList.add("director_info");
  directorInfo.textContent = card.career;
  cardDirector.append(directorInfo);

  const directorFilmography = document.createElement("a");
  directorFilmography.href = card.films;
  directorFilmography.classList.add("director_filmography");
  directorFilmography.textContent = "Фильмография";
  cardDirector.append(directorFilmography);
});

// Создала отдельный массив с именами и вывела в текстовый элемент через join:
const topFilms = document.querySelector(".film_names");

const filmNames = directorFullInfo.map(function (card) {
  return card.top_rated_film;
});

topFilms.textContent = filmNames.join(", ");
