import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  ROUTE_DC_PAGE,
  ROUTE_HERO_PAGE_ID,
  ROUTE_MARVEL_PAGE,
  ROUTE_SEARCH_PAGE,
} from '../../router';
import { DcPage, HeroPage, MarvelPage, SearchPage } from './../../heroes';
import { Navbar } from '../../ui/';

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path={ROUTE_MARVEL_PAGE} element={<MarvelPage />} />
          <Route path={ROUTE_DC_PAGE} element={<DcPage />} />
          <Route path={ROUTE_SEARCH_PAGE} element={<SearchPage />} />
          <Route path={ROUTE_HERO_PAGE_ID} element={<HeroPage />} />

          {/* Default path */}
          <Route path='/' element={<Navigate to={ROUTE_MARVEL_PAGE} />} />
        </Routes>
      </div>
    </>
  );
};
