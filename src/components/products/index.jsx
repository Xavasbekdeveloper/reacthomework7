import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./products.scss";

// import required modules
import { Pagination } from "swiper/modules";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  let productsData = products?.map((product) => (
    <SwiperSlide key={product.id}>
      <div className="products__card">
        <div className="products__card__img">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="products__card__info">
          <h3 className="products__card__title">{product.title}</h3>
          <p className="products__card__text">{product.category}</p>
          <p className="products__card__text">{product.price}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {productsData}
      </Swiper>
    </>
  );
};

export default Products;
