import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addapidata } from "../../../../../../redux/apiredux/ApiSlice";
import AddSuccess from "../../popup/AddSuccess";
import Loader from "../../popup/Loader";
import Error from "../../../../../error/Error";

const Add = () => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seodata);
  // Redux State

  // Input State Management
  const [inputValue, setInputValue] = useState({
    title: "",
    path: "",
    project: "",
  });
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(e.target.name, "seo-target-data");
  };
  // Input State Management

  // Validation Input
  const [errors, setErrors] = useState({
    title: "",
    path: "",
    project: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      title: "",
      path: "",
      project: "",
    };

    if (inputValue.title.trim() === "") {
      newErrors.title = "Enter Meta Title";
      valid = false;
    }
    if (inputValue.path.trim() === "") {
      newErrors.path = "Enter Meta Author";
      valid = false;
    }
    if (inputValue.project.trim() === "") {
      newErrors.project = "Enter Meta Keyword";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return true;
    }
    const resultAction = await dispatch(addapidata(inputValue));
    if (addapidata.fulfilled.match(resultAction)) {
      setsuccess(true);
      setInputValue({
        title: "",
        path: "",
        project: "",
      });
    } else {
      alert(
        "Failed to add SEO data: " + (resultAction.payload || "Unknown error")
      );
    }
  };
  // Submit Data

  // Loading and Error
  if (loading) {
    return (
      <div className="flex justify-center items-center h-100">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-100">
        <Error />
      </div>
    );
  }
  // Loading and Error

  return (
    <div className="p20 cust-scroll">
      {success ? (
        <div className="fixed flex justify-center items-center bg-glass top-0 left-0 h-100 z-999 w-full">
          <AddSuccess
            title="Add Api"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Title</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Title"
              value={inputValue.title}
              onChange={handleInput}
              name="title"
            />
            {errors.title && (
              <p className="textdanger mtpx6 fsize13">{errors.title}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Path</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Path"
              value={inputValue.path}
              onChange={handleInput}
              name="path"
            />
            {errors.path && (
              <p className="textdanger mtpx6 fsize13">{errors.path}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Project</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Project"
              value={inputValue.project}
              onChange={handleInput}
              name="project"
            />
            {errors.project && (
              <p className="textdanger mtpx6 fsize13">{errors.project}</p>
            )}
          </div>
        </div>
        <div className="mtpx15 flex justify-center">
          <button
            type="submit"
            className="border-0 cursor-pointer w-full font-500 textwhite ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 rounded-5 bgprimary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
