import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import FormComp from "./form";
const Fetchdata = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(" http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const convertdata = await response.json();
        console.log(convertdata);
        setdata(convertdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <div>
      <div className="container">
        {data.map((details, index) => {
          return (
            <div className="card" key={index} style={{ width: "18rem" }}>
              <img className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{details.productName}</h5>
                <p className="card-text">{details.productDescription}</p>
                <h6 className="card-text">{details.productPrice}</h6>
                <Link to="/form" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
          
      </div>
    </div>
    
  );
};

export default Fetchdata;
