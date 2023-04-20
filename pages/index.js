import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A coin-app Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Coin-App</title>
      </Head>
      <main className={styles.main}>
        Hello World! How are we starting Dev-Sardius? 😁
        Don't mind me, lemme commit this so I can get more greens on my profile😂
      </main>
    </>
  )
}