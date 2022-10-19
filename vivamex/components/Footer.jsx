import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
      <div className={styles.container} >
        <div className={styles.item}>
          <Image src="/img/bg.png" objectFit="cover" layout= "fill" alt=""/>
        </div>
        <div className={styles.item} >
          <div className={styles.card}>
            <h2 className={styles.motto}>
              Ven y prueba los ricos y delicioso productos de Viva Mexico Tumbaco , no te los puedes perder....!!
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title} > Encuentra Nuestro Local</h1>
            <p className={styles.text}>
              Tumbaco , Parque Central #304.
                <br /> Quito , 09086
                <br/> (044) 245-445
            </p>
            <p className={styles.text}>
              Tumbaco , Parque Central #304.
                <br /> Quito , 09086
                <br/> (044) 245-445
            </p>
            <p className={styles.text}>
              Tumbaco , Parque Central #304.
                <br /> Quito , 09086
                <br/> (044) 245-445
            </p>
            <p className={styles.text}>
              Tumbaco , Parque Central #304.
                <br /> Quito , 09086
                <br/> (044) 245-445
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title} > HORARIO DE ATENCION</h1>
            <p className={styles.text} >
              LUNES A Viernes
              <br/> 11:00 - 20:00
            </p>
            <p className= {styles.text}>
              Sabado y Domingo 
              <br/> 12:00 - 19:00
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;