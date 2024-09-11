import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatebrand } from "../../../../../../../../redux/managementredux/BrandSlice";
import EditSuccess from "../../../../popup/EditSuccess";
import Loader from "../../../../popup/Loader";
import Error from "../../../../../../../error/Error";
import FeatherIcon from "feather-icons-react";

const EditBrand = (props) => {
  // Popup State
  const [success, setsuccess] = useState(false);
  // Popup State

  // Redux State
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.branddata);
  // Redux State

  // Input State Management
  const [formData, setFormData] = useState({
    title: "",
    picture: null,
    imagePreviewUrl: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          picture: file,
          imagePreviewUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prevState) => ({
      ...prevState,
      picture: null,
      imagePreviewUrl: "",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Input State Management

  // API
  useEffect(() => {
    setFormData({
      title: props.editshow.title,
      picture: props.editshow.picture,
      imagePreviewUrl: props.editshow.picture,
    });
  }, [props.editshow]);
  // API

  // Validation Input
  const [errors, setErrors] = useState({
    title: "",
    picture: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      sectionid: "",
      title: "",
      subtitle: "",
      description: "",
      picture: "",
    };

    if (formData.title.trim() === "") {
      newErrors.title = "Enter Title";
      valid = false;
    }
    if (!formData.picture) {
      newErrors.picture = "Select Picture";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  // Validation Input

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("title", formData.title);
      updatedData.append("picture", formData.picture);

      const resultAction = await dispatch(
        updatebrand({
          id: props.editshow._id,
          formData: updatedData,
        })
      );

      if (updatebrand.fulfilled.match(resultAction)) {
        setsuccess(true);
      } else {
        alert(
          "Failed to update project: " +
            (resultAction.payload || "Unknown error")
        );
      }
    } catch (error) {
      // Log the error and alert the user
      console.error("Error updating project:", error);
      alert("Failed to update project");
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
            title="Edit Service"
            description="placeholder text commonly used to demonstrate the visual form of a
            document or a typeface content."
          />
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="fsize14 textgray">Image</label>
          <div className="mtpx8">
            <div className="relative">
              <div className="border-images">
                <div>
                  <FeatherIcon
                    icon="upload-cloud"
                    className="textprimary flex mx-auto"
                    size={30}
                  />
                  <p className="mtpx5 textgray text-center fsize12">
                    Upload here your Image
                  </p>
                </div>
              </div>
              <input
                className="img-input absolute top-0 left-0"
                placeholder="Enter CMS Data"
                type="file"
                onChange={handleFileChange}
                name="picture"
                id="picture"
                aria-label="picture"
              />
              <div className="absolute top-0 left-0 w-full">
                {formData.imagePreviewUrl && (
                  <div className="relative">
                    <img
                      src={formData.imagePreviewUrl}
                      alt="ImagePreview"
                      className="w-full object-cover preview-img rounded-5"
                    />
                    <div className="absolute top-0 right-0 m5">
                      <div
                        className="close shadow flex justify-center items-center bgprimary rounded-full cursor-pointer"
                        onClick={handleRemoveImage}
                      >
                        <FeatherIcon
                          icon="x"
                          className="textwhite flex"
                          size="14"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {errors.cmsdata && (
              <p className="textdanger mtpx6 fsize13">{errors.cmsdata}</p>
            )}
          </div>
        </div>
        <div className="mtpx15">
          <label className="fsize14 textgray">Title</label>
          <div className="mtpx8">
            <input
              className="side-input bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleInputChange}
              name="title"
              id="title"
              aria-label="title"
            />
            {errors.title && (
              <p className="textdanger mtpx6 fsize13">{errors.title}</p>
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

export default EditBrand;
