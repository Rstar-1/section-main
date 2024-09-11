import React from "react";
import Connect from "./Connect";

const Dashboard7 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        <div className="dash7-h rounded-10 bg-white b-shadow overflow-hidden flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">
                {brandlength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textgray">
                Collection of Porfolio
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img
              src="https://raw.githubusercontent.com/Rstar-1/adminpractice6/main/src/assets/map2.png"
              alt="map"
              className="map-img object-contain"
            />
          </div>
        </div>
        <div className="dash7-h rounded-10 bg-white b-shadow overflow-hidden flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">10</h2>
              <p className="fsize14 mtpx1 mbpx1 textgray">Enquiry Members</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img
              src="https://raw.githubusercontent.com/Rstar-1/adminpractice6/main/src/assets/map2.png"
              alt="map"
              className="map-img object-contain"
            />
          </div>
        </div>
        <div className="dash7-h rounded-10 bg-white b-shadow overflow-hidden flex items-end relative">
          <div className="p15 flex justify-between items-center w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">
                {reviewlength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textgray">Review of People</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img
              src="https://raw.githubusercontent.com/Rstar-1/adminpractice6/main/src/assets/map2.png"
              alt="map"
              className="map-img object-contain"
            />
          </div>
        </div>
        <div className="dash7-h rounded-10 bg-white b-shadow overflow-hidden flex items-end relative">
          <div className="p15 flex justify-between items-center  w-full">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">
                {servicelength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textgray">Services</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 mtpx5 mrpx9">
            <img
              src="https://raw.githubusercontent.com/Rstar-1/adminpractice6/main/src/assets/map2.png"
              alt="map"
              className="map-img object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default Dashboard7;
