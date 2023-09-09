import { FullScreen } from 'layouts/Screens';
import { IntroPanel } from 'pages/Home/panels';
import styled from 'styled-components';

const Home = () => {
  return (
    <MainFrame>
      <Container></Container>
    </MainFrame>
  );
};

const Container = styled(FullScreen)``;
const MainFrame = styled.div`
  // main frame
  position: relative;
  height: 100%;
`;

export default Home;
