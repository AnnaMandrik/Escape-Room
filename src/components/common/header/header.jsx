import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {AppRoute} from 'const';

const Header = () => (
  <S.StyledHeader>
    <S.HeaderWrapper>
     <S.LogoLink to={AppRoute.Home}>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.LogoLink>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink to={AppRoute.Home}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Stub}>Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Stub}>Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Stub}>Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.Contacts}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
