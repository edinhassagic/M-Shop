import React from "react";
import { useLocation } from "react-router-dom";
import "./SingleItem.css";
import model from "../../../public/model.svg";
import year from "../../../public/year.svg";
import fuel from "../../../public/fuel.svg";
import mileage from "../../../public/mileage.svg";
import transmition from "../../../public/transmition.svg";
import { itemlist } from "../../assets/data";

const SingleItem = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  // const itemName = params.get("name");
  // const itemModel = params.get("model");
  // const itemYear = params.get("year");
  // const itemFuel = params.get("fuel");
  // const itemPrice = params.get("price");
  // const itemMileage = params.get("mileage");
  // const itemCategory = params.get("category");
  // const itemImg = params.get("img");
  // const itemTransmition = params.get("transmition");
  // const itemDescription = params.get("description");
  // const itemLogo = params.get("logo");
  const itemID = params.get("id")
  const selectedItem = itemlist.find(item => item.id === itemID);

  console.log(selectedItem)


  return (
    <>
      <div className="single-item-main-wrapper">
        <div className="single-item-container">
          <div className="img-header-price-wrapper">
            <div className="car-details-image">
              <img src={selectedItem.img} alt={selectedItem.name} />

              <p>{selectedItem.description}</p>
            </div>

            <div className="car-details-header">
              <h1>{selectedItem.name}</h1>
            </div>

            <div className="price-details">
              <h2>{selectedItem.price} KM</h2>
              <p>Price with tax</p>
            </div>
          </div>

          <div className="car-details-icons-row-container ">
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={selectedItem.logo}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Manifacturer: </span>
                <p>{selectedItem.category}</p>
              </div>
            </div>
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={model}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Model: </span>
                <p>{selectedItem.model}</p>
              </div>
            </div>
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={year}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Year: </span>
                <p>{selectedItem.year}</p>
              </div>
            </div>
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={fuel}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Fuel: </span>
                <p>{selectedItem.fuel}</p>
              </div>
            </div>
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={mileage}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Mileage: </span>
                <p>{selectedItem.mileage}</p>
              </div>
            </div>
            <div className="car-details-icons-wrapper">
              <img
                style={{ width: "30px", height: "30px" }}
                src={transmition}
                alt={"logo-img"}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Transmision: </span>
                <p>{selectedItem.transmision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
