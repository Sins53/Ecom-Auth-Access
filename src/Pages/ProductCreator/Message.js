import React from "react";
import useNote from "../../CustomHooks/useNote";

const Message = () => {
  const { displayNotice } = useNote(
    "Search item By Name to see 1 product or select all to display all products.."
  );
  return (
    <>
      {displayNotice}
      <div className="Creator-Message-Body">
        <div className="creator-message">
          <p>
            You Have Been Given Creator Privileges!!
            <span>Create, Update or Delete Products</span>
            &mdash; Product Manager &mdash;
          </p>
        </div>
      </div>
    </>
  );
};

export default Message;
