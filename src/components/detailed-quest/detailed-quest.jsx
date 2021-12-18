import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import {questsList} from 'utils/mock';
import {createTypeOfGenre, createLevelOfDifficulty} from 'utils/util';
import {PEOPLE_COUNTER_MIN, PEOPLE_COUNTER_MAX} from 'const';

const DetailedQuest = ({currentId}) => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const currentQuest = questsList.filter((quest) => quest.id === currentId)[0];

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={currentQuest.coverImg}
          alt={`Квест ${currentQuest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest.title}</S.PageTitle>
            <S.PageSubtitle>{createTypeOfGenre(currentQuest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{currentQuest.duration}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${currentQuest.peopleCount[PEOPLE_COUNTER_MIN]}-${currentQuest.peopleCount[PEOPLE_COUNTER_MAX]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{createLevelOfDifficulty(currentQuest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {currentQuest.description}
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
