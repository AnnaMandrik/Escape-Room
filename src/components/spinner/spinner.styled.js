import styled from 'styled-components';
import { Container} from 'components/common/common';

const Spinner = styled(Container)`
  max-width: 1080px;
  margin-top: 300px;
  margin-bottom: 300px;

`;

const SpinnerTitle = styled.h1`
  margin-left: 150px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;


export {Spinner, SpinnerTitle};
