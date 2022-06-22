import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    
      <Head>
        <title>BLOG | LIFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hhml}>
   
        <h1 className={styles.h1}>
          <Link href="/about">Learn New With Us</Link>
        </h1>
     
      <div className={styles.cont}>
        <div className={styles.para}>
          <h2>Learn html </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            veritatis neque quam, rem laboriosam voluptatum doloremque pariatur
            fugit atque error excepturi dolorem, omnis dolor cum vero
            repellendus sunt ducimus debitis.
            <span className={styles.btn}>
              {" "}
              <Link href="/blogpost/how-to-learn-html"> Read More </Link>
            </span>
          </p>
        </div>

        <div className={styles.para}>
          <h2>Learn c++ </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            veritatis neque quam, rem laboriosam voluptatum doloremque pariatur
            fugit atque error excepturi dolorem, omnis dolor cum vero
            repellendus sunt ducimus debitis.
            <span className={styles.btn}>
              {" "}
              <Link href="/blogpost/how-to-learn-c"> Read More </Link>
            </span>
          </p>
        </div>

        <div className={styles.para}>
          <h2>Learn javascript </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            veritatis neque quam, rem laboriosam voluptatum doloremque pariatur
            fugit atque error excepturi dolorem, omnis dolor cum vero
            repellendus sunt ducimus debitis.
            <span className={styles.btn}>
              {" "}
              <Link href="/blogpost/how-to-learn-javascript"> Read More </Link>
            </span>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}