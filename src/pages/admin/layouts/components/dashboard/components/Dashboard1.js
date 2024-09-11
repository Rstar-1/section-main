import React from "react";
import FeatherIcon from "feather-icons-react";
import Connect from "./Connect";

const Dashboard1 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 py30 bgcard sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12 mtpx10 sm-mtpx1">
        <div className="dash1-h bgwhite rounded-5 b-shadow relative sm-mtpx30">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textprimary">
                {brandlength.length}
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Collection of Brands
              </p>
            </div>
          </div>
          <div className="dash1-minus mlpx15 absolute top-0 left-0">
            <div className="bgprimary dash1-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="folder" size="30" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon
                  icon="bar-chart"
                  size="17"
                  className="textprimary"
                />
                <p className="textprimary font-500 fsize14">Portfolio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dash1-h bgwhite rounded-5 b-shadow relative sm-mtpx30">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textsecondary">
                10
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Enquiry Members
              </p>
            </div>
          </div>
          <div className="dash1-minus mlpx15 absolute top-0 left-0">
            <div className="bgsecondary dash1-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="users" size="30" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon
                  icon="bar-chart"
                  size="17"
                  className="textsecondary"
                />
                <p className="textsecondary font-500 fsize14">
                  Connect with us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dash1-h bgwhite rounded-5 b-shadow relative md-mtpx30 sm-mtpx30">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textwarning">
                {reviewlength.length}
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Review of People
              </p>
            </div>
          </div>
          <div className="dash1-minus mlpx15 absolute top-0 left-0">
            <div className="bgwarning dash1-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="star" size="30" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon
                  icon="bar-chart"
                  size="17"
                  className="textwarning"
                />
                <p className="textwarning font-500 fsize14">Testimonials</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dash1-h bgwhite rounded-5 b-shadow relative md-mtpx30 sm-mtpx30">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textsuccess">
                {servicelength.length}
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Services
              </p>
            </div>
          </div>
          <div className="dash1-minus mlpx15 absolute top-0 left-0">
            <div className="bgsuccess dash1-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="settings" size="30" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon
                  icon="bar-chart"
                  size="17"
                  className="textsuccess flex"
                />
                <p className="textsuccess font-500 fsize14">Services</p>
              </div>
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

export default Dashboard1;
