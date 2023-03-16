import React from 'react';
import { Artwork, Artworks, Home } from './components';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {

  return (
    <div className="App-Routes">
      <Routes>
        <Route path="/" element={ <><Home /></> } />
        <Route path="/artworks" element={ <><Artworks /></> } />
        <Route path="/artworks/artwork/:id" element={ <><Artwork /></> } />
      </Routes>
    </div>
  );
}

export default AppRoutes;