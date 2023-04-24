import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from 'next'
import Link from "next/link";
import styles from "../styles/Home.module.css";
import logo from '../public/geoent-logo.png'
import {someFunc} from '../pages/api/hello'

async function  delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  console.log('starting a delay')
  const results = await someFunc()//_await delay(3000)
  console.log('finished delay')
  return {
    props: { results },
  }
}

const Home: NextPage = () => {
  const x = 1;
  return (
    <div className={styles.container}>
      <Head>
        <title>GeoEnt</title>
        <meta
          name="description"
          content="Exprimental website by Aamir Suleman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          GeoEnt
        
        </h1> */}
        <Image src={logo} height='30px' alt='GeoEnt Logo' layout='fixed'/>

        <p className={styles.description}>
           Geospatial Solutions for Enterprises
        </p>

      
        <div className={styles.grid}>
          <div>Ashburn, VA</div>
        </div>

      
        <div className={styles.grid}>
          <a href="mailto:info@geoent.com">info@geoent.com</a>
        </div>
      <br/>
        <div className={styles.grid}>
        GeoEnt is a service-oriented company delivering geospatial technology solutions.
        Please contact us for more info.
   </div>

       
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
