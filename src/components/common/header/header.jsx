import { useDispatch, useSelector } from 'react-redux';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {AppRoute, menuItems, MenuItems} from 'const';
import {changeMenuItem} from 'store/actions';
import {getSelectedMenuItem} from 'store/selectors';

const Header = () => {

  const selectedMenuItem = useSelector(getSelectedMenuItem);

  const dispatch = useDispatch();
  const handleMenuItemChange = (item) => {
    dispatch(changeMenuItem(item));
  }

  return (<S.StyledHeader>
    <S.HeaderWrapper>
     <S.Logo href={(selectedMenuItem !== MenuItems.QUESTS.name) ? AppRoute.Home : undefined}>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          {menuItems.map((item, index) => {
            const key = `${index}-${item.name}`;

            return (<S.LinkItem key={key}>
              <S.Link $isActiveLink={item.name === selectedMenuItem}
              onClick={() => {
                handleMenuItemChange(item.name);
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
