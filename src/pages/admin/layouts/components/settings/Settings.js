import React, { useState } from "react";
import DashboardAuto from "./dashboardauto/DashboardAuto";
import SidebarAuto from "./sidebarauto/SidebarAuto";
import ManagementAuto from "./managementauto/ManagementAuto";

const Settings = () => {
  const [check, setCheck] = useState(1);
  const settingtab = [
    {
      id: 1,
      name: "Dashboard",
    },
    {
      id: 2,
      name: "Sidebar",
    },
    {
      id: 3,
      name: "Management",
    },
  ];
  return (
    <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
      <div className="w-full setting-scroll bordb flex items-center">
        {settingtab.map((e) => (
          <p
            onClick={() => setCheck(e.id)}
            className={
              check === e.id
                ? "fsize14 textprimary cursor-pointer px16 pbpx6 tab-primary"
                : "fsize14 textgray cursor-pointer px16 pbpx6"
            }
          >
            {e.name}
          </p>
        ))}
      </div>
      <div className="mtpx10 sm-mtpx4">
        {check === 1 ? (
          <>
            <DashboardAuto />
          </>
        ) : null}
        {check === 2 ? (
          <>
            <SidebarAuto />
          </>
        ) : null}
        {check === 3 ? (
          <>
            <ManagementAuto />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Settings;
