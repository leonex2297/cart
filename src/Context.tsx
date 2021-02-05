import React,{useContext,useReducer,useEffect} from "react";
import cartitems from "./Data"

type AppProviders=[
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
]

const initialState={
    loading:false,
    cart:cartitems,
    total:0,
    amount:0,
} 

type reducerstate=typeof initialState
const reducer=(state:reducerstate,action:any)=>{
    switch(action.type){
        case "CLEAR_CART":{
            return{
                ...state,
                cart:[],
        }
        }
        case "REMOVE":{
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!==action.payload.id)
            }
        }
        case "INCREMENT":{
            let tempCart=state.cart.map((item)=>{
                if(item.id===action.payload){
                    return {...item,amount:item.amount+1}
                }
                return item
            })
            return{
                ...state,
                cart:tempCart,
            }
        }
         case "DECREMENT":{
            let tempCart=state.cart.map((item)=>{
                if(item.id===action.payload){
                    return {...item,amount:item.amount-1}
                }
                return item
            }).filter((item)=>item.amount!==0)
            return{
                ...state,
                cart:tempCart,
            }
        }
        case "GET_TOTAL":{
            let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
                const{price,amount}=cartItem
                const itemTotal=price*amount
                cartTotal.total+=itemTotal
                cartTotal.amount+=amount;
                return cartTotal
            },{
                total:0,
                amount:0,
            })
            total=parseFloat(total.toFixed(2))
            return {
                ...state,
                total,
                amount
            }
            return state
        }
        default:{
            return state
        }
    }
return state
}

const AppContext=React.createContext<AppProviders|undefined|any>(undefined);
export const AppProvider=({children}:{children:any})=>{
    const[state,dispatch]=useReducer(reducer,initialState)

    const clearcart=()=>{
        return dispatch({type:"CLEAR_CART"})
    }

    const remove=(id:number)=>{
        return dispatch({type:"REMOVE", payload:{id:id}})
    }
    const increment=(id:number)=>{
        return dispatch({type:"INCREMENT",payload:id})
    }
    const decrement=(id:number)=>{
        return dispatch({type:"DECREMENT",payload:id})
    }

    // const fetchData=async()=>{
    //     dispatch({type:"LOADING"})
    //     const response=await fetch(url)
    //     const cart=await response.json()
    //     dispatch({"DISPLAY_ITEMS",payload:cart})
    // }
    useEffect(()=>{
        dispatch({type:"GET_TOTAL"})
    },[state.cart])
    return(
        <AppContext.Provider value={{...state,clearcart,remove,increment,decrement}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

