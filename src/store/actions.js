import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  ChangeTypeOfGenre: 'type/changeTypeOfGenre',
  LoadQuestsList: 'quests/loadQuestsList',
  LoadQuest: 'quests/loadQuest',
  PostQuestOrder: 'order/postQuestOrder',
}

const changeTypeOfGenre = createAction(
  ActionType.ChangeTypeOfGenre,
  (typeOfGenre) => ({payload: typeOfGenre}),
);

const loadQuestsList = createAction(
  ActionType.LoadQuestsList,
  (quests) => ({payload: quests}),
);

const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({payload: quest}),
);

const postQuestOrder = createAction(
  ActionType.PostQuestOrder,
  (order) => ({payload: order,}),
);

export {changeTypeOfGenre, loadQuestsList, loadQuest, postQuestOrder};
