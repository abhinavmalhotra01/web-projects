import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,    Route , Routes} from "react-router-dom"
import Slider from "./components/Slider"
import dataInfo from "./data/data.json"
import Offers from "./components/Offers.jsx"
import Heading from "./components/Heading.jsx"
import StarProduct from "./components/StarProduct.jsx"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx"
import HotAccessories from "./components/HotAccessories.jsx"
import ProductReviews from "./components/ProductReviews.jsx"
import Videos from "./components/Videos.jsx"
import Banner from "./components/Banner.jsx"
import Footer from "./components/Footer.jsx"
import NavOptios from "./components/NavOptios.jsx"


const name = " product";
const banner = dataInfo.banner
function App() {
  return (
    // return ke andar hmesha html ; if want js put it in {} 
    // return ek hi cheez hoti hmesha
    <Router>
      <PreNavbar/>
      <Navbar />
      <NavOptios miPhones={dataInfo.miPhones} redmiPhones={dataInfo.redmiPhones} tv={dataInfo.tv} laptop={dataInfo.laptop} fitnessAndLifeStyle={dataInfo.fitnessAndLifeStyle} home={dataInfo.home} audio={dataInfo.audio} accessories={dataInfo.accessories} />
      <Slider start={banner.start}/>
      <Offers offer={dataInfo.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={dataInfo.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

      <Routes>
        <Route path="/music"
           element = {<HotAccessories music={dataInfo.hotAccessories.music} musicCover={dataInfo.hotAccessoriesCover.music}/>} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/smartDevice"
          element={<HotAccessories smartDevice={dataInfo.hotAccessories.smartDevice} smartDeviceCover={dataInfo.hotAccessoriesCover.smartDevice} />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/home"
          element={<HotAccessories home={dataInfo.hotAccessories.home} homeCover={dataInfo.hotAccessoriesCover.home} />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/lifeStyle"
          element={<HotAccessories lifeStyle={dataInfo.hotAccessories.lifeStyle} lifeStyleCover={dataInfo.hotAccessoriesCover.lifeStyle} />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/mobileAccessories"
          element={<HotAccessories mobileAccessories={dataInfo.hotAccessories.mobileAccessories} mobileAccessoriesCover={dataInfo.hotAccessoriesCover.mobileAccessories} />} >
        </Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={dataInfo.productReviews} />
      
      <Heading text="VIDEOS" />

      <Videos videos={dataInfo.videos} />

      <Heading text="IN THE PRESS"/>

      <Banner banner={dataInfo.banner} />

      <Footer footer={dataInfo.footer} />

    </Router>

  );
}

export default App;
