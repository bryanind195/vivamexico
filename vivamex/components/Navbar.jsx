import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container} >
        <div className={styles.item} > 
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts} > 
            <div className={styles.text} > ORDER NOW!!! </div>
            <div className={styles.text} > 099256944 </div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list} >
            <li className= {styles.listItem} >Principal </li>
            <li className= {styles.listItem} >Productos </li>
            <li className= {styles.listItem} >Menú </li>
            <Image src= "/img/letrasnav.svg" alt="imagen del navbar" width="200px" height="100px"/>
            <li className= {styles.listItem} >Eventos </li>
            <li className= {styles.listItem} >Blog </li>
            <li className= {styles.listItem} >Contacto </li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart} >
            <Image src= "/img/cart.png" alt="" width="30px" height="30px"/>
            <div className={styles.counter} >2</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar