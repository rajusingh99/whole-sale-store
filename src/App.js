import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import NoPage from './components/NoPage'
import WhereToBuy from './components/WhereToBuy';
import PressAndMedia from './components/PressAndMedia'
import ContactUs from './components/ContactUs'
import Header from './components/Header/Index'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
       { <Banner />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/product" element={<Products />} />
            <Route  path="/where-to-buy" element={<WhereToBuy />} />
            <Route  path="/press-and-media" element={<PressAndMedia />} />
            <Route  path="/contact-us" element={<ContactUs />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
