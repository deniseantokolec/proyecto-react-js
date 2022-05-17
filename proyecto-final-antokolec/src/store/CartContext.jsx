import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext({
    cart: [],
    addToCart: () =>{},
    removeFromCart: ()=>{},
    clearCart: ()=>{},
    isInCart: ()=>{},
    CartQuantity: ()=>{},
    CartPrice: ()=>{}
});
const {Provider} = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
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
       setCart([])
    
    }

    const isInCart = (id) => {
        const IsInCart = [...cart]
        const estaEnCart= IsInCart.find(itemCart => itemCart.id === id);
 
        setCart(estaEnCart)
        return estaEnCart
    }                                          
       
    const CartQuantity = (quantity) => {
        const total = 0;
        const cartTotal = cart.forEach((item =>quantity = item.quantity + total),0);
        console.log(cartTotal);
        return cartTotal

              
        
    }

    const CartPrice = () =>{
        const totalprice = 0;    
        const cartPrice = cart.forEach(item=>  totalprice += item.price );
        console.log(cartPrice);
        return cartPrice;
            
    }

  return (
    <Provider value={{cart,addToCart, removeFromCart, clearCart, isInCart, CartQuantity,CartPrice}}>
        {children}
    </Provider>
  )
}


export default useCartContext;
