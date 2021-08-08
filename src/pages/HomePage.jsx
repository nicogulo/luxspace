import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/HomePage/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Clients from 'parts/Clients';
import SiteMap from 'parts/SiteMap';

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
    </>
  );
}
