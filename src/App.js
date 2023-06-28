import Navbar from './components/navbar'
import CartContainer from './components/cartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import { useEffect } from 'react'
import Modal from './components/modal'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
