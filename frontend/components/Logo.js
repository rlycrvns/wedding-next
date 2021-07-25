import styled from 'styled-components';
import LogoSVG from '../assets/svgs/logo-paths.svg';

const LogoStyles = styled.div`
  font-size: 0.8rem;
  width: 20em;
  height: 20em;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <LogoSVG />
    </LogoStyles>
  );
}
