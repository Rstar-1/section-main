import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showsidebar } from "../../../redux/automateredux/SidebarSlice";

const Sidebar = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.sidebardata.sidebardata);
  // Redux State

  // API
  useEffect(() => {
    dispatch(showsidebar());
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
          const Sidebars = componentMap[screen.sectionname].default;
          return (
            <div key={index} className="">
              {screen.status === true ? (
                <>
                  <Sidebars />
                </>
              ) : null}
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default Sidebar;
