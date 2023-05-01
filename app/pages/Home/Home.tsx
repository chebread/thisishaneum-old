import { IntroPanel } from 'pages/Home/panels';
import styled from 'styled-components';

const Home = () => {
  return (
    <MainFrame>
      <IntroPanel />
    </MainFrame>
  );
};

const MainFrame = styled.div`
  // main frame
  position: relative;
  height: 100%;
`;

export default Home;
