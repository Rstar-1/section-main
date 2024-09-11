import React from "react";
import FeatherIcon from "feather-icons-react";
import Connect from "./Connect";

const Dashboard4 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        <div className="dash4-h rounded-5 md-mtpx10 sm-mtpx10 bgprimary flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textwhite">
                Porfolio
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">
                {brandlength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bg-glass2">
              <FeatherIcon icon="folder" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash4-h rounded-5 md-mtpx10 sm-mtpx10 bgsecondary flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textwhite">
                Enquiry Members
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">10</h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bg-glass2">
              <FeatherIcon icon="users" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash4-h rounded-5 md-mtpx10 sm-mtpx10 bggray flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textwhite">
                Testimonials
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">
                {reviewlength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bg-glass2">
              <FeatherIcon icon="star" size="32" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash4-h rounded-5 md-mtpx10 sm-mtpx10 bgsuccess flex items-center">
          <div className="p15 flex justify-between w-full items-center">
            <div>
              <p className="fsize14 md-fsize16 sm-fsize14 mtpx1 mbpx1 textwhite">
                Services
              </p>
              <h2 className="fsize29 mtpx1 mbpx1 textwhite">
                {servicelength.length}
              </h2>
            </div>
            <div className="dash2-social flex items-center rounded-full justify-center bg-glass2">
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

export default Dashboard4;
