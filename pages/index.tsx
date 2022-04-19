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
          Welcome to Aamir Suleman's personal testing ground!
        </h1>

        <p className={styles.description}>
          Each page is a experimental piece of work. Check them out!
        </p>

        <div className={styles.grid}>
          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Mapbox &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>

          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Firebase &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>

          <Link href="/ar">
            <a className={styles.card}>
              <h2>AR &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>

          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Planetscale &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>
          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Prisma &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>
          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Tilling Dynamic &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>
          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Three.js &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>
          <Link href="/mapbox">
            <a className={styles.card}>
              <h2>Machine Learning &rarr;</h2>
              <p>Find Mapbox testing paages</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
