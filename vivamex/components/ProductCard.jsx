import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container} >
      <Image src="/img/AGUA FRESCA MOLECULAR.jpg" alt="500" width="500" height="500" />
      <h1 className={styles.title} > Maruloco </h1>
      <span className={styles.price}> $3.50</span>
            <p className={styles.desc} >
            Lorem Ipsum es simplemente un texto ficticio de la industria 
            </p>
    </div>
  )
}

export default ProductCard