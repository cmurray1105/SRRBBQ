import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CheckoutModal from './CheckoutModal'

const Cart = (props) =>{
// const convertPriceToString = (price)=>{
//   console.log("prop prop prop prop", props)
//     console.log("func console", props.cartItems)
//   let priceString = price.toString();
//   if (priceString.includes(".")) {
//     if (priceString.split(".")[1].length === 1) {
//       priceString += "0";
//     }
//     if (priceString.split(".")[1].length > 2) {
//       priceString =
//         priceString.split(".")[0] +
//         "." +
//         priceString.split(".")[1].slice(0, 2);
//     }
//   } else {
//     priceString += ".00";
//   }
//   return priceString
// }
let priceString = props.convertPriceToString(props.total)

  let itemMap = null;
  if (props.cartItems){
    console.log(Object.keys(props.cartItems), "item length")
    let selectedItems = Object.keys(props.cartItems);
    console.log("products", props.products, "selected Items", typeof selectedItems[0])
    itemMap = selectedItems.map((item)=>(
      <div>
        {props.cartItems[item].quantity} X {item}: ${props.convertPriceToString(props.cartItems[item].price * props.cartItems[item].quantity)}
      </div>
    ))
  }
  return(
  <div className={'cart-container'}>
  {/* {itemMap} */}

  {/* Total Due: ${priceString} */}
  {/* <CheckoutModal clearOrder={props.clearOrder} priceString={priceString} total={props.total} products={props.products} cartItems={props.cartItems}/> */}
  </div>

  )
}
export default Cart;