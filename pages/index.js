import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from '../src/components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudWeb4 - التخزين السحابي اللامركزي</title>
        <meta name="description" content="منصة التخزين السحابي اللامركزي" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
