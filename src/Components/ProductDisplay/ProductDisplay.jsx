import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {

    const { product } = props
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productDisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>


            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>4.5 / 5 Stars</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        Rs.{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        Rs.{product.new_price}
                    </div>
                    </div>
                    <div className="productdisplay-right-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolorem quae totam necessitatibus autem laboriosam molestias perspiciatis, fugit at quaerat, voluptate labore possimus quod.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category : </span> Women , T-Shirts, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tags : </span>Modern , Latest</p>
                
            </div>

        </div>
    )
}
