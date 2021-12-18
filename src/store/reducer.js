import {createReducer} from '@reduxjs/toolkit';
import {changeTypeOfGenre, loadQuest, loadQuestsList, postQuestOrder} from './actions';
import {TypeOfGenre} from 'const';

const initialState = {
  selectedTypeOfGenre: TypeOfGenre.ALL.type,
  questsList: [],
  quest: {},
  questOrder: {},
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTypeOfGenre, (state, action) => {
      state.selectedTypeOfGenre = action.payload;
    })
    .addCase(loadQuestsList, (state, action) => {
      state.questsList = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
    .addCase(postQuestOrder, (state, action) => {
      state.questOrder = action.payload;
    });
});

export {questsData};
