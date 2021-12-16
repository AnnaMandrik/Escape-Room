import {levelOfDifficulty, typeOfGenre} from 'const';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const createLevelOfDifficulty = (level) => {
 switch(level) {
    case levelOfDifficulty.EASY.name:
      return levelOfDifficulty.EASY.value;
    case levelOfDifficulty.MIDDLE.name:
      return levelOfDifficulty.MIDDLE.value;
    case levelOfDifficulty.HARD.name:
      return levelOfDifficulty.HARD.value;
    default:
      return levelOfDifficulty.UNDEFINED.value;
 }
}

const getIcon = (type) => {
  switch (type) {
    case typeOfGenre.SCI_FI.type:
      return <IconScifi />
    case typeOfGenre.ADVENTURES.type:
      return <IconAdventures />
    case typeOfGenre.DETECTIVE.type:
      return <IconDetective />
    case typeOfGenre.HORROR.type:
      return <IconHorrors />
    case typeOfGenre.MYSTIC.type:
      return <IconMystic />
    default:
      return <IconAllQuests />
  }
}

const createTypeOfGenre = (type) => {
  switch (type) {
    case typeOfGenre.ADVENTURES.type:
      return typeOfGenre.ADVENTURES.name;
    case typeOfGenre.HORROR.type:
      return typeOfGenre.HORROR.name;
    case typeOfGenre.MYSTIC.type:
      return typeOfGenre.MYSTIC.name;
    case typeOfGenre.DETECTIVE.type:
      return typeOfGenre.DETECTIVE.name;
    case typeOfGenre.SCI_FI.type:
      return typeOfGenre.SCI_FI.name;
    default:
      return typeOfGenre.ALL.name;
  }
};

const selectGenreOfQuests = (quests, type) => (type === typeOfGenre.ALL.type) ? quests : quests.filter((quest) => quest.type === type);

export {createLevelOfDifficulty, getIcon, selectGenreOfQuests, createTypeOfGenre};
