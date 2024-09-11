import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showmanagement } from "../../../../../redux/automateredux/ManagementSlice";

const Management = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.managementdata.managementdata);
  // Redux State

  // API
  useEffect(() => {
    dispatch(showmanagement());
  }, [dispatch]);
  // API

  // Automation
  const componentMap = {};
  getdata.forEach((screen) => {
    componentMap[
      screen.sectionname
    ] = require(`./components/${screen.sectionpath}`);
  });
  // Automation

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {getdata.map((screen, index) => {
          const Managements = componentMap[screen.sectionname].default;
          return (
            <div key={index} className="">
              {screen.status === true ? (
                <>
                  <Managements
                  />
                </>
              ) : null}
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default Management;
