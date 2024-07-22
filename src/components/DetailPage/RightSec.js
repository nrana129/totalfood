import React from "react";

const RightSec = () => {
  return (
    <>
      <div className="right_section">
        <h2>Chicken Black Pepper Salami</h2>
        <p>
          Nine Months If Stored & Transported At Or Below Minus 18 ° C From Date
          Of Mfd
        </p>

        <div className="feautred_detail">
          <ul>
            <li>
              <span></span>
              <h3>Serves 2</h3>
            </li>
            <li>
              <span></span>
              <h3>Serves 2</h3>
            </li>
          </ul>
        </div>
        <div className="price_sec">
          <span className="price">₹150.00</span>
        </div>

        <div className="button_section">
          <div className="left_section">
            <button>Add</button>
          </div>
          <div className="right_section">
            <div className="qty">
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="product_details">
          <h2>Nutrition Value Per 100Gm</h2>
          <div className="nutrition_value_box">
            <div className="nutrition_value_inner">
              121.42 kcal<span>Energy</span>
            </div>
            <div className="nutrition_value_inner">
              13.84 g<span>Protein</span>
            </div>
            <div className="nutrition_value_inner">
              1.40g<span>Fats</span>
            </div>
            <div className="nutrition_value_inner">
              12.97 g<span>Carbs</span>
            </div>
          </div>




        </div>
      </div>
    </>
  );
};

export default RightSec;
