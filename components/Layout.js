import React from 'react'
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, seo, menu, pageTitle }) {
  return (
    <div className="site">
      <Head>
        <title>My SliceZon Text</title>
        <meta name="description" content="Just experimenting to see how fast it is"></meta>
      </Head>
      <Header menu={menu} />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}
