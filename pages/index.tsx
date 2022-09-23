import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import logo from '../public/geoent-logo.png'

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
        Experts in fulfilling international Electrical Supply needs
        </p>

        <div className={styles.grid}>
          <div>Aamir Suleman</div>
        </div>
        <div className={styles.grid}>
          <div>Ashburn, VA</div>
        </div>

        <div className={styles.grid}>
          <a href="tel:+1-202-560-3930">+1-202-560-3930</a>
        </div>
        <div className={styles.grid}>
          <a href="mailto:aamir.suleman@geoent.com">aamir.suleman@geoent.com</a>
        </div>
      <br/>
        <div className={styles.grid}>
        GeoEnt is a service-oriented export trading company delivering international companies electrical supplies for their markets.

Through comprehensive business relationships worldwide, GeoEnt has developed a strong allinace with several businesses. Our established clientele are invaluable assets for our business, and deservedly receive top-notch customer service from my dedicated team. 
   </div>

       
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
