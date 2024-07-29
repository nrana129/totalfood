import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const Qtycounter = useSelector((state) => state.Qtycounter);
  const [isQtySectionVisible, setIsQtySectionVisible] = useState(false);

  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCounter = () => {
    if (Qtycounter > 0) {
      dispatch({ type: 'DECREMENT' });
    }
  };

  useEffect(() => {
    if (Qtycounter > 0) {
      setIsQtySectionVisible(true);
    } else {
      setIsQtySectionVisible(false);
    }
  }, [Qtycounter]);

  return (
    <div className="right_section">
      <div className="category-image">
        <img
          src="https://totalfood.greenhonchos.in/media/catalog/category/chicken-cate.jpg"
          alt="Chicken"
          title="Chicken"
          className="image"
        />
      </div>

      <div className="toolbar toolbar-products">
        <p className="toolbar-amount" id="toolbar-amount">
          6 Choices
        </p>
        <div className="toolbar-sorter sorter">
          <label className="sorter-label kkk" htmlFor="sorter">
            Sort By :
          </label>
          <select id="sorter" data-role="sorter" className="sorter-options">
            <option value="position" defaultValue>
              Position
            </option>
            <option value="price">Price </option>
          </select>
        </div>
      </div>

      <div className="products">
        <li className="product">
          <div className="discount_offer">
            <div className="flag_bg">
              <span>40%</span>
              <span>off</span>
            </div>
          </div>

          <Link to="/product-detail">
            <span className="product-image-container product-image-container-60">
              <span className="product-image-wrapper">
                <img
                  className="product-image-photo"
                  src="https://totalfood.greenhonchos.in/media/catalog/product/cache/02792f3e53b544aade9635c5ab3089b6/4/_/4.jpg"
                  loading="lazy"
                  width="400"
                  height="400"
                  alt="Frozen Chicken Precut"
                />
              </span>
            </span>
          </Link>

          <div className="product_detail">
            <strong className="product name product-item-name">
              <a
                className="product-item-link"
                href="https://totalfood.greenhonchos.in/frozen-chicken-precut.html"
              >
                Frozen Chicken Precut
              </a>
            </strong>

            <div className="product-item-inner">
              <select name="500gm" id="">
                <option value="500gm">550gm</option>
                <option value="500gm">550gm</option>
                <option value="500gm">550gm</option>
              </select>
            </div>

            <div className="pieces_sec">
              <span>Serves 2.5 </span>
              <span>10-12Pieces</span>
            </div>
          </div>

          <div className="botom_box">
            <div className="pricebox">
              <span className="price">₹175.00</span>
            </div>

            <div className="main_select">
              {!isQtySectionVisible && (
                <div className="add_button">
                  <span
                    className="add_cart"
                    onClick={() => {
                      incrementCounter();
                      setIsQtySectionVisible(true);
                    }}
                  >
                    add
                  </span>
                </div>
              )}
              {isQtySectionVisible && (
                <div className="qty_section">
                  <button className="minus_qty" onClick={decrementCounter}>
                    -
                  </button>
                  <span>{Qtycounter}</span>
                  <button className="plus_qty" onClick={incrementCounter}>
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Product;
