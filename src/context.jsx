import { createContext,useContext,useReducer,useEffect } from "react";
import reducer from "./reducer";

const GlobalContext = createContext();

export const useGlobalContext = ()=>useContext(GlobalContext);



const initialState = {
    loading:false,
    cart:[]
}

const AppContext = ({children})=>{

   const [state,dispatch] = useReducer(reducer,initialState);


    return(
        <GlobalContext.Provider value={{...state}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default AppContext