import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import pic from "../../../assets/images/profile-pic.jpg";
import ListCard from "../../../Components/ListCard";

const mlist = ["", "laptop", "mobile", "watch", "keyboard", "headseat"];
const Promotions = (props) => {
  const productList = useSelector((state) => state.product.products);

  const { darkMode } = props;
  var a = "light";
  if (darkMode) {
    a = "dark";
  } else {
    a = "light";
  }

  var arrReduced = [];
  if (productList !== []) {
    var arr = [];
    var i = 1;
    var q = productList;
    q.forEach((item) => {
      if (item.category[1] === mlist[i]) {
        arr.push(item);
        i++;
      }
    });
    arr.pop();
    console.log(arr);
    arrReduced = arr;
  }
  return (
    <>
      <div className="container">
        <h3>Promotions</h3>
        <ListCard arrReduced={arrReduced} />{" "}
      </div>
    </>
  );
};

export default Promotions;
