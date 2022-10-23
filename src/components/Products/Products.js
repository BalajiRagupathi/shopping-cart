import React,{useEffect, Suspense} from "react";
import { fetchProducts } from "./actions";
import {addCart} from "./actions/index";
import { useSelector, useDispatch } from 'react-redux';
import "./Products.css"
const ProductsListBox = React.lazy(() => import('./ProductsListBox/ProductsListBox'));
const Loading = React.lazy(() => import('../common/Loading/Loading'));

const Products = props => {

    const productsData = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[])

    useEffect(() => {
        console.log(productsData);
    },[productsData])

    return (
        <Suspense fallback={<Loading/>}>
            { productsData.isLoading ? 
                <Loading/> : !
              productsData.products.error && productsData.products?.products.length > 0 && 
                <div className="products__list" >
                    {productsData.products.products.map(
                        (product) => 
                            <ProductsListBox 
                                id={product.id}
                                key={product.id} 
                                title={product.title} 
                                description={product.description} 
                                price={product.price} 
                                discountPercentage={product.discountPercentage} 
                                thumbnail={product.thumbnail} 
                            />
                        )
                    }
                </div>
            }
        </Suspense>
    )
}

export default Products;