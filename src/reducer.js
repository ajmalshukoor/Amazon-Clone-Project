
export const initialState = {
    basket: [],
    user: null
};
    //reduce goes through basket items, amount is a var and item is basket item. 
    //How the function act is for each item price it add up to amount (amount's initial value is zero)
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };

        case 'REMOVE_FROM_BASKET':
            // return {
            //     ...state, 
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }
            //index =  finding index from basket at the current state. It goes through basketItem where basket id equals action id

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Can't remove the product (id: ${action.id}) as its not in basket!`)
            }
            return{
                ...state,
                basket: newBasket
            
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;