import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import * as S from './contacts.styled';
import {changeMenuItem} from 'store/actions';
import {MenuItems} from 'const';
import 'leaflet/dist/leaflet.css';
import Map from './map/map';

const Contacts = () => {

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const dispatch = useDispatch();
  dispatch(changeMenuItem(MenuItems.CONTACTS.name));

  return (<MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адрес</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                Санкт-Петербург,
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Режим работы</S.ContactTitle>
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          <Map onLoaded={setIsMapLoaded}/>
          {!isMapLoaded && <S.ContactsMapImage
              alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              width="649"
              height="336"
          />}
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>)
};

export default Contacts;
