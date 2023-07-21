// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(element => {
        total += element.price * element.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-line">
              <span className="order-total-text">Order Total: </span>Rs.{total}{' '}
              /-
            </h1>
            <p className="no-of-cart-items">{cartList.length}Items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
