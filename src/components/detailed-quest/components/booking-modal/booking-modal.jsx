import {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {isEscEvent} from 'utils/util';
import {postOrderAction} from 'store/api-actions';
import {SUCCESS_MESSAGE, ERROR_MESSAGE, BASIS_VALUE} from 'const';


const BookingModal = ({onCloseEvent}) => {

  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const peopleCountRef = useRef(null);
  const isLegalRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', isEscEvent(onCloseEvent), false);

    return () => {
      document.removeEventListener('keydown', isEscEvent(onCloseEvent), false);
    };
  }, [onCloseEvent]);

  const onSuccess = () => {
    setIsSending(true);
    onCloseEvent(false);
    toast.success(SUCCESS_MESSAGE);
  };

  const onError = () => {
    setIsSending(false);
    toast.error(ERROR_MESSAGE);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postOrderAction(
      {
      name: nameRef.current.value,
      peopleCount: Number(peopleCountRef.current.value, BASIS_VALUE),
      phone: phoneRef.current.value,
      isLegal: isLegalRef.current.checked,
    }, onSuccess, onError),
    );
  };


  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn>
        <IconClose width="16" height="16" onClick={() => onCloseEvent(false)}/>
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
       onSubmit={handleFormSubmit}
        method="post"
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={nameRef}
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={phoneRef}
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            maxLength="10"
            minLength="10"
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            disabled={isSending}
            ref={peopleCountRef}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit" disabled={isSending}>Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            disabled={isSending}
            ref={isLegalRef}
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;
