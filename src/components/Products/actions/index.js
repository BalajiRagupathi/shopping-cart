import {dummyJSON} from "../../../app/axios/baseURL";

export const fetchProducts = () => async (dispatch,getState) => {

    try {

        const response = await dummyJSON.get(`/products`);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: response.data
        })
    } catch (e) {
        const prevState = getState();
        console.log("actions",prevState.products.products);
        dispatch({
            type: "FETCH_PRODUCTS_ERROR",
            payload: {
                    ...prevState.products.products,
                    error: "Error in fetching"
                }
        })
    }
}
