import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import Error from 'components/error/error';
import Stub from 'components/stub/stub';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/quest">
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path={AppRoute.Stub}>
          <Stub />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
