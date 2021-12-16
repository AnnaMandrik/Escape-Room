const STRING_ADDRESS = ':id';
const PEOPLE_COUNTER_MIN = 0;
const PEOPLE_COUNTER_MAX = 1;
const DEFAULT_MENU = 'Квесты';

const AppRoute = {
  Home: '/',
  DetailedQuest: '/detailed-quest/:id',
  Contacts: '/contacts',
  Stub: '/stub',
  }


const levelOfDifficulty = {
  EASY: {
    name: "easy",
    value: "простой",
  },
  MIDDLE: {
    name: "middle",
    value: "средний",
  },
  HARD: {
    name: "hard",
    value: "сложный",
  },
  UNDEFINED: {
    name: "undefined",
    value: "не определен",
  },
}


const typeOfGenre = {
  ALL: {
    type: 'all',
    name: 'Все квесты',
  },
  ADVENTURES: {
    type: 'adventures',
    name: 'Приключения',
  },
  HORROR: {
    type: 'horror',
    name: 'Ужасы',
  },
  MYSTIC: {
    type: 'mystic',
    name: 'Мистика',
  },
  DETECTIVE: {
    type: 'detective',
    name: 'Детектив',
  },
  SCI_FI: {
    type: 'sci-fi',
    name: 'Sci-fi',
  },
}

const listOfGenres = [typeOfGenre.ALL, typeOfGenre.ADVENTURES, typeOfGenre.HORROR, typeOfGenre.MYSTIC, typeOfGenre.DETECTIVE, typeOfGenre.SCI_FI];


export {STRING_ADDRESS, listOfGenres, typeOfGenre, AppRoute, levelOfDifficulty,
   PEOPLE_COUNTER_MIN, PEOPLE_COUNTER_MAX, DEFAULT_MENU};
