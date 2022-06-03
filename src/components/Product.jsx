import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [showproduct, setshowproduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((r) => {
      console.log(r);
      setshowproduct(r.data);
    });
  }, [id]);

  return (
    <div>
      {id !== "not" ? (
        <>
          <h2>Product ID: {showproduct.id+1}</h2>
          <h2>Product Name: {showproduct.name}</h2>
          <h2>Product Prices: {showproduct.price}</h2>
          <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/design_display_pro__d3dtminb414y_large.png" alt="" srcset="" />
        </>
      ) : (
        <>
          <div className="page-wrap d-flex flex-row align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <span className="display-1 d-block">404</span>
                  <div className="mb-4 lead">
                    The page you are looking for was not found.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
