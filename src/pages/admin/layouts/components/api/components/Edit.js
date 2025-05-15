import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateapidata } from "../../../../../../redux/apiredux/ApiSlice";
import EditSuccess from "../../popup/EditSuccess";
import Loader from "../../popup/Loader";
import Error from "../../../../../error/Error";

const Edit = (props) => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seodata);
  let id = props.editshow._id;
  // Redux State

  // Input State Management
  const [Title, setTitle] = useState("");
  const [Path, setPath] = useState("");
  const [Project, setProject] = useState("");
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

    if (Title.trim() === "") {
      newErrors.title = "Enter Meta Title";
      valid = false;
    }
    if (Path.trim() === "") {
      newErrors.path = "Enter Meta Author";
      valid = false;
    }
    if (Project.trim() === "") {
      newErrors.project = "Enter Meta Keyword";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // API useEffect
  useEffect(() => {
    const EditUser = async () => {
      setTitle(props.editshow.title);
      setPath(props.editshow.path);
      setProject(props.editshow.project);
    };
    EditUser();
  }, [dispatch, id, props.editshow]);
  // API useEffect

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = {
        title: Title,
        path: Path,
        project: Project,
      };
      await dispatch(updateapidata({ id, data }));
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
            title="Edit Api"
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
          <label className="fsize14 textgray">Path</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Path"
              value={Path}
              onChange={(e) => setPath(e.target.value)}
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
              value={Project}
              onChange={(e) => setProject(e.target.value)}
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

export default Edit;
