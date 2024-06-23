import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero2";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import KoreanBooks from "./pages/KoreanBooks"; // KoreanBooks 컴포넌트 import
import Foreignbooks from "./pages/Foreignbooks";
import AllBooks from "./pages/Allbooks";
import ShoppingCart from "./pages/ShoppingCart"

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavbarComponent handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Services handleOrderPopup={handleOrderPopup} />
              <Banner />
              <AppStore />
              <Books />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route path="/korean-books" element={<KoreanBooks />} />
        <Route path="/foreign-books" element={<Foreignbooks />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
