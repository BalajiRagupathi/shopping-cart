import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./Cart.css"
const CartDetails = React.lazy(() => import('./CartDetails/CartDetails'));

const Cart = () => {

    const [totalPrice,setTotalPrice] = useState({MRP: 0,discountMRP: 0, totalAmount: 0});
    const cartList = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(cartList);
        setTotalPrice({...cartList.cart.reduce((acc,curr) => {

            acc.MRP += (curr.price*curr.quantity);
            acc.discountMRP += Math.floor(Math.floor(curr.price*curr.discountPercentage)/100)*curr.quantity;
            acc.totalAmount += Math.floor(curr.price-Math.floor(Math.floor(curr.price*curr.discountPercentage)/100))*curr.quantity;

            return acc;
        },{MRP: 0,discountMRP: 0, totalAmount: 0})})
    },[cartList])

    return (
            cartList?.cart.length > 0 ? 
            (<>
                <div className="cart__content">
                    <div className="cart__left" >
                            <div className="cart__headers" >
                                <h1>Item</h1>
                                <h1 className="text-center">Qty</h1>
                                <h1 className="text-center">Price</h1>
                                <h1 className="text-center">Sub total</h1>
                            </div> 
                        {cartList?.cart?.map(
                            item => (<CartDetails 
                                id={item.id}
                                key={item.id} 
                                title={item.title} 
                                quantity={item.quantity}
                                description={item.description} 
                                price={item.price} 
                                discountPercentage={item.discountPercentage} 
                                thumbnail={item.thumbnail} 
                        />))}
                    </div>
                    <div className="cart__right" >
                        <div className="cart__coupon__content" >
                            <div className="cart__coupon" >
                                <span className="cart__coupon__icon" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path 
                                            d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                                        />
                                    </svg>
                                </span> 
                                <h3>Apply Coupons</h3>
                            </div>
                            <button className="cart__coupon__btn" >Apply</button>
                        </div>
                        <div className="cart__price__details" >
                            <h1>Price Details</h1>
                            <p>Total MRP <span className="float-right" >Rs. {totalPrice.MRP}</span></p>
                            <p>Discount on MRP <span className="float-right color-green" >Rs. {totalPrice.discountMRP > 0 ? (totalPrice.discountMRP*-1) : totalPrice.discountMRP}</span></p>
                            <p>Coupons Discount <span className="float-right" >Rs. 0</span></p>
                            <hr/>
                            <p className="text-bold" >Total amount <span className="float-right" >Rs. {totalPrice.totalAmount}</span></p>
                            <button className="cart__place__order" >Place Order</button>
                        </div>
                    </div>
                </div>
            </>) 
            : <div className="no__cart" >
                <div className="no__cart__img" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path 
                            d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"
                        />
                    </svg>
                </div>
                <h1>Your cart is empty!</h1>
                <h5>Add items to shop now</h5>
                <Link to="/" ><button className="shop__now" >Shop Now</button></Link>
              </div>
    )
}

export default Cart;