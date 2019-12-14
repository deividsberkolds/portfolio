import React from 'react';
// import logo from '../../resources/logo.svg';

// import { GlobalStyle } from '../styled-components/theme/GlobalStyle';
// import { Wrapper } from '../styled-components/Wrapper';
// import { MainImage } from '../styled-components/MainImage';
// import { Paragraph } from '../styled-components/Paragraph';
// import { Header } from '../styled-components/Header';
// import { SmallTitle } from '../styled-components/SmallTitle';
// import { Button } from '../styled-components/Button';
// import { Link } from '../styled-components/Link';

import Header from '../Header';

interface Props {
  env: string;
  version: string;
  increment: () => void;
  switchEnv: (env: string) => void;
}
// TODO: Install https://reactstrap.github.io/ for pages prototypes
// TODO: integration https://reacttraining.com/react-router/web/guides/quick-start
// TODO: create 2 pages `Home` and `About`
// TODO: Use react router and reactstrap to created Pages and navigate between them

const App: React.FC<Props> = ({ env, version, increment, switchEnv }) => {
  const newEnv: string = env === 'development' ? 'PROD' : 'development';

  return (
    <Header />

    // <React.Fragment>
    //   <GlobalStyle />
    //   <Wrapper>
    //     <MainImage src={logo} alt="logo" />
    //     <Header>Learn React</Header>
    //     <Paragraph>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </Paragraph>
    //     <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </Link>
    //     <Paragraph>
    //       <SmallTitle>Version: {version}</SmallTitle>
    //       <Button onClick={increment}>Increment</Button>
    //       <SmallTitle>
    //         Right now you are on <code>{env}</code> environment
    //       </SmallTitle>
    //       <Button onClick={() => switchEnv(newEnv)}>Switch to {newEnv} ?</Button>
    //     </Paragraph>
    //   </Wrapper>
    // </React.Fragment>
  );
};

export default App;
