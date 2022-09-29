import React,{useState} from "react";

function Item({ name, category }) {
const [InCart, serInCart] = useState(false)
function addcart(){
  serInCart((InCart) => !InCart)
}


  return (
    <li className={InCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={InCart ? "add" : "remove"} onClick={addcart}>
      {InCart ? "Add to" : "remove from"}  Cart</button>
    </li>
  );
}

export default Item;
