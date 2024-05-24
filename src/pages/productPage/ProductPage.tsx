import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../helper/supabaseClient";
import Header from "../../components/global/header/Header";
import classes from "./ProductPage.module.css";
import starImg from "../../img/searchPage/star.svg";
import imgFavorite from "../../img/favorite.svg";
import ProductTable from "./productPage components/ProductTable";

interface Product {
  id: string;
  cpuName: string;
  socket: string;
  price: string;
  year: number;
  coresNumber: number;
  threads: number;
  cacheL2: number;
  cacheL3: number;
  frequency: number;
  overclockedFrequency: string;
  img: string;
  DDR: string;
  maxRam: string;
  multiplier: boolean;
  ramFrequency: number;
  TDP: number;
  maxHeat: number;
  integratedGPU: boolean;
  ramChannels: number;
}

const ProductPage: React.FC = () => {
  const { productId }: { productId?: string } = useParams();
  const parsedProductId = parseInt(productId || "", 10);
  const [product, setProduct] = useState<Product | null>(null);
  const [additionalButtonsState, setAdditionalButtonsState] = useState(1);

  const fetchData = async (parsedProductId: number) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .eq("id", `${parsedProductId}`);
      if (data) {
        setProduct(data[0]);
      }
    } catch (error) {
      console.error("Error fetching supabase data", error);
    }
  };

  useEffect(() => {
    fetchData(parsedProductId);
  }, [parsedProductId]);

  if (!product) {
    return (
      <div>
        <Header />
        <div style={{ background: "F6F6F6", height: "800px" }} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={classes.product_background}>
        <div className={classes.product_container}>
          <h1>Процессор {product.cpuName}</h1>
          <div className={classes.product_card}>
            <div className={classes.product_card_main}>
              <img
                src={product.img}
                alt="product img"
                className={classes.product_img}
              />
              <div className={classes.product_characteristics}>
                <h3>
                  {product.socket}, {product.coresNumber} x {product.frequency}{" "}
                  ГГц, L2 - {product.cacheL2} МБ, L3 - {product.cacheL3} МБ,{" "}
                  {product.ramChannels} x {product.DDR}-{product.ramFrequency}{" "}
                  МГц, TDP {product.TDP} Вт
                </h3>
                <div className={classes.stars}>
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <img src={starImg} alt="rating img" />
                  <h4>10</h4>
                </div>
                <div className={classes.product_section_price}>
                  <div className={classes.product_section_price_cost}>
                    <h2>{product.price}</h2>
                  </div>
                  <button className={classes.fav_button}>
                    <img src={imgFavorite} alt="imgFavorite" />
                  </button>
                  <button className={classes.product_section_price_buy}>
                    <h2>Купить</h2>
                  </button>
                </div>
                <div className={classes.product_avails}>
                  <div className={classes.availability}>
                    <h2>В магазинах</h2>
                    <h3>Завтра (перечитать завтра)</h3>
                  </div>
                  <div className={classes.availability}>
                    <h2>Доставим на дом</h2>
                    <h3>Как только так сразу</h3>
                  </div>
                </div>
                <div className={classes.mockup_buttons_row}>
                  <button
                    className={
                      additionalButtonsState === 1 ? classes.active_button : ""
                    }
                    onClick={() => {
                      setAdditionalButtonsState(1);
                    }}
                  >
                    <h2>Mockup-кнопки</h2>
                  </button>
                  <button
                    className={
                      additionalButtonsState === 2 ? classes.active_button : ""
                    }
                    onClick={() => {
                      setAdditionalButtonsState(2);
                    }}
                  >
                    <h2>Аксессуары</h2>
                  </button>
                  <button
                    className={
                      additionalButtonsState === 3 ? classes.active_button : ""
                    }
                    onClick={() => {
                      setAdditionalButtonsState(3);
                    }}
                  >
                    <h2>Услуги</h2>
                  </button>
                  <button
                    className={
                      additionalButtonsState === 4 ? classes.active_button : ""
                    }
                    onClick={() => {
                      setAdditionalButtonsState(4);
                    }}
                  >
                    <h2>Аналоги</h2>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.product_info}>
              <h2>Характеристики процессора {product.cpuName}</h2>
              <ProductTable
                title="Заводские данные"
                parameters={[
                  "Гарантия продавца / производителя",
                  "Страна-производитель",
                ]}
                values={["12 мес", "Китай"]}
              />
              <ProductTable
                title="Общие параметры"
                parameters={["Модель", "Сокет", "Год релиза"]}
                values={[
                  `${product.cpuName}`,
                  `${product.socket}`,
                  `${product.year}`,
                ]}
              />
              <ProductTable
                title="Ядро и архитектура"
                parameters={[
                  "Общее количество ядер",
                  "Количество производительных ядер",
                  "Максимальное число потоков",
                  "Объём кэша L2",
                  "Объём кэша L3",
                ]}
                values={[
                  `${product.coresNumber}`,
                  `${product.coresNumber}`,
                  `${product.threads}`,
                  `${product.cacheL2} МБ`,
                  `${product.cacheL3} МБ`,
                ]}
              />
              <ProductTable
                title="Частота и возможность разгона"
                parameters={[
                  "Базовая частота процессора",
                  "Максимальная частота в турбо режиме",
                  "Свободный множитель",
                ]}
                values={[
                  `${product.frequency} ГГц`,
                  `${product.overclockedFrequency} ГГц`,
                  `${product.multiplier === true ? "Да" : "Нет"}`,
                ]}
              />
              <ProductTable
                title="Параметры оперативной памяти"
                parameters={[
                  "Тип памяти",
                  "Максимально поддерживаемый объём памяти",
                  "Количество каналов",
                  "Частота оперативной памяти",
                ]}
                values={[
                  `${product.DDR}`,
                  `${product.maxRam} ГБ`,
                  `${product.ramChannels}`,
                  `${product.ramFrequency} МГц`,
                ]}
              />
              <ProductTable
                title="Тепловые характеристики"
                parameters={[
                  "Тепловыделение(TDP)",
                  "Базовое тепловыделение",
                  "Максимальная температура процессора",
                ]}
                values={[
                  `${product.TDP} Вт`,
                  `${product.TDP} Вт`,
                  `${product.maxHeat} °C`,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
