import Head from 'next/head';
import Image from 'next/image';
import Featured from "../components/Featured";
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viva_Mex_Tumbaco</title>
        <meta name="description" content="Refresqueria" />
        <link rel="icon" href="/vivam_ico.ico" />
      </Head>
      <Featured/>
      <ProductList/>
      

      
    </div>
  )
}
