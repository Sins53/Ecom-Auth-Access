import React from "react";
import BodyList from "./BodyList";
import BodyTitle from "./BodyTitle";
import { useSelector } from "react-redux";

const Body = () => {
  const darkMode = useSelector((state) => state.dark.darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container pt-5">
        <BodyTitle />
        <BodyList />
      </div>
    </div>
  );
};

export default Body;
