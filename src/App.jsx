import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Pages/Layout";
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Product from './Pages/Product';
import Service from './Pages/Service';
import home from './Pages/home';
import NoPage from './Pages/NoPage';
import ProductDetails from './Pages/ProductDetails';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="home" element={<home/>}/>
      <Route path="product" element={<Product/>} />
      <Route path="/product/:pdesc" element={<ProductDetails/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="contactus" element={<ContactUs/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="*" element={<NoPage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App