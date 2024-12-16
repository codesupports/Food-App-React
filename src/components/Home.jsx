import React from 'react'
import Header from './Header';
import Categoery from './Categoery';
import Card from './Card';
import CartSection from './CartSection';
import Footer from './Footer';
import Banner from './Banner.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className='container m-auto font-sans'>
                <main>
                    <Categoery />
                    <div className='flex flex-wrap lg:pb-28 transition-all duration-300 ease-in-out '>
                        <Card />
                    </div>
                </main>
            </div>
            <CartSection />
            <Footer />
        </>
    )
}

export default Home;
