import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {createAPI}  from 'services/api';
import {fetchLoadQuestsAction} from 'store/api-actions';
import {questsData} from 'store/reducer';
import App from 'components/app/app';

const api = createAPI();

const store = configureStore({
  reducer: questsData,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}),
});

store.dispatch(fetchLoadQuestsAction());


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));



