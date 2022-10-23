export const loadingAction = (isLoading) => (dispatch) => {
    dispatch ({
        type: "ISLOADING",
        payload: isLoading
    })
}
