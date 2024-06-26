import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, removeItem, cartPriceTotal, clear } = useContext(CartContext)
    return (
        <div>
            <h2 className="text-2xl">Tu carrito</h2>
            <div>
                {cart.map((compra) => {
                    return (
                        <div key={compra.id} className="flex justify-around items-center p-8">
                            <img src={compra.imagen} alt={compra.name} className="w-32" />
                            <span className="text-lg">{compra.name}</span>
                            <span className="text-lg">{compra.quantity}</span>
                            <span className="text-lg">${compra.precio},00</span>
                            <span className="text-lg">Precio final: ${compra.precio * compra.quantity},00</span>
                            <button className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 my-3 w-36" onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    )
                })}
            </div>
            <p className="text-xl">Total a pagar:$ {cartPriceTotal()},00</p>
            <div className="flex flex-col">
            <button className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 my-3 w-40" onClick={clear}>Borrar carrito</button>
            <Link className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 my-3 w-40" to='/checkout'>Finalizar compra</Link>
            </div>
        </div>

    )
}

export default CartView