import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import MapSearch from './pages/mapSearch';
import SearchLoad from './pages/searchLoad/SearchLoad';
import Game2048 from './pages/2048game/Game2048';
import Login from './pages/login';
import OAuthCallback from './pages/login/OauthCallback';
import Grid from './pages/gird/Grid';

function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/mapSearch" element={<MapSearch />} />
          <Route path="/searchLoad" element={<SearchLoad />} />
          <Route path="/game2048" element={<Game2048 />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
