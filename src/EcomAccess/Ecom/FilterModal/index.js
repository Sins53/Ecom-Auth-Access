import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterData, setFilterData } from "../../../redux/actions/filter";
import { FaFilter } from "react-icons/fa";
import Select from "react-select";

const FilterModal = () => {
  const [displayModal, setDisplayModal] = useState("none");
  const [category, setCategory] = useState([]);

  const productList = useSelector((state) => state.product.products);

  const modal = useRef(null);
  const min = useRef(null);
  const max = useRef(null);
  // const category = useRef(null);

  const dispatch = useDispatch();

  const unique = [...new Set(productList.map((item) => item.category[1]))];

  const display = () => {
    setDisplayModal("block");
  };
  const close = () => {
    setDisplayModal("none");
  };
  window.onclick = function (event) {
    if (event.target === modal.current) {
      setDisplayModal("none");
    }
  };
  const setFilter = () => {
    var fmin = min.current.value;
    var fmax = max.current.value;
    var fc = category.value;
    if (category.value === undefined) {
      // alert("triggered");
      fc = 0;
    }
    dispatch(setFilterData(fmin, fmax, fc));
    console.log(fmin, fmax, "----", fc);
  };

  const resetFilter = () => {
    dispatch(resetFilterData());
    min.current.value = "";
    max.current.value = "";
  };

  var i = 0;
  var options = [{ value: i, label: "Select All" }];
  const screens = unique.forEach((item) => {
    i++;
    options.push({ value: i, label: item });
  });

  const sendFilter = (value) => {
    console.log(typeof value);
    dispatch(setFilterData(0, value, 0));
  };

  return (
    <>
      <button className="btn btn-primary" onClick={display}>
        <FaFilter />
        <h4 className="Filter-btn" style={{ display: "inline" }}>
          Filter
        </h4>
      </button>

      <div
        ref={modal}
        id="myModal"
        className="Custom-modal text-start"
        style={{ display: displayModal }}
      >
        <div className="Custom-modal-content">
          <div className="modal-header Custom-modal-header">
            <div>
              <h3 className="modal-title" id="cartModalLabel">
                Filter
              </h3>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mt-1">
              <h4>New Arrivals</h4>
              <h4>Price</h4>
              <ul>
                <li onClick={() => sendFilter(25000)}>Under 25K</li>
                <li onClick={() => sendFilter(75000)}>Under 75K</li>
                <li onClick={() => sendFilter(150000)}>Under 150K</li>
                <li onClick={() => sendFilter(200000)}>Under 200K</li>
                <li onClick={() => sendFilter(300000)}>Under 300K</li>
              </ul>
              <div className="text-center">
                <label>Min</label>
                <input
                  ref={min}
                  type="text"
                  style={{
                    width: "6rem",
                    border: "2px solid green",
                    borderRadius: "9px",
                  }}
                  className="mr-3 ml-3"
                />
                <label> -</label>
                <input
                  className="ml-3 mr-3"
                  ref={max}
                  type="text"
                  style={{
                    width: "6rem",
                    border: "2px solid green",
                    borderRadius: "9px",
                  }}
                />
                <label>Max</label>
              </div>
              <h4 className="mt-3 mb-3">Category</h4>
              <Select options={options} onChange={setCategory} isSearchable />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={resetFilter}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={setFilter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
