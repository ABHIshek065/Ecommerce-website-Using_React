import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className="cartitems-formate-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
         {all_product.map((e)=>{
            if (cartItems[e.id]>0) {
                return    <div >
                <div className="cartitems-formate cartitems-formate-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>Rs.{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>Rs.{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-removeicons' src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt="" />

                </div>
                <hr />
            </div>
            }
            return null
         })}
         <div className="cartitems-down">
            <div className="cartitemstotal">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitemstotalitems">
                        <p>Subtotal</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitemstotalitems">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitemstotalitems">
                        <h3>Total</h3>
                        <h3>Rs.{getTotalCartAmount()}</h3>
                    </div>
                </div>

                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code , Enter it here</p>
                <div className="cartitems-promo-box">
                    <input type="text " placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
         </div>
        </div>
    )
}
