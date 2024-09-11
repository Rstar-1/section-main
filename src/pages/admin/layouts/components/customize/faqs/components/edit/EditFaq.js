import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatefaqdata
} from "../../../../../../../../redux/managementredux/FaqSlice";
import EditSuccess from "../../../../popup/EditSuccess";
import Loader from "../../../../popup/Loader";
import Error from "../../../../../../../error/Error";

const EditFaq = (props) => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.faqdata);
  let id = props.editshow._id;
  // Redux State

  // Input State Management
  const [SectionId, setSectionId] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  // Input State Management

  // Validation Input
  const [errors, setErrors] = useState({
    title: "",
    sectionid: "",
    description: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {
      title: "",
      sectionid: "",
      description: "",
    };

    if (Title.trim() === "") {
      newErrors.title = "Enter Meta Title";
      valid = false;
    }
    if (SectionId.trim() === "") {
      newErrors.sectionid = "Enter Section Id";
      valid = false;
    }
    if (Description.trim() === "") {
      newErrors.description = "Enter Description";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // API
  useEffect(() => {
    const EditUser = async () => {
      setSectionId(props.editshow.sectionid);
      setTitle(props.editshow.title);
      setDescription(props.editshow.description);
    };
    EditUser();
  }, [dispatch, id, props.editshow]);
  // API

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = {
        sectionid: SectionId,
        title: Title,
        description: Description,
      };
      await dispatch(updatefaqdata({ id, data }));
      setsuccess(true);
    } catch (error) {
      console.error("Error updating user:", error);
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
          <EditSuccess
            title="Edit FAQ"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Meta Title</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
            {errors.title && (
              <p className="textdanger mtpx6 fsize13">{errors.title}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Section Id</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter SectionId"
              value={SectionId}
              onChange={(e) => setSectionId(e.target.value)}
              name="sectionid"
            />
            {errors.sectionid && (
              <p className="textdanger mtpx6 fsize13">{errors.sectionid}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Meta Description</label>
          <div className="mtpx8">
            <textarea
              className="side-input bgwhite textgray fsize14 rounded-5 plpx10 ptpx5 border-ec"
              placeholder="Enter Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            ></textarea>
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

export default EditFaq;
