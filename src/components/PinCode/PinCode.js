import React from "react";
import { LocationBanner } from "../../assets/images/index";

const PinCode = () => {
  return (
    <div className="pincode_sec">
      <img src={LocationBanner} alt="LocationBanner" />
      <form action="">
      <label htmlFor="">Enter your delivery pincode</label>
      <input type="Search your pincode" />
      <button>Done</button>
      </form>
    </div>
  );
};

export default PinCode;
