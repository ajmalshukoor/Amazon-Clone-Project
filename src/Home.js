import React from 'react';
import "./Home.css";
import Product from './Product'

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                <Product id="123" title="Samsung Galaxy Buds Live" price={129.99} image="https://m.media-amazon.com/images/I/31F3yWdXQvL._AC_SY161_.jpg" rating={4}/>
                <Product id="234" title="Kenwood kMix" price={239.00} image="https://www.amazon.ca/images/I/71JVyevAbLL.__AC_SX300_SY300_QL70_ML2_.jpg" rating={3}/>
                </div>
                <div className="home__row">
                <Product id="345" title="The Lean Startup" price={29.99} image= "https://www.amazon.ca/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5}/>
                <Product id="456" title="Apple Watch Series 6" price={659.00} image="https://images-na.ssl-images-amazon.com/images/I/81x4UaGr0DL._AC_SL1500_.jpg" rating={5}/>
                <Product id="567" title="Carhartt Men's K87" price={21.92} image="https://images-na.ssl-images-amazon.com/images/I/81157f2TGLL._AC_UY550_.jpg" rating={4}/>
                </div>
                <div className="home__row">
                <Product id="678" title="Polaroid hi-Print" price={139.99} image="https://images-na.ssl-images-amazon.com/images/I/71a9qNiEg5L._AC_SY355_.jpg" rating={4}/>
                <Product id="789" title="Samsung 43 Inch 4K" price={498.00} image="https://images-na.ssl-images-amazon.com/images/I/91-gHZ%2BX9YL._AC_SL1500_.jpg" rating={4}/>
                </div>
            </div>
            
        </div>
        
    )
}

export default Home;