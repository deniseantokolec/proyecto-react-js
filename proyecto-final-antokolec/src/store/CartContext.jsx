import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext();
const {Provider} = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart()){
           const newCart= cart.map(cartitem => {
                if(cartitem.id === item.id){
                    const copyItem = {...cartitem}
                    copyItem.quantity += quantity;
                    return copyItem;
                }
                   
                else
                return cartitem;    
                
            })
            setCart(newCart)
        }
        else{
            
            const newItem = {...item,quantity};
            setCart([...cart,newItem]);
        }
    }    
        
        

    const removeFromCart = (id) => {
        const newCart =[...cart]
        const CartFiltred = newCart.filter(item =>{
            return item.id !== id;
        });
        setCart(CartFiltred)
    }

    const clearCart = (id) => {
        const newCart = [...cart]
        const CartClear = newCart.reduce((item)=> {
            return item.id === id
        });
        setCart(CartClear)
    }

    const isInCart = (id) => {
        const IsInCart = [...cart]
        const estaEnCart= IsInCart.some(itemCart => itemCart.id === id);
 
        setCart(estaEnCart)
    }                                          
       
    const CartQuantity = (quantity) => {
        const total = 0
        const cartQuantity= cart.forEach(cartItem => {
            if(cartItem.quantity === quantity){
                const copyItem = {...cartItem}
                copyItem.quantity += total
                return copyItem;
            }
               
            else
            return cartItem;    
            
        })
        setCart(cartQuantity)
        
        
    }

    const CartPrice = (price) =>{
        const total = 0
        const cartPrice= cart.forEach(Price => {
            if(Price.price === price){
                const copyPrice = {...Price}
                copyPrice.price += total
                return copyPrice;
            }
       
            else
            return Price;    
    
        })
        setCart(cartPrice)
        
    }

  return (
    <Provider value={{cart,addToCart, removeFromCart, clearCart, isInCart, CartQuantity,CartPrice}}>
        {children}
    </Provider>
  )
}


export default useCartContext;
