import React from "react";
import Header from "../../Component/Header/Header";
import Agency from "../Agency/Agency";
import BedRooms from "../BedRooms/BedRooms";
import Benifits from "../Benifits/Benifits";
import Contact from "../Contact/Contact.js";
import CorePriority from "../CorePriority/CorePriority";
import CustomerSay from "../CustomerSay/CustomerSay";
import FinestLuxary from "../FinestLuxary/FinestLuxary";
import FooterBar from '../FooterBar/FooterBar.js';
// import Footer from "../Footer/Footer";
import New from "../New/New";
// import NewToday from "../NewToday/NewToday.js";
// import NewToday from '../NewToday/NewToday.js';
import Tour from "../Tour/Tour";


const Home = () => {
  return (
    <div>
      <Header />
          <Agency/>
      <CorePriority />
      <FinestLuxary />
      <BedRooms/>
     {/* <Room/> */}
      <Benifits />
      <Tour />
      {/* <NewToday/> */}
      <New />
      <CustomerSay />
      <Contact />
      <FooterBar />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
