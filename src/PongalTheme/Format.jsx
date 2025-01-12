import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Format() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid d-flex">
          <div className="d-flex align-items-center">
            <img
              src="https://png.pngtree.com/png-clipart/20240915/original/pngtree-cultural-pongal-design-with-traditional-pot-symbol-png-image_16012690.png"
              alt="Pongal Design"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}/>
            <a className="navbar-brand" href="#">Traditionss</a>
          </div>

          <div className="flex-grow-1">
            <ul className="navbar-nav d-flex justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/pongal">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dance">Folk Dance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/kolam">Kolam</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

    </>
  );
}









