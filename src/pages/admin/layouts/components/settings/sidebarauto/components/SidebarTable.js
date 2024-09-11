import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import {
  paginationsidebar,
  deletesidebar,
  statussidebar,
} from "../../../../../../../redux/automateredux/SidebarSlice";
import AddSidebar from "./add/AddSidebar";
import EditSidebar from "./edit/EditSidebar";
import ReactPaginate from "react-paginate";

const SidebarTable = () => {
  // Add Edit Popup
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  // Add Edit Popup

  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector(
    (state) => state.sidebardata.sidebardata.sidebarstore
  );
  const totalCount = useSelector((state) => state.sidebardata.totalCount);
  // Redux State

  // Pagination and Search
  const [currentpage, setcurrentpage] = useState(0);
  const [search, setSearch] = useState("");
  // Pagination and Search

  // Pagination and Search Function
  const handlePageClick = (e) => {
    setcurrentpage(e.selected);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setcurrentpage(0); // Reset to first page on new search
  };
  // Pagination and Search Function

  // API
  useEffect(() => {
    dispatch(paginationsidebar({ offset: currentpage * 6, search }));
  }, [dispatch, currentpage, search]);
  // API

  // Delete Data
  const handleDelete = async (id) => {
    try {
      const resultAction = await dispatch(deletesidebar(id));
      if (deletesidebar.fulfilled.match(resultAction)) {
        alert("Deleted successfully");
        dispatch(paginationsidebar({ offset: currentpage * 6, search }));
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
      await dispatch(statussidebar({ id, data }));
      dispatch(paginationsidebar({ offset: currentpage * 6, search }));
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
          addshow
            ? "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navview"
            : "bg-glass-nav b-shadow fixed top-0 h-100 z-99 overflow-hidden navhide"
        }
      >
        <div className="bgwhite wid-sidebar h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                Add Sidebar
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setaddshow(false)}
              />
            </div>
          </div>
          <AddSidebar />
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
                Edit Sidebar
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => seteditshow(false)}
              />
            </div>
          </div>
          <EditSidebar editshow={editshow} />
        </div>
      </div>
      <div className="mtpx16 bgcard rounded-10 sm-rounded-none">
        <div className="my10 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
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
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Section Image</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Section Name</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Section Path</p>
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
                {getdata?.map((e) => (
                  <tr>
                    <td className="fsize13 textforth font-300 table-collg">
                      <img
                        src={e.picture}
                        className="table-img"
                        alt="table-img"
                      />
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.sectionname}</p>
                    </td>
                    <td className="fsize13 textforth font-300 table-collg">
                      <p>{e.sectionpath}</p>
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
                    <td className="fsize13  textforth table-colsm">
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
          </div>
        </div>
        <div className="flex w-full justify-end">
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={Math.ceil(totalCount / 6)}
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            renderOnZeroPageCount={null}
            forcePage={currentpage}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarTable;
