import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BlogPage from "../blog";
import ContactUsPage from "../contactUs";
import HomePage from "../home";
import ShopPage from "../shop";

function MainPage() {
  return (
    <div>
      MainPage
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
      </ul>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainPage;
