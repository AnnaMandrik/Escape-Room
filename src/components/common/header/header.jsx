import { useDispatch } from 'react-redux';
import { useState } from 'react';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {AppRoute, TypeOfGenre, QUESTS_MENU, menuItems} from 'const';
import { changeTypeOfGenre } from 'store/actions';

const Header = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(QUESTS_MENU);

  const dispatch = useDispatch();
  const handleChangeTypeOfGenre = () => {
    dispatch(changeTypeOfGenre(TypeOfGenre.ALL.type));
  }

  return (<S.StyledHeader>
    <S.HeaderWrapper>
     <S.LogoLink to={AppRoute.Home}>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.LogoLink>

      <S.Navigation>
        <S.Links>
          {menuItems.map((item, index) => {
            const key = `${index}-${item.name}`;

            return (<S.LinkItem key={key}>
              <S.Link $isActiveLink={item.name === selectedMenuItem}
              onClick={() => {
                setSelectedMenuItem(item.name);
                handleChangeTypeOfGenre();
              }}
              to={item.route}
              >
                {item.name}
              </S.Link>
            </S.LinkItem>)
          })}

        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>)
};

export default Header;
