import classes from "./TableProduct.module.css";
import starImg from "../../../img/searchPage/star.svg";
import FavButton from "../Fav button/FavButton";
import { useNavigate } from "react-router-dom";
interface TableProductProps {
  product: Product;
}

interface Product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  cacheL2: number;
  cacheL3: number;
  img: string;
}

const TableProduct: React.FC<TableProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const handlePurchaseClick = (productId: number) => {
    console.log("Navigating to product:", productId);
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className={classes.result}
      onClick={() => handlePurchaseClick(product.id)}
    >
      <div className={classes.result__product_image}>
        <img src={product.img} alt="product img" />
      </div>

      <div className={classes.result_description}>
        <h3 className={classes.product_info}>
          {product.cpuName} <br />[{product.socket}, {product.coresNumber} x{" "}
          {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
          {product.cacheL3} МБ]
        </h3>
        <div className={classes.purchase}>
          <h2>{product.price}</h2>

          <button
            className={classes.purchase_button}
            onClick={() => handlePurchaseClick(product.id)}
          >
            <h3>Купить</h3>
          </button>

          <FavButton favStyle="mainPageStyle" id={product.id} />
        </div>

        <div className={classes.product_subInfo}>
          <div className={classes.stars}>
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <img src={starImg} alt="rating img" />
            <h4>10</h4>
          </div>
          <div>
            <h4>В наличии</h4>
            <h3>Послезавтра</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
