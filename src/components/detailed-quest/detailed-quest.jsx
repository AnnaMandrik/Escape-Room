import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import ErrorPage from 'components/error/error';
import Spinner from 'components/spinner/spinner';
import {fetchLoadQuestAction} from 'store/api-actions';
import {getSelectedQuest, getLoadedData} from 'store/selectors';
import {createTypeOfGenre, createLevelOfDifficulty, createPeopleCount} from 'utils/util';

const DetailedQuest = ({currentId}) => {

  const selectedQuest = useSelector(getSelectedQuest);
  const isLoaded = useSelector(getLoadedData);
  const dispatch = useDispatch();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  useEffect(() => {
    dispatch(fetchLoadQuestAction(currentId))
  }, [currentId, dispatch]);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  if (isLoaded) {
    return <Spinner />;
  }

  if (!selectedQuest) {
    return <ErrorPage />;
  }

  const {title, description, coverImg, type, level, peopleCount, duration } = selectedQuest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{createTypeOfGenre(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{createPeopleCount(peopleCount)}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{createLevelOfDifficulty(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseEvent={setIsBookingModalOpened} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
