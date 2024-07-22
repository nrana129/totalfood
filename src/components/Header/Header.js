import React, { useState, useEffect } from "react";
import { Logo, Search } from "../../assets/images/index";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import PortalPop from "../PortalPop/PortalPop";
import PinCode from "../PinCode/PinCode";
import Login from "../Login/Login";
import ShopByCategories from "../HomePage/ShopByCategories/ShopByCategories";
import Cart from "../Cart/Cart";

const Header = () => {
  const [loginPortal, setLoginPortal] = useState(false);
  const [locationPortal, setLocationPortal] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showcart, setCart] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    setLoginPortal(false);
  };

  const LocationClose = () => {
    setLocationPortal(false);
  };

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const CategoriesHandleClose = () => {
    setShowCategories(false);
  };

  const handleToggleCart = () => {
    console.log("click");
    setCart(!showcart);
  };

  const handleToggleCartClose = () => {
    console.log("click");
    setCart(false);
  };

  useEffect(() => {
    if (showCategories || showcart || loginPortal || locationPortal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCategories, showcart, loginPortal, locationPortal]);

  // Close categories popup on route change
  useEffect(() => {
    setShowCategories(false);
  }, [location.pathname]);

  // Custom Link component to handle popup close and navigation
  const CustomLink = ({ to, children, ...props }) => (
    <Link
      to={to}
      onClick={() => {
        setShowCategories(false);
        navigate(to);
      }}
      {...props}
    >
      {children}
    </Link>
  );

  return (
    <div className="header">
      <div className="container">
        <div className="main flex items-center justify-center">
          <div className="left_section flex gap-4 w-3/12">
            <div className="logo flex items-center">
              <Link to="/">
                <img src={Logo} alt="" width="72" />
              </Link>
            </div>
            <div className="location">
              <span onClick={() => setLocationPortal(!locationPortal)}>
                Detecting Location
              </span>
              {locationPortal && (
                <PortalPop onClose={LocationClose}>
                  <PinCode />
                </PortalPop>
              )}
            </div>
          </div>
          <div className="right_section flex items-center w-9/12 justify-between">
            <div className="search relative">
              <input type="text" placeholder="Search chicken & More" />
              <div className="submit_btn absolute top-0 right-4">
                <button title="submit">
                  <img src={Search} width="15" />
                </button>
              </div>
            </div>
            <div className="categories">
              <div className="Explore">
                <span
                  onClick={handleToggleCategories}
                  className="explore-categories"
                >
                  Explore Categories
                </span>
                <div
                  className={`shop-by-categories ${
                    showCategories ? "active" : ""
                  }`}
                  style={{ display: showCategories ? "block" : "none" }}
                >
                  <ShopByCategories />
                  <button
                    onClick={CategoriesHandleClose}
                    className="close-button"
                  >
                    Close
                  </button>
                </div>
                {showCategories && (
                  <div
                    className="overlay"
                    onClick={CategoriesHandleClose}
                  ></div>
                )}
              </div>
              <div id="portal-container"></div>
            </div>
            <div className="profile">
              <span onClick={() => setLoginPortal(!loginPortal)}>
                My profile
              </span>
              {loginPortal && (
                <PortalPop onClose={handleClose}>
                  <Login />
                </PortalPop>
              )}
            </div>
            <div className="miniCart">
              <span onClick={handleToggleCart} className="cart_icon"></span>
              <div
                className={`miniCartContent ${showcart ? "active" : ""}`}
                style={{ display: showcart ? "block" : "none" }}
              >
                <Cart />
                <button
                  onClick={handleToggleCartClose}
                  className="close-button"
                >
                  Close
                </button>
                {showcart && (
                  <div
                    className="overlay"
                    onClick={handleToggleCartClose}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
