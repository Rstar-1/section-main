import React from "react";
import Connect from "./Connect";

const Dashboard = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx10 sm-mtpx1">
        <div className="dash3-h d-shadow overflow-hidden relative flex items-center bgprimary rounded-5 md-mtpx10 sm-mtpx10">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">
              {brandlength.length}
            </h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">
              Collection of Porfolio
            </p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="dash3-h d-shadow overflow-hidden relative flex items-center bgsecondary rounded-5 md-mtpx10 sm-mtpx10">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">10</h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Enquiry Members</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="dash3-h d-shadow overflow-hidden relative flex items-center bggray rounded-5 md-mtpx10 sm-mtpx10">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">
              {reviewlength.length}
            </h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Testimonials</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="dash3-h d-shadow overflow-hidden relative flex items-center bgsuccess rounded-5 md-mtpx10 sm-mtpx10">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">
              {servicelength.length}
            </h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Services</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default Dashboard;
