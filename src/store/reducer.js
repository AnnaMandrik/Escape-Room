import {createReducer} from '@reduxjs/toolkit';
import {isDataLoaded, changeTypeOfGenre, loadQuest, loadQuestsList, changeMenuItem} from './actions';
import {TypeOfGenre, MenuItems} from 'const';

const initialState = {
  menuItem: MenuItems.QUESTS.name,
  selectedTypeOfGenre: TypeOfGenre.ALL.type,
  questsList: [],
  quest: null,
  isDataLoaded: true,
};

const questsData = createReducer(initialState, (builder) => {
  builder
  .addCase(changeMenuItem, (state, action) => {
    state.selectedMenuItem = action.payload;
    state.selectedTypeOfGenre = TypeOfGenre.ALL.type;
  })
    .addCase(changeTypeOfGenre, (state, action) => {
      state.selectedTypeOfGenre = action.payload;
    })
    .addCase(loadQuestsList, (state, action) => {
      state.questsList = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
    .addCase(isDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
});

export {questsData};
