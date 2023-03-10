import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import macBook from '../imgs/mac.jpg'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {

    const { cartItems, subTotal, shipping, tax, total } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const incremet = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        })
        dispatch({
            type: "calculatePrice"
        })
    }
    const decremet = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        })
        dispatch({
            type: "calculatePrice"
        })
    }
    const deleteHendler = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        })

        dispatch({
            type: "calculatePrice"
        })
    }
    return (
        <div className='carts'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => (
                            <CartItems imgSrc={i.imgSrc} name={i.name} pirce={i.pirce} qly={i.quantity} id={i.id} key={i.id} incremet={incremet} decremet={decremet} deleteHendler={deleteHendler} />
                        ))
                    ) : <h1>No items yet 🚫</h1>
                }
            </main>

            <aside>
                <h2>SubTotal:${subTotal}</h2>
                <h2>Shipping:${shipping}</h2>
                <h2>Tax:${tax}</h2>
                <h2>Total:${total}</h2>
            </aside>
        </div>
    )
}
const CartItems = ({ imgSrc, name, pirce, qly, incremet, decremet, id, deleteHendler }) => (
    <div className="cartItem">
        <img src={imgSrc} alt="item" />
        <article>
            <h3>{name}</h3>
            <p id='price'>${pirce}</p>
        </article>

        <div>
            <button onClick={() => decremet(id)}>-</button>
            <p>{qly}</p>
            <button onClick={() => incremet(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deleteHendler(id)} />
    </div>
)


export default Cart