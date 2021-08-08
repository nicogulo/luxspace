import React from 'react';
import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb';

// import JustArrived from 'parts/HomePage/JustArrived';
// import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Clients from 'parts/Clients';
import SiteMap from 'parts/SiteMap';
import Footer from 'parts/Footer';

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          {
            url: '/',
            name: 'Home',
          },
          {
            url: '/categories/22311',
            name: 'Office Room',
          },
          {
            url: '/categories/22311/product/8121',
            name: 'Details',
          },
        ]}
      />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
