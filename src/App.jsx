import "./App.css";
import OurDoctors from "./components/Body/OurDoctors/OurDoctors.jsx";
import HeaderElement from "./components/Header/Header.jsx";
import OurExperts from "./components/Body/OurExperts/OurExperts.jsx";
import Static from "./components/Body/Static/Static.jsx";
import OurDepartment from "./components/Body/OurDepartment/OurDepartment.jsx";
import Pricing from "./components/Body/Pricing/Pricing.jsx";
import Feedback from "./components/Body/Feedback/Feedback.jsx";
import JoinUs from "./components/Body/JoinUs/JoinUs.jsx";
import FooterElement from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <HeaderElement />
      <OurDoctors />
      <OurExperts />
      <Static />
      <OurDepartment />
      <Pricing />
      <Feedback />
      <JoinUs />
      <FooterElement />
    </div>
  );
}

export default App;
