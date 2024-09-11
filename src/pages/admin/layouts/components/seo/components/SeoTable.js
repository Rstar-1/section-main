import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  showseodata,
  deleteseodata,
  updateseodata,
} from "../../../../../../redux/seoredux/SeoSlice";
import AddSeo from "./add/AddSeo";
import EditSeo from "./edit/EditSeo";
import Nodata from "../../../../../error/Nodata";

const SeoTable = () => {
  // Add Edit Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  // Add Edit Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.seodata);
  // Redux State

  // API
  useEffect(() => {
    dispatch(showseodata());
  }, [dispatch]);
  // API

  // Delete Data
  const handleDelete = async (id) => {
    try {
      const resultAction = await dispatch(deleteseodata(id));
      if (deleteseodata.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(showseodata());
      } else {
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  // Delete Data

  // Status
  const handlePublish = async (id, newstatus) => {
    try {
      const data = {
        status: newstatus,
      };
      await dispatch(updateseodata({ id, data }));
      dispatch(showseodata());
      // Optionally handle success or failure here
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  // Status

  return (
    <div className="drawer">
      <div
        className={
          addshow === true
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Add Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setaddshow(false)}
              />
            </div>
          </div>
          <AddSeo />
        </div>
      </div>
      <div
        className={
          editshow
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Edit Seo
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <EditSeo editshow={editshow} />
        </div>
      </div>
      <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
        <h4 className="fsize22 md-fsize20 sm-fsize18 textprimary mtpx1 mbpx1">
          SEO
        </h4>
        <div className="my10 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className="w-40 flex justify-end">
            <button
              onClick={() => setaddshow(true)}
              className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 bgprimary"
            >
              Add
            </button>
          </div>
        </div>
        <div className="border-ec sm-border-none rounded-10 p16 sm-p1 sm-rounded-5 mtpx20 md-mtpx16 sm-mtpx14">
          <div className="table-w">
            {getdata.seodata && getdata.seodata.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Meta Title</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Meta Author</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Meta Keyword</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Meta Description</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Created At</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-collg">
                      <p>Updated At</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-colsm">
                      <p>Status</p>
                    </th>
                    <th className="fsize13 textwhite font-300 table-colsm">
                      <p>Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getdata?.seodata.map((e) => (
                    <tr>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{e.metatitle}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{e.metaauthor}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{e.metakeyword}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{e.metadescription}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{new Date(e.createdAt).toDateString()}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-collg">
                        <p>{new Date(e.updatedAt).toDateString()}</p>
                      </td>
                      <td className="fsize13 textforth font-300 table-colsm">
                        {e.status === true ? (
                          <>
                            <button
                              className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py4 bg-light-success"
                              onClick={() => handlePublish(e._id, !e.status)}
                            >
                              Publish
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="border-0 cursor-pointer font-400 textdanger rounded-20 fsize12 px12 py4 bg-light-danger"
                              onClick={() => handlePublish(e._id, !e.status)}
                            >
                              Unpublish
                            </button>
                          </>
                        )}
                      </td>
                      <td className="fsize13 textforth table-colsm">
                        <FeatherIcon
                          onClick={() => seteditshow(e)}
                          icon="edit"
                          className="textsecondary mx3 cursor-pointer"
                          size={16}
                        />
                        <FeatherIcon
                          onClick={() => handleDelete(e._id)}
                          icon="trash-2"
                          className="textdanger cursor-pointer"
                          size={16}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Nodata />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTable;
