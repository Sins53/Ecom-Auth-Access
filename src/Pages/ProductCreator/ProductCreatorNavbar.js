import React, { useState } from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar } from "cdbreact";
import pic from "../../assets/images/profile-pic.jpg";
import Select from "react-select";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCreatorNavbar = () => {
  const [search, setSearch] = useState([]);
  const creatorProductList = useSelector(
    (state) => state.creatorProduct.products
  );
  const navigate = useNavigate();

  var options = [{ value: 0, label: "Select All" }];
  creatorProductList.forEach((item) => {
    options.push({ value: item.id, label: item.name });
  });

  const searchItem = () => {
    if (search.value === undefined || search.value === 0) {
      alert("triggered");
    } else {
      console.log(search.value);
      navigate(`/productcreator/${search.value}`);
    }
  };

  return (
    <Header style={{ background: "#333", color: "#fff" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <div className="row text-dark ml-5">
          <div className="col-auto" style={{ width: "25rem" }}>
            <Select
              options={options}
              onChange={setSearch}
              isSearchable
              isClearable
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={searchItem}>
              Search
            </button>
          </div>
        </div>
        <div className="ml-auto p-3">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <img
            alt="panelImage"
            src={pic}
            style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
          />
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default ProductCreatorNavbar;
