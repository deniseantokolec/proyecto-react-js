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
       
    const CartQuantity = () => {
        const newCart = [...cart]
        const cartQuantity = newCart.reduce((total,item)=>{return total + item.quantity},0);
        setCart(cartQuantity);
        console.log(cartQuantity);
        return cartQuantity;
        
    }

    const CartPrice = () =>{    
        const newPrice = [...cart]
        const cartPrice = newPrice.reduce((total,valor)=>{return total + valor.price},0);
        setCart(cartPrice);
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
