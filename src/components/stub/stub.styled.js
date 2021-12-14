import styled from 'styled-components';
import { Container, Link as RouterLink } from 'components/common/common';

const Stub = styled(Container)`
  max-width: 1080px;
  margin-top: 200px;
  margin-bottom: 20px;

`;

const StubTitle = styled.h1`
  margin-left: 150px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

const Link = styled(RouterLink)`
  display: inline;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;
  padding: 150px;
  margin: 200px;

  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export { Stub, Link, StubTitle };
