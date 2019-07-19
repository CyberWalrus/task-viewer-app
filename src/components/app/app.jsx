import React from 'react';
import Content from '../content/content';
import Header from '../header/header';
import Footer from '../footer/footer';

const App = () => (
  <React.Fragment>
    <Header />
    <main className="page-main">
      <Content />
    </main>
    <Footer />
  </React.Fragment>
);

export default App;
