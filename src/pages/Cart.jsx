import React from 'react';
import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb';

import ShippingDetails from 'parts/Cart/ShippingDetails';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import Suggestion from 'parts/Details/Suggestion';

import SiteMap from 'parts/SiteMap';
import Footer from 'parts/Footer';

export default function Cart() {
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
            url: '/cart',
            name: 'Shopping Cart',
          },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Suggestion />

      <SiteMap />
      <Footer />
    </>
  );
}
