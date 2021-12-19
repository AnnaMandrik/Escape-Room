import {APIRoute, STRING_ADDRESS} from 'const';
import {loadQuest, loadQuestsList, isDataLoaded} from './actions';

const fetchLoadQuestsListAction = () =>
  async (dispatch, _getState, api) => {
    dispatch(isDataLoaded(true));
    try {
      const {data} = await api.get(APIRoute.QuestsList);
      dispatch(loadQuestsList(data));
    } catch {
      dispatch(loadQuestsList([]));
    }
    dispatch(isDataLoaded(false));
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

const postOrderAction = ({name, peopleCount, phone, isLegal}, onSuccess, onError) =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(APIRoute.Order, {name, peopleCount, phone, isLegal});
        onSuccess();

    } catch (error) {
      onError();
      console.error(error);
    }
  }


export {fetchLoadQuestsListAction, fetchLoadQuestAction, postOrderAction};
