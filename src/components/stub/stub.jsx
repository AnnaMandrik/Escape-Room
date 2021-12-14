import {PageHeading, MainLayout} from 'components/common/common';
import * as S from './stub.styled';
import {AppRoute} from '../../const';

const StubPage = () => (
  <MainLayout>
    <S.Stub forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.StubTitle>Эта страница не участвует в проекте.
          Приносим свои извинения за неудобства!</S.StubTitle>
      <S.Link to={AppRoute.Home}>Просим вернуться на главную страницу</S.Link>
    </S.Stub>
  </MainLayout>

);

export default StubPage;


