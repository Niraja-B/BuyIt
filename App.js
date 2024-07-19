//import logo from './logo.svg';
//import './App.css';
import {LoginPage} from "./component/loginsignin/loginpage"
import {SignUp} from "./component/signuppage"
import { LandingPage } from "./LandingPage/LandingPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ShopByCategory} from "./LandingPage/LandingPage"
import {Footer} from "./footerpage/footerpage";
import {Men} from "./shopping/men"
import {Women} from "./shopping/women"
import {Kid} from "./shopping/kid"
import {Beauty} from "./shopping/beauty"
import {Footwear} from "./shopping/footwear"
import {Homedecor} from "./shopping/homedecor"
import {Mainpage} from "./firstmain/home"
import {Product1,Product2,Product3,Product4,Product5,Product6} from "./bag/bag";
import {Bag} from "./bag/bag1"
import { BuyNow } from "./bag/buynow";
import {Order} from "./bag/order";
function App() {
  return (
    <>
   {/* <Loginpage/>
   <Signup/> */}
   

   <BrowserRouter>
   <Routes>
  
    <Route path="/land" element={[<LandingPage/>, <ShopByCategory/>,<Footer/>]}></Route>
    <Route path="/" element={[<Mainpage/>, <img className="cloth" src="https://www.shutterstock.com/image-photo/sale-50-off-mock-advertise-600nw-763964791.jpg"></img> ]}></Route>
    <Route path="/login" element={[<LandingPage/>, <ShopByCategory/>,<Footer/>]}></Route>
    <Route path="/log" element={[<Mainpage/>,<LoginPage/>,<Footer/>]}></Route>
    <Route path="/sign" element={[<Mainpage/>,<SignUp/>,<Footer/>]}></Route>
    <Route path="/men" element={[<LandingPage/>,<Men/>,<Footer/>]}></Route>
    <Route path="/women" element={[<LandingPage/>,<Women/>,<Footer/>]}></Route>
    <Route path="/menshop" element={[<LandingPage/>,<Men/>,<Footer/>]}></Route>
    <Route path="/womenshop" element={[<LandingPage/>,<Women/>,<Footer/>]}></Route>
    <Route path="/kidshop" element={[<LandingPage/>,<Kid/>,<Footer/>]}></Route>
    <Route path="/beautyshop" element={[<LandingPage/>,<Beauty/>,<Footer/>]}></Route>
    <Route path="/footwearshop" element={[<LandingPage/>,<Footwear/>,<Footer/>]}></Route>
    <Route path="/homedecorshop" element={[<LandingPage/>,<Homedecor/>,<Footer/>]}></Route>
    <Route path="/product/:id" element={[<LandingPage/>,<Product1/>,<Footer/>]}></Route>
    <Route path="/menproduct/:id" element={[<LandingPage/>,<Product2/>,<Footer/>]}></Route>
    <Route path="/kidproduct/:id" element={[<LandingPage/>,<Product3/>,<Footer/>]}></Route>
    <Route path="/beautyproduct/:id" element={[<LandingPage/>,<Product4/>,<Footer/>]}></Route>
    <Route path="/footwearproduct/:id" element={[<LandingPage/>,<Product5/>,<Footer/>]}></Route>
    <Route path="/homedecorproduct/:id" element={[<LandingPage/>,<Product6/>,<Footer/>]}></Route>
    <Route path="/bag" element={[<LandingPage/>,<Bag/>,<Footer/>]}></Route>
    <Route path="/buynow" element={<BuyNow/>}> </Route>
    <Route path="/order" element={<Order/>}></Route>
   </Routes>
  
   
   </BrowserRouter>
   </>
  )
}

export default App;
