import {selectGenreOfQuests} from 'utils/util';


const getSelectedMenuItem = (state) => state.selectedMenuItem;
const getSelectedTypeOfGenre = (state) => state.selectedTypeOfGenre;
const getQuestsListByType = (state) => selectGenreOfQuests(state.questsList, state.selectedTypeOfGenre);
const getSelectedQuest = (state) => state.quest;
const getLoadedData = (state) => state.isDataLoaded;


export {getLoadedData, getSelectedQuest, getSelectedTypeOfGenre, getQuestsListByType, getSelectedMenuItem};
