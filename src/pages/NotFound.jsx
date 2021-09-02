import React from 'react';
import Header from 'parts/Header';
// import Breadcrumb from 'components/Breadcrumb';

import SiteMap from 'parts/SiteMap';
import PageErrorMessage from 'parts/PageErrorMessage';
import Footer from 'parts/Footer';

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMessage />
      <SiteMap />
      <Footer />
    </>
  );
}
