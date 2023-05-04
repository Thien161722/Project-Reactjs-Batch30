import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'

const ShoppingCart = () => {
  return (
    <div className="header-cart">
        <FaShoppingCart/>
        <em>0</em>
    </div>
  )
}

export default ShoppingCart;