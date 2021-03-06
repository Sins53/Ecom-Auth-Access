import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Adder from "./Adder";
import { addCart } from "../redux/actions/cart";
import { Link } from "react-router-dom";

const ListCard = (props) => {
  const { arrReduced } = props;

  const productList = useSelector((state) => state.product.products);
  const orderValue = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart.cart);
  const filterData = useSelector((state) => state.filter);
  const darkMode = useSelector((state) => state.dark.darkMode);

  const dispatch = useDispatch();

  const mlist = ["", "laptop", "mobile", "watch", "keyboard", "headseat"];
  var addedToCart;

  const toRs = (price) => {
    var rs = price;
    var arrRs = rs.split("$");
    arrRs.shift();
    var r = Number(arrRs[0]);
    r *= 120;
    return r;
  };

  var arr = productList.filter(checkFilter);

  function checkFilter(item) {
    var a = toRs(item.price);
    if (filterData.min <= a && a <= filterData.max) {
      if (filterData.category === 0) {
        return item;
      } else {
        if (mlist[filterData.category] === item.category[1]) {
          return item;
        }
      }
    }
  }

  if (arrReduced) {
    arr = arrReduced;
  }

  var imgUrl = "https://electronic-ecommerce.herokuapp.com/";

  const getDate = (createDate) => {
    var datetime = createDate;
    var date = new Date(datetime);
    var day = date.getDate() + "-";
    var month = date.getMonth() + 1 + "-";
    var year = date.getFullYear();
    var result = day + month + year;
    return result;
  };

  const updateCart = (item) => {
    Object.assign(item, { r: toRs(item.price), ordered: orderValue[item.id] });
    var arr = [];
    cart.forEach((citem) => {
      if (item.id !== citem.id) {
        arr.push(citem);
      }
    });
    addedToCart = [item, ...arr];
    var unique = [...new Set(addedToCart)];
    console.log(unique);
    dispatch(addCart(unique));
  };

  return (
    <>
      <div className="Body-list overflow-hidden ">
        <div className="row ">
          {arr.length === 0 ? <h1>Filter Again ....</h1> : null}
          {arr.map((item) => {
            return (
              <div className="col-lg-3 Body-list-card " key={item.id}>
                <div className="ListCard" id={item.id}>
                  <div
                    className={`ListCard-items p-3 bg-${
                      darkMode ? "secondary" : "light"
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    <Link to={`/product/${item.id}`}>
                      <div>
                        <img
                          className="ListCard-image"
                          src={imgUrl + item.image}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className="text-end mt-2">
                      <Adder id={item.id} stock={item.stock} />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                    </div>
                    <div>
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <h5>{`Rs. ${toRs(item.price)}`}</h5>
                        </div>
                        <div className="col-auto">
                          <h5
                            className={`ListCard-${
                              item.stock < 5
                                ? "danger"
                                : item.stock < 10
                                ? "ok"
                                : "full"
                            } text-end`}
                          >
                            {"Stock left: " + item.stock}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4>{`Released on: ${getDate(item.createDate)}`}</h4>
                    </div>
                    <div>
                      <button
                        className="ListCard-btn"
                        onClick={() => updateCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br /> <br /> <br />
      </div>
    </>
  );
};

export default ListCard;
