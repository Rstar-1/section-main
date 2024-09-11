import React from "react";
import FeatherIcon from "feather-icons-react";
import Connect from "./Connect";

const Dashboard6 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        <div className="dash6-h bgwhite d-shadow relative">
          <div className="p15 flex justify-between items-center">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">
                {brandlength.length}
              </h2>
              <p className="fsize13 mtpx1 mbpx1 textgray">
                Collection of Porfolio
              </p>
            </div>
            <div>
              <FeatherIcon icon="bar-chart" size="57" className="textprimary" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bgprimary items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="folder" size="17" className="textwhite" />
                <p className="textwhite font-500 fsize14">Portfolio</p>
              </div>
              <FeatherIcon icon="trending-up" size="17" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash6-h bgwhite d-shadow relative">
          <div className="p15 flex justify-between items-center">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">10</h2>
              <p className="fsize13 mtpx1 mbpx1 textgray">Enquiry Members</p>
            </div>
            <div>
              <FeatherIcon
                icon="bar-chart-2"
                size="57"
                className="textsecondary"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bgsecondary items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="users" size="17" className="textwhite" />
                <p className="textwhite font-500 fsize14">Connect with Us</p>
              </div>
              <FeatherIcon icon="trending-up" size="17" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash6-h bgwhite d-shadow relative">
          <div className="p15 flex justify-between items-center">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">
                {reviewlength.length}
              </h2>
              <p className="fsize13 mtpx1 mbpx1 textgray">Review of People</p>
            </div>
            <div>
              <FeatherIcon
                icon="bar-chart-2"
                size="57"
                className="textwarning"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bgwarning items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="star" size="17" className="textwhite" />
                <p className="textwhite font-500 fsize14">Testimonials</p>
              </div>
              <FeatherIcon icon="trending-up" size="17" className="textwhite" />
            </div>
          </div>
        </div>
        <div className="dash6-h bgwhite d-shadow relative">
          <div className="p15 flex justify-between items-center">
            <div>
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">
                {servicelength.length}
              </h2>
              <p className="fsize13 mtpx1 mbpx1 textgray">Services</p>
            </div>
            <div>
              <FeatherIcon icon="bar-chart" size="57" className="textsuccess" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bgsuccess items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="settings" size="17" className="textwhite" />
                <p className="textwhite font-500 fsize14">Services</p>
              </div>
              <FeatherIcon icon="trending-up" size="17" className="textwhite" />
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

export default Dashboard6;
