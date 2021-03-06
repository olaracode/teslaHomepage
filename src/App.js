import "./App.css";
import Header from "./components/Header";
import Accesories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appItemsContainer">
        <Item
          title="Solar Panels"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
        />
        <Item
          title="Model 3"
          desc="$69,000"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
        />
        <Item
          title="Model X"
          desc="$80,000"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
        />
        <Item
          title="Model Y"
          desc="$50,000"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
        />
        <Item
          title="Solar Roof"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt=""
          rightBtnLink=""
          twoButtons={false}
        />
      </div>
    </div>
  );
}

export default App;
