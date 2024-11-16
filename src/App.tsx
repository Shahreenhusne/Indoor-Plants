import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navber from "./components/Navbar/Navber"
import Popular from "./components/Popular/Popular"
import Review from "./components/Review/Review"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Service from "./components/Service/Service"


export default function App() {


  return (
    <div>
      <Navber />
      <Home/>
      <Service/>
      <About/>
      <Popular/>
      <Review/>
      <Footer/>
      <ScrollToTop/>
    </div>
     
   
  )
}
