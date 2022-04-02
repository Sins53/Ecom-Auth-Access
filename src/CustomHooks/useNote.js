import React, { useRef } from "react";
import { GrClose } from "react-icons/gr";

const useNote = (str) => {
  const noticeDiv = useRef(null);
  function handleClick() {
    // alert("ok");
    noticeDiv.current.style.display = "none";
  }
  var displayNotice = (
    <>
      <div ref={noticeDiv} className="container-fluid bg-info pt-2">
        <div className="row justify-content-between">
          <div className="col-10 text-danger text-center">
            <h4>{str}</h4>
          </div>
          <div className="col-1 text-end mr-3">
            <button className="btn btn-info" onClick={handleClick}>
              <GrClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return { displayNotice };
};

export default useNote;
