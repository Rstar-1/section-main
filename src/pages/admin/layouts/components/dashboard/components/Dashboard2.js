import React from "react";
import FeatherIcon from "feather-icons-react";
import Connect from "./Connect";

const Dashboard2 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        <div className="dash2-h rounded-10 md-mtpx10 sm-mtpx10 primary-border b-shadow flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textgray">
                Porfolio
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">
                {brandlength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bgprimary">
              <FeatherIcon icon="folder" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash2-h rounded-10 md-mtpx10 sm-mtpx10 secondary-border b-shadow flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textgray">
                Enquiry Members
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">10</h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bgsecondary">
              <FeatherIcon icon="users" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash2-h rounded-10 md-mtpx10 sm-mtpx10 warning-border b-shadow flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textgray">
                Testimonials
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">
                {reviewlength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bgwarning">
              <FeatherIcon icon="star" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash2-h rounded-10 md-mtpx10 sm-mtpx10 success-border b-shadow flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textgray">
                Services
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">
                {servicelength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bgsuccess">
              <FeatherIcon icon="settings" size="32" className="textwhite" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default Dashboard2;
