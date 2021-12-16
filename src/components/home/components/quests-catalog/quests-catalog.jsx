import { useState } from 'react';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {questsList} from 'utils/mock';
import {createLevelOfDifficulty, getIcon, selectGenreOfQuests} from 'utils/util';
import {STRING_ADDRESS, PEOPLE_COUNTER_MIN, PEOPLE_COUNTER_MAX, typeOfGenre, listOfGenres, AppRoute} from 'const';


const QuestsCatalog = () => {
  const [currentGenre, setCurrentGenre] = useState(typeOfGenre.ALL.type)
  const genreQuests = selectGenreOfQuests(questsList,currentGenre);

  return (
    <>
    <S.Tabs>
    {listOfGenres.map((genre, index) => {
      const key = `${index}-${genre.type}`;
      return <S.TabItem key={key}>
          <S.TabBtn isActive={currentGenre === genre.type}
                   onClick={() => setCurrentGenre(genre.type)}
          >
            {getIcon(genre.type)}
            <S.TabTitle>{genre.name}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
    })}
    </S.Tabs>

    <S.QuestsList>
    {genreQuests.map((quest) => {
      return <S.QuestItem key={quest.id}>
        <S.QuestItemLink to={AppRoute.DetailedQuest.replace(STRING_ADDRESS, String(quest.id))}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={`квест ${quest.title}`}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {`${quest.peopleCount[PEOPLE_COUNTER_MIN]}-${quest.peopleCount[PEOPLE_COUNTER_MAX]} чел`}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {createLevelOfDifficulty(quest.level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

    })}
    </S.QuestsList>
  </>
);
};

export default QuestsCatalog;
