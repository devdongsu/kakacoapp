import React from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';

export default function Wrapper({ children }) {
  return (
    <div>
      <div
        style={{
          // height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Middle>{children}</Middle>
        <Footer />
      </div>
    </div>
  );
}
