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

const postOrderAction = (orderData, onSuccess, onFail, setIsChecked) =>
  async (dispatch, _getState, api) => {
    try {
      setIsChecked(true);
      await api.post(APIRoute.Order, orderData);
      onSuccess();
    } catch (error) {
      onFail();
      throw (error);
    }
  }


export {fetchLoadQuestsListAction, fetchLoadQuestAction, postOrderAction};
