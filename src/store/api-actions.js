import {APIRoute, STRING_ADDRESS} from 'const';
import {loadQuest, loadQuestsList, isDataLoaded} from './actions';

const fetchLoadQuestsListAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.QuestsList);

    dispatch(loadQuestsList(data));
};

const fetchLoadQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    dispatch(isDataLoaded(true));
    try {
      const {data} = await api.get(APIRoute.Quest.replace(STRING_ADDRESS, String(id)));
      dispatch(loadQuest(data));
    } catch {
      dispatch(loadQuest(null));
    }
    dispatch(isDataLoaded(false));
};

export {fetchLoadQuestsListAction, fetchLoadQuestAction};
