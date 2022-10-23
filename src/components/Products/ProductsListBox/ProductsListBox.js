import React, {useEffect, useState} from "react";
import "./ProductsListBox.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { addCart, decrementCart } from "../../Cart/actions";
import { useSelector,useDispatch } from "react-redux";

const ProductsListBox = (props) => {

    const [productInCart,setProductInCart] = useState(null);

    const cart = useSelector(state => state.cart);
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

    useEffect(() => {
        const foundProduct = cart?.cart?.find(element => element.id === props.id);

        if (foundProduct)
            setProductInCart({...foundProduct});
        else if (!foundProduct && productInCart) setProductInCart(null);
    },[cart])

    return (
        <div className="product__box">
            <div className="product__image">
                <LazyLoadImage src={props.thumbnail}
                    alt="Image Alt"
                    effect="blur"
                />
            </div>
            <div className="product__content" >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="product__price" >
                    <p className="price" >Rs. {Math.floor(props.price-Math.floor(Math.floor(props.price*props.discountPercentage)/100))} </p>
                    <p className="mrp" >Rs. {props.price}</p>
                    <p className="offer"> {`(Off ${props.discountPercentage}%)`}</p>
                </div>
            </div>
            <div className="product__addCart" >
                { productInCart 
                    ? <div className="product__manipulate__cart" >
                        <button className="product__decrement__quantity" onClick={onClickDecrementToCart}> - </button>
                        <div className="product__quantity" > {productInCart.quantity} </div>
                        <button className="product__increament__quantity" onClick={onClickAddToCart} > + </button>
                    </div> 
                    : <button className="product__addCart__btn" onClick={onClickAddToCart} >Add Cart</button>}
            </div>
        </div>
    )
}

export default ProductsListBox;