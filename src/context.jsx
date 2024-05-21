import { createContext,useContext,useReducer,useEffect } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action';
import cartItems from "./data";


const GlobalContext = createContext();

export const useGlobalContext = ()=>useContext(GlobalContext);



const initialState = {
    loading:false,
    cart:new Map(cartItems.map((item)=>[item.id,item])),
}

const AppContext = ({children})=>{
    
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  

   const [state,dispatch] = useReducer(reducer,initialState);


    return(
        <GlobalContext.Provider value={{...state,clearCart}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext