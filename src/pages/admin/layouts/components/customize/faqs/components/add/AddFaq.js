import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addfaqdata } from "../../../../../../../../redux/managementredux/FaqSlice";
import AddSuccess from "../../../../popup/AddSuccess";
import Loader from "../../../../popup/Loader";
import Error from "../../../../../../../error/Error";

const AddFaq = () => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.faqdata);
  // Redux State

  // Input State Management
  const [inputValue, setInputValue] = useState({
    sectionid: "",
    title: "",
    description: "",
  });
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(e.target.name, "faq-target-data");
  };
  // Input State Management

  // Validation Input
  const [errors, setErrors] = useState({
    sectionid: "",
    title: "",
    description: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      sectionid: "",
      title: "",
      description: "",
    };

    if (inputValue.sectionid.trim() === "") {
      newErrors.sectionid = "Enter Meta Title";
      valid = false;
    }
    if (inputValue.title.trim() === "") {
      newErrors.title = "Enter Meta Author";
      valid = false;
    }
    if (inputValue.description.trim() === "") {
      newErrors.description = "Enter Meta Keyword";
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
      return;
    }
    const resultAction = await dispatch(addfaqdata(inputValue));
    if (addfaqdata.fulfilled.match(resultAction)) {
      setsuccess(true);
      setInputValue({
        sectionid: "",
        title: "",
        description: "",
      });
    } else {
      alert(
        "Failed to add faq data: " + (resultAction.payload || "Unknown error")
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
            title="Add FAQ"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Section Id</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Section Id"
              value={inputValue.sectionid}
              onChange={handleInput}
              name="sectionid"
            />
            {errors.sectionid && (
              <p className="textdanger mtpx6 fsize13">{errors.sectionid}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
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
          <label className="fsize14 textgray">Description</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Description"
              value={inputValue.description}
              onChange={handleInput}
              name="description"
            />
            {errors.description && (
              <p className="textdanger mtpx6 fsize13">{errors.description}</p>
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

export default AddFaq;
