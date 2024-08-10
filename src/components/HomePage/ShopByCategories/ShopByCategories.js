import React, { useState, useEffect } from "react";
// import img from "next/img";
import Sdata from "./Sdata";
import { Outlet, Link } from "react-router-dom";

const ShopByCategories = () => {
  const [categoriesData, CategoriesSData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://proxy.cors.sh/https://totalfood.greenhonchos.in/rest/V1/categories",
          {
            method: "GET",
            headers: {
              "x-cors-api-key": "temp_efccee76b63a0822c956c81b6631296a",
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzIxMzkxNjgwLCJleHAiOjE3MjEzOTUyODB9.KV3NjeUDc0pYsAYRbhEdELKt375JaNrNsFOH9BmvZks",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        CategoriesSData(data.categories);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const divs = Array.from({ length: 12 });

  if (loading) {
    return (
      <div className="categories_loader">
        {divs.map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  if (error || !Array.isArray(categoriesData) || categoriesData.length === 0) {
    return <div>Error: No data available</div>; // Handle case where no data is available or error occurred
  }

  // console.log(categoriesData);

  const filteredCategories = categoriesData.filter(
    (category) => category.image
  );

  console.log(filteredCategories);

  return (
    <div className="ShopByCategories my-10">
      <div className="container">
        <h2>Shop By Categories</h2>
        <p>Resehest Meats And Much More!</p>
        <ul>
          {filteredCategories.map((data) => (
            <li key={data.id}>
              {/* <a href={`http://localhost:3000//${data.link}`}> */}
              <Link to="/ListPage">
                <span className="product_img">
                  <img src={data.image} alt={`Categories-${data.id}`} />
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

export default ShopByCategories;
