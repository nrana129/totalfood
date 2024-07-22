import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import ListPage from "./pages/ListPage";
import About from "./pages/about-us/About";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import ShippingPolicy from "./pages/shipping-policy/ShippingPolicy"
import TermsCondition from "./pages/terms-condition/TermsCondition"
import ProductDetail from "./pages/ProductDetail"


// import Blog from "./pages/Blog/Blog";
// import Contact from "./pages/Contact/Index";
import FAQPage from "./pages/faq/Faq";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./assets/css/theme.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="listPage" element={<ListPage />} />
        <Route path="about-us" element={<About />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="terms-condition" element={<TermsCondition />} />
        <Route path="product-detail" element={<ProductDetail />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
