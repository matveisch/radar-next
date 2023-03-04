import Head from 'next/head';
import React from 'react';
import Bubbles from '../../sections/bubbles';
import Bubble from '../../ui/bubble';
function Lab() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Lab</div>
      {/* <Bubbles /> */}
      <Bubble />
    </div>
  );
}

export default Lab;
