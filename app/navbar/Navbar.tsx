"use client";

import React, { useState } from 'react';
import { AlignJustify, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFashionOpen, setIsFashionOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFashionClick = () => {
    setIsFashionOpen(!isFashionOpen);
  };

  return (
    <div className="navbar bg-base-100 px-4 border-b border-black">
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <button onClick={handleMenuClick} className="btn btn-ghost btn-circle">
            <AlignJustify className="h-5 w-5" />
          </button>
          {isMenuOpen && (
            <div>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li tabIndex={0}>
                  <a className="justify-between" onClick={handleFashionClick}>
                    Fashion
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </a>
                  {isFashionOpen && (
                    <ul className="p-2 bg-base-100">
                      <li><a>Shirts</a></li>
                      <li><a>Cargos</a></li>
                      <li><a>Graphic T shirts</a></li>
                    </ul>
                  )}
                </li>
                <li><a>Cart & Checkout</a></li>
                <li><a>Contact Page</a></li>
                <li><a href="/about_us">About Us</a></li>
              
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Left Section - Brand Name */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Gsnag</a>
      </div>
      {/* Centered Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full pl-10 text-gray-600"
          />
          {/* Search Icon Inside Input */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm8 2l-4.35-4.35"
            />
          </svg>
        </div>
      </div>

      {/* Right Section - Cart & Profile Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          {/* Cart Dropdown Content */}
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 shadow mt-3 w-52 p-2">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <User className="pl-2 h-8 w-8" />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 shadow mt-3 w-52 rounded-box p-2">
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
