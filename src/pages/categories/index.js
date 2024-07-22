import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "../../assets/css/theme.scss";
import "../../app/globals.css";
import MainLayout from '../../components/layouts/MainLayout';


const categories = () => {
  return (
    <MainLayout>
      <div className="page-main">
        <div className="container">
          <Sidebar />
          <ProductList />
        </div>
      </div>
    </MainLayout>
  );
};

export default categories;
