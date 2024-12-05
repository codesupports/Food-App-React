
import Header from './components/Header'
import CheckoutPage from './components/CheckoutPage'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Payment from './components/Payment'
import Success from './components/Success'

function App() {

  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
