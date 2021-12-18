import {APIRoute, STRING_ADDRESS} from 'const';
import {loadQuest, loadQuestsList} from './actions';

const fetchLoadQuestsAction = () =>
  async (dispatch, _getState, api) => {
  const {data} = await api.get(APIRoute.QuestsList);

  dispatch(loadQuestsList(data));
};

const fetchLoadQuestAction = (id) =>
  async (dispatch, _getState, api) => {
  const {data} = await api.get(APIRoute.Quest.replace(STRING_ADDRESS, String(id)));

  dispatch(loadQuest(data));
};

export {fetchLoadQuestsAction, fetchLoadQuestAction};
