import React, { useRef, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import useNewApi from "../../CustomHooks/useNewApi";
import { CommonForm, UserForm } from "./ReusedForm";
import { useDispatch } from "react-redux";
import { dataAdded } from "../../redux/action/dataAdded";

const UpdateModal = (props) => {
  const { name, extra, refname, refemail, url, id } = props;
  const { putData, getData } = useNewApi();

  const sname = useRef(null);
  const sdescription = useRef(null);
  const pswd = useRef(null);

  const dispatch = useDispatch();

  const fixIt = refname.split(" ");
  const fixedIt = fixIt.join("");

  useEffect(() => {
    sname.current.value = refname;
    sdescription.current.value = refemail;
    dispatch(dataAdded());
  }, [id]);

  const submitData = () => {
    var name = sname.current.value;
    var description = sdescription.current.value;
    putData(`${url}/${id}`, { name, description });
    sname.current.value = "";
    sdescription.current.value = "";
    dispatch(dataAdded());
    // getData(props.url);
  };
  const submitUser = () => {
    var name = sname.current.value;
    var email = sdescription.current.value;
    var password = pswd.current.value;
    putData(`${url}/${id}`, { name, email, password });
    sname.current.value = "";
    sdescription.current.value = "";
    dispatch(dataAdded());
    // console.log(name, email, password);
  };

  return (
    <>
      <div>
        <i data-bs-toggle="modal" data-bs-target={`#${fixedIt}`}>
          <MdModeEditOutline />
        </i>
      </div>

      <div
        className={`modal fade ${fixedIt}`}
        id={fixedIt}
        tabindex="-1"
        aria-labelledby={`${fixedIt}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="UpdateModal-header">
                <h3>{"Update " + props.name}</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container UpdateModal-body text-start">
                  {props.extra === true ? (
                    <UserForm
                      sname={sname}
                      sdescription={sdescription}
                      pswd={pswd}
                    />
                  ) : (
                    <CommonForm sname={sname} sdescription={sdescription} />
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className={`text-end UpdateModal-footer ${fixedIt}-footer`}>
                {extra === true ? (
                  <button
                    className="btn btn-primary"
                    onClick={submitUser}
                    data-bs-dismiss="modal"
                  >
                    Update User
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={submitData}
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                )}

                <button
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
