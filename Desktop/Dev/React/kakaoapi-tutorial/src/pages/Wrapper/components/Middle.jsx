import React from 'react';
import Contents from './Contents';
import LeftMenu from './LeftMenu';

export default function Middle({ children }) {
  return (
    <div
      style={{
        // border: '1px solid black',
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <LeftMenu />
      <Contents>{children}</Contents>
    </div>
  );
}
