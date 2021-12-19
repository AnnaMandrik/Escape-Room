import {LevelOfDifficulty, TypeOfGenre, PeopleCounter} from 'const';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const createLevelOfDifficulty = (level) => {
 switch(level) {
    case LevelOfDifficulty.EASY.name:
      return LevelOfDifficulty.EASY.value;
    case LevelOfDifficulty.MIDDLE.name:
      return LevelOfDifficulty.MIDDLE.value;
    case LevelOfDifficulty.HARD.name:
      return LevelOfDifficulty.HARD.value;
    default:
      return LevelOfDifficulty.UNDEFINED.value;
 }
}

const getIcon = (type) => {
  switch (type) {
    case TypeOfGenre.SCI_FI.type:
      return <IconScifi />
    case TypeOfGenre.ADVENTURES.type:
      return <IconAdventures />
    case TypeOfGenre.DETECTIVE.type:
      return <IconDetective />
    case TypeOfGenre.HORROR.type:
      return <IconHorrors />
    case TypeOfGenre.MYSTIC.type:
      return <IconMystic />
    default:
      return <IconAllQuests />
  }
}

const createTypeOfGenre = (type) => {
  switch (type) {
    case TypeOfGenre.ADVENTURES.type:
      return TypeOfGenre.ADVENTURES.name;
    case TypeOfGenre.HORROR.type:
      return TypeOfGenre.HORROR.name;
    case TypeOfGenre.MYSTIC.type:
      return TypeOfGenre.MYSTIC.name;
    case TypeOfGenre.DETECTIVE.type:
      return TypeOfGenre.DETECTIVE.name;
    case TypeOfGenre.SCI_FI.type:
      return TypeOfGenre.SCI_FI.name;
    default:
      return TypeOfGenre.ALL.name;
  }
};

const selectGenreOfQuests = (quests, type) => (type === TypeOfGenre.ALL.type) ? quests : quests.filter((quest) => quest.type === type);

const isEscEvent = (callback) => {
  return (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      callback(false);
    }
  };
};

const createPeopleCount = (peopleCount) => `${peopleCount[PeopleCounter.min]}–${peopleCount[PeopleCounter.max]} чел`;


export {createLevelOfDifficulty, getIcon, selectGenreOfQuests, createTypeOfGenre, isEscEvent, createPeopleCount};

