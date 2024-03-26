import React from "react";
import "./Home.css";
import Pagination from "./Pagination/Pagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { itemlist } from "../../assets/data";
import { useCart } from "../Layout/provider"
import Alert from "./Alert/alert";

const Home = () => {

  const { cartData, addItemToCart, cartCount , incrementCartCount, showAlert }= useCart()

  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortedItemList, setSortedItemList] = useState(itemlist);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [indexOfLastRecord, setIndexOfLastRecord] = useState(
    currentPage * recordsPerPage
  );
  const [indexOfFirstRecord, setIndexOfFirstRecord] = useState(
    indexOfLastRecord - recordsPerPage
  );

  const [currentRecords, setCurrentRecords] = useState(
    sortedItemList.slice(indexOfFirstRecord, indexOfLastRecord)
  );
  const [nPages, setNPages] = useState(
    Math.ceil(sortedItemList.length / recordsPerPage)
  );

  const resetPagination = () => {
    setCurrentPage(1);

  }

  useEffect(() => {
    setCurrentRecords([]);

    setCurrentRecords(
      sortedItemList.slice(indexOfFirstRecord, indexOfLastRecord)
    );

    setNPages(Math.ceil(sortedItemList.length / recordsPerPage));
  }, [sortedItemList, indexOfFirstRecord, indexOfLastRecord, recordsPerPage]);

  useEffect(() => {
    changeNumbers();
  }, [currentPage, currentRecords]);

  const changeNumbers = async () => {
    const newIndexOfLastRecord = currentPage * recordsPerPage;

    setIndexOfFirstRecord(newIndexOfLastRecord - recordsPerPage);

    setIndexOfLastRecord(newIndexOfLastRecord);
  };
  const filterByPrice = () => {
    let filteredItems;

    if (minPrice !== "" && maxPrice === "") {
      filteredItems = sortedItemList.filter((item) => item.price >= minPrice);
    } else if (minPrice === "" && maxPrice !== "") {
      filteredItems = sortedItemList.filter((item) => item.price <= maxPrice);
    } else {
      filteredItems = sortedItemList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    setSelectedPriceRange(true);
    setSortedItemList(filteredItems);
    resetPagination();
  };


  const sortByHighestPrice = () => {
    const sortedItems = [...sortedItemList].sort((a, b) => b.price - a.price);
    setSortedItemList(sortedItems);

  };

  const sortByLowestPrice = () => {
    const sortedItems = [...sortedItemList].sort((a, b) => a.price - b.price);
    setSortedItemList(sortedItems);
  };

  useState(() => {
    const uniqueCategories = new Set(itemlist.map((item) => item.category));
    setCategories(Array.from(uniqueCategories));
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const sortedItems = itemlist.filter((item) =>
        selectedCategories.includes(item.category)
      );
      setSortedItemList(sortedItems);
    } else {
      setSortedItemList(itemlist);
    }
  }, [selectedCategories]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (category === "") {
      setSelectedCategories([]);

    } else {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(
          selectedCategories.filter((cat) => cat !== category)
        );
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }

    resetPagination()

  };
  const removeCategory = (categoryToRemove) => {
    setSelectedCategories(selectedCategories.filter(category => category !== categoryToRemove));
    resetPagination()

  }
  const removeFilterByPrice = () => {
    if (selectedCategories.length > 0) {
      const sortedItems = itemlist.filter((item) =>
        selectedCategories.includes(item.category)
      );
      setSortedItemList(sortedItems);
    } else {
      setSortedItemList(itemlist);
    }

    setSelectedPriceRange(false);
    setMinPrice("");
    setMaxPrice("");
    resetPagination()
  }

  const buyNowButton = () => {
    navigate("/cart");
  };

 
  return (
    <><div>

      {showAlert && <Alert message={"Successfully added to cart."}/>}
    </div>
      <div className="user-action">
        <div className="filter-container">
          <div>
            <select onChange={handleCategoryChange}>
              <option value="" >All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value)
                setSelectedPriceRange(false)
              }}
            />
            <input
              type="number"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value)
                setSelectedPriceRange(false)
              }}
            />
            {!selectedPriceRange && <button onClick={filterByPrice} disabled={minPrice === "" && maxPrice === ""}>Filter by price</button>}
            {selectedPriceRange && <button onClick={removeFilterByPrice}>Remove price</button>}

          </div>

          <div className="sort">
            <button onClick={sortByHighestPrice}>
              <i className="fa-solid fa-arrow-up-wide-short"></i>
            </button>
            <button onClick={sortByLowestPrice}><i className="fa-solid fa-arrow-up-wide-short fa-rotate-180"></i></button>
          </div>
          <div className="selected-categories">
            {selectedCategories.length > 0 && (
              <div className="selected-category-list">
                {selectedCategories.map((category, index) => (
                  <div
                    key={index}
                    className="selected-category-item"
                    onClick={() => removeCategory(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
      <div className="home-wrapper">

        <div className="card-container">
          {currentRecords.map((item, index) => (
            <Card key={index} className="item-card">
              <CardActionArea>
              <Link to={`/single-item?id=${item.id}`} className="card-link">
                <CardMedia
                  component="img"
                  height="250"
                  image={item.img}
                  alt={item.name}
                />
                </Link>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="item-heading"
                  >
                    {item.name}
                  </Typography>
                  <div className="item-description">
                    <Typography variant="body2" color="text.secondary">
                      Category: {item.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price}
                    </Typography>
                  </div>



                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={buyNowButton}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Buy now
                </Button>
                <Button
                  onClick={()=>incrementCartCount(item)}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>

          ))}
        </div>



      </div>
      <div>{currentRecords.length > 0 && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}</div>
    </>
  );
};



export default Home;
