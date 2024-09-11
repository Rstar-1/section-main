import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showservice } from "../../../../../redux/managementredux/ServiceSlice";
import { showreview } from "../../../../../redux/managementredux/ReviewSlice";
import { showbrand } from "../../../../../redux/managementredux/BrandSlice";
import { showdashboard } from "../../../../../redux/automateredux/DashboardSlice";

const Dashboard = () => {
  // Redux State
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.dashboarddata.dashboarddata);
  const servicelength = useSelector((state) => state.servicedata.servicedata);
  const reviewlength = useSelector((state) => state.reviewdata.reviewdata);
  const brandlength = useSelector((state) => state.branddata.branddata);
  // Redux State

  // API
  useEffect(() => {
    dispatch(showservice());
    dispatch(showreview());
    dispatch(showbrand());
    dispatch(showdashboard());
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
          const Dashboards = componentMap[screen.sectionname].default;
          return (
            <div key={index} className="">
              {screen.status === true ? (
                <>
                  <Dashboards
                    servicelength={servicelength}
                    reviewlength={reviewlength}
                    brandlength={brandlength}
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

export default Dashboard;
