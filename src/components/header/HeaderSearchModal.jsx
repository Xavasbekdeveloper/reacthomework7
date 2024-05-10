import React from "react";

const HeaderSearchModal = ({ data }) => {
  let searchItem = data?.map((item) => (
    <div key={item.id} className="header__search__bottom-box">
      <img src={item.images[0]} width={40} alt={item.title} />
      <span>{item.title}</span>
    </div>
  ));
  return (
    <div className="header__search__bottom">
      {!data.length ? <h3>Ma'lumot topilmadi</h3> : <></>}
      {searchItem}
    </div>
  );
};

export default HeaderSearchModal;
