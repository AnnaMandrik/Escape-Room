import {selectGenreOfQuests} from 'utils/util';

const getSelectedTypeOfGenre = (state) => (state.selectedTypeOfGenre);
const getQuestsListByType = (state) => selectGenreOfQuests(state.questsList, state.selectedTypeOfGenre);

export {getSelectedTypeOfGenre, getQuestsListByType};
