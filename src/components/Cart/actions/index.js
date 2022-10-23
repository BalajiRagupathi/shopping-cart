export const addCart = (productToCart) => (dispatch,getState) => {

    const prevState = getState();
    let isPresent = false;
    let cart = [...prevState.cart.cart].map(item => {
        let tempItem = {...item};
        if (tempItem.id === productToCart.id) {
            tempItem.quantity++;
            isPresent = true;
        }
        return tempItem;
    });

    if( !isPresent )
        cart.push({...productToCart,quantity: 1});

    dispatch ({
        type: "ADD_CART",
        payload: [...cart]
    })
}

export const decrementCart = (productId) => (dispatch,getState) => {
    const prevState = getState();
    let cart = prevState.cart.cart.reduce((acc,item) => {
        let tempItem = {...item};
        if (tempItem.id === productId && tempItem.quantity > 1) {
            tempItem.quantity--;
            acc.push(tempItem);
        } else if (tempItem.id !== productId)
            acc.push(tempItem);
        return acc;
    },[]);
    
    dispatch ({
        type: "DECREMENT_CART",
        payload: [...cart]
    })
}

export const removeCart = (productId) => (dispatch,getState) => {
    const prevState = getState();
    let cart = [...prevState.cart.cart].filter(item => item.id !== productId);
    dispatch ({
        type: "REMOVE_CART",
        payload: [...cart]
    })
}