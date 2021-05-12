import Head from 'next/head';
import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main style={{ height: '100%', width: '100%', padding: '5px 0 60px' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
