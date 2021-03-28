import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Global from './theme/global';


function App() {
  return (
    <React.Fragment>
      <Global/>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
