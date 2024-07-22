import React from "react";
import Sdata from "./Sdata";
// import img from "next/img";
import { Link } from "react-router-dom";

const TrendingDelights = () => {
  return (
    <div className="TrendingDelights">
      <div className="container">
        <h3>
          Trending Delights<span className="icon-smile"></span>
        </h3>
        <ul className="flex flex-wrap">
          {Sdata.map((data) => (
            <li key={data.id} className="w-1/4 px-3">
              <Link to="/ListPage">
                <span className="product_img">
                  <img src={data.img} alt={`Categories-${data.id}`} />
                </span>
                <h3>{data.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingDelights;
