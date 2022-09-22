import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
        <h1 className={styles.title}>
          GeoEnt
        </h1>

        <p className={styles.description}>
        We Make Things Happen
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
        GeoEnt has entered the supply market in the new era. It is our goal to provide our customers with quality products at competitive prices, backed by the highest level of commitment and service available in the industry.

      GeoEnt realizes that our ultimate success is dependent on client satisfaction. Here at GeoEnt we provide a broad range of electrical products for construction, commercial, industrial, and residential markets. We are committed to total client satisfaction by
      meeting or exceeding expectations for quality, delivery, and friendly knowledgeable customer service. Our vision is to be your number one source for all your electrical supply and installation needs. We are faster, easier, and more profitable for you to do business with than our competitors. Every aspect of our on going business strategies will be aimed at accomplishing this vision. We can provide a solution by taking up projects on a turnkey installation contract basis giving you a price advantage by saving you substantial money and procuring the exact quantity.
        </div>

       
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
