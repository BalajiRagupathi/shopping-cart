import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, decrementCart, removeCart } from "../actions";
import './CartDetails.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CartDetails = (props) => {
    
    const dispatch = useDispatch();

    const onClickAddToCart = () => {
        dispatch(addCart({
                id:props.id,
                title:props.title,
                description:props.description,
                price:props.price,
                discountPercentage:props.discountPercentage,
                thumbnail:props.thumbnail
            }));
    }

    const onClickDecrementToCart = () => {
        dispatch(decrementCart(props.id));
    }

    const onClickRemoveFromCart = () => {
        dispatch(removeCart(props.id));
    }

    return (
            <div className="cart__item" >
                <div className="cart__item__content">
                        <LazyLoadImage src={props.thumbnail}
                            alt="Image Alt"
                            effect="blur"
                        />
                    <div className="cart__item__details" >
                        <h2 className="cart__item__title">{props.title}</h2>
                        <p className="cart__item__description">{props.description}</p>
                    </div>
                </div>
                <div className="cart__item__quantity__manipulation" >
                    { props.quantity > 1 
                        ? <button className="cart__item__quantity_btn" onClick={onClickDecrementToCart} >-</button> 
                        : <button className="cart__item__quantity_btn bg-red" onClick={onClickRemoveFromCart} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path 
                                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                                />
                            </svg>
                          </button>}
                    <p className="cart__item__quantity">{props.quantity}</p>
                    <button className="cart__item__quantity_btn" onClick={onClickAddToCart} >+</button>
                </div>
                <p className="cart__item__price" >
                    Rs. {Math.floor(props.price-Math.floor(Math.floor(props.price*props.discountPercentage)/100))}
                </p>
                <p className="cart__item__subtotal" >Rs. {Math.floor(Math.floor(props.price-Math.floor(Math.floor(props.price*props.discountPercentage)/100))*props.quantity)}</p>
            </div>
    )
}

export default CartDetails;