import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import ProgressBar from "../components/Common/ProgressBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Progress Bar</title>
        <meta name="description" content="Progress Bar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProgressBar percent={0} onTop autoIncrement />
      </main>
    </div>
  );
};

export default Home;
