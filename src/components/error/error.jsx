import * as S from './error.styled';
import {AppRoute} from '../../const';

const ErrorPage = () => (
    <S.Error forwardedAs="main">
      <S.ErrorTitle>404 Страница не найдена</S.ErrorTitle>
      <S.Link to={AppRoute.Home}>Вернуться на главную страницу</S.Link>
    </S.Error>
);

export default ErrorPage;
