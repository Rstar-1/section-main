import React from "react";
import FeatherIcon from "feather-icons-react";
import Connect from "./Connect";

const Dashboard5 = ({ servicelength, reviewlength, brandlength }) => {
  return (
    <div className="mtpx9 bgcard py30 sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
        <div className="bg-light-primary rounded-10 b-shadow md-mtpx10 sm-mtpx10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Porfolio</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textprimary">
                {brandlength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textprimary">
                Collection of Porfolio
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-secondary rounded-10 b-shadow md-mtpx10 sm-mtpx10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Enquiry</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textsecondary">10</h2>
              <p className="fsize14 mtpx1 mbpx1 textsecondary">
                Connect with us
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-warning rounded-10 b-shadow md-mtpx10 sm-mtpx10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Testimonials</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textwarning">
                {reviewlength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textwarning">
                Reviews of clients
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-success rounded-10 b-shadow md-mtpx10 sm-mtpx10">
          <div className="p15">
            <div className="flex justify-between items-center ">
              <p className="fsize14 mtpx1 mbpx1 textgray">Services</p>
              <FeatherIcon icon="info" size="15" className="textgray" />
            </div>
            <div className="mtpx12">
              <h2 className="fsize29 mtpx1 mbpx1 textsuccess">
                {servicelength.length}
              </h2>
              <p className="fsize14 mtpx1 mbpx1 textsuccess">Services</p>
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

export default Dashboard5;
