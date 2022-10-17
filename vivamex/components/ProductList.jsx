import styles from "../styles/ProductList.module.css";
import ProductCart from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container} >
        <h1 className={styles.title} > Los Mejores dorilocos del Ecuador </h1>
            <p className={styles.desc} >
            Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, 
            </p>
        <div className={styles.wrapper} >
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            
           
        </div>
    </div>
  )
}

export default ProductList