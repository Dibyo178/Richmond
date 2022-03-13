import React from "react";
import Header from "../../Component/Header/Header";
import Agency from "../Agency/Agency";
import Benifits from "../Benifits/Benifits";
import CorePriority from "../CorePriority/CorePriority";
import CustomerSay from "../CustomerSay/CustomerSay";
import FinestLuxary from "../FinestLuxary/FinestLuxary";
import Footer from "../Footer/Footer";
import New from "../New/New";
import Room from "../Room/Room";
import Tour from "../Tour/Tour";

const Home = () => {
  return (
    <div>
      <Header />
          <Agency/>
      <CorePriority />
      <FinestLuxary />
      <Room />
      <Benifits />
      <Tour />
      <New />
      <CustomerSay />
      <Footer/>
    </div>
  );
};

export default Home;
