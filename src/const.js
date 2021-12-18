const STRING_ADDRESS = ':id';
const PEOPLE_COUNTER_MIN = 0;
const PEOPLE_COUNTER_MAX = 1;
// const QUESTS_MENU = 'Квесты';

const AppRoute = {
  Home: '/',
  DetailedQuest: '/detailed-quest/:id',
  Contacts: '/contacts',
  Stub: '/stub',
  }

const APIRoute = {
  QuestsList: '/quests',
  Quest: '/quests/:id',
  Order: '/orders',
}

const LevelOfDifficulty = {
  EASY: {
    name: "easy",
    value: "простой",
  },
  MIDDLE: {
    name: "medium",
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

const TypeOfGenre = {
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

const MenuItems = {
  QUESTS: {
    name: 'Квесты',
    route: AppRoute.Home,
  },
  BEGINNERS: {
    name: 'Новичкам',
    route: AppRoute.Stub,
  },
  REVIEWS: {
    name: 'Отзывы',
    route: AppRoute.Stub,
  },
  PROMO: {
    name: 'Акции',
    route: AppRoute.Stub,
  },
  CONTACTS: {
    name: 'Контакты',
    route: AppRoute.Contacts,
  },
};

const listOfGenres = [TypeOfGenre.ALL, TypeOfGenre.ADVENTURES, TypeOfGenre.HORROR, TypeOfGenre.MYSTIC, TypeOfGenre.DETECTIVE, TypeOfGenre.SCI_FI];
const menuItems = [MenuItems.QUESTS, MenuItems.BEGINNERS, MenuItems.REVIEWS, MenuItems.PROMO, MenuItems.CONTACTS];

export {STRING_ADDRESS, listOfGenres, TypeOfGenre, AppRoute, LevelOfDifficulty,
   PEOPLE_COUNTER_MIN, PEOPLE_COUNTER_MAX, APIRoute, MenuItems, menuItems};
