import React, { useState } from "react";
import CmsTable from "./components/CmsTable";
import CmsTable2 from "./components/CmsTable2";

const Cms = () => {
  const [check, setCheck] = useState(1);
  const cmstab = [
    {
      id: 1,
      name: "TextCms",
    },
    {
      id: 2,
      name: "ImageCms",
    },
  ];
  return (
    <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
      <h4 className="fsize20 md-fsize20 sm-fsize18 textprimary mtpx1 mbpx1">
        CMS
      </h4>
      <div className="w-full bordb flex items-center mtpx16">
        {cmstab.map((e) => (
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
      <div className="mtpx10">
        {check === 1 ? (
          <>
            <CmsTable />
          </>
        ) : null}
        {check === 2 ? (
          <>
            <CmsTable2 />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cms;
