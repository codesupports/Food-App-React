
import Header from './components/Header'
import Categoery from './components/Categoery'
import Card from './components/Card'
import Footer from './components/Footer'
import CartSection from './components/CartSection'

function App() {

  return (
    <>
      <Header />
      <div className='container m-auto font-sans'>
        <Categoery />
        <main>
          <div className='flex flex-wrap pb-28'>
            <Card />
          </div>
        </main>

      </div>
      <CartSection />
      <Footer />
    </>
  )
}

export default App
