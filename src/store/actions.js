import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  ChangeMenuItem: 'menu/changeMenuItem',
  ChangeTypeOfGenre: 'type/changeTypeOfGenre',
  LoadQuestsList: 'quests/loadQuestsList',
  LoadQuest: 'quests/loadQuest',
  PostQuestOrder: 'order/postQuestOrder',
  IsDataLoaded: 'quests/isDataLoaded',
}

const changeMenuItem = createAction(
  ActionType.ChangeMenuItem,
  (item) => ({payload: item}),
);

const changeTypeOfGenre = createAction(
  ActionType.ChangeTypeOfGenre,
  (type) => ({payload: type}),
);

const loadQuestsList = createAction(
  ActionType.LoadQuestsList,
  (quests) => ({payload: quests}),
);

const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({payload: quest}),
);

const isDataLoaded = createAction(
  ActionType.IsDataLoaded,
  (status) => ({payload: status}),
);

const postQuestOrder = createAction(
  ActionType.PostQuestOrder,
  (order) => ({payload: order,}),
);

export {isDataLoaded, changeTypeOfGenre, loadQuestsList, loadQuest, postQuestOrder, changeMenuItem};
