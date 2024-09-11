import React from "react";

const Billing = () => {
  return (
    <div className="mtpx9 cust-scroll p20 sm-p15 bgcard rounded-10 sm-rounded-none">
      <h4 className="fsize20 md-fsize20 sm-fsize18 textprimary mtpx1 mbpx1">
        Bill Summary
      </h4>
      <div className="mtpx10 flex md-flex sm-block w-full">
        <div className="w-70 md-w-60 sm-w-full">
          <div className="p14 b-shadow bgwhite rounded-5">
            <div className="sm-block flex justify-between p8 bg-light-primary rounded-5 items-center mbpx10">
              <div className="flex items-center">
                <img
                  src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
                  alt="billing-img"
                  className="billing-img rounded-5"
                />
                <div className="plpx10 mtpx6">
                  <h5 className="fsize16 mtpx1 mbpx1 leading textdark">
                    Billing
                  </h5>
                  <p className="fsize13 textgray">summary</p>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx6 sm-pbpx6 plpx20 prpx20 fsize14 sm-fsize13 bgsuccess sm-w-full sm-mtpx8">
                Added
              </button>
            </div>
            <div className="sm-block flex justify-between p8 bg-light-primary rounded-5 items-center mbpx10">
              <div className="flex items-center">
                <img
                  src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
                  alt="billing-img"
                  className="billing-img rounded-5"
                />
                <div className="plpx10 mtpx6">
                  <h5 className="fsize16 mtpx1 mbpx1 leading textdark">
                    Billing
                  </h5>
                  <p className="fsize13 textgray">summary</p>
                </div>
              </div>
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 md-ptpx6 md-pbpx6 md-plpx24 md-prpx24 sm-ptpx6 sm-pbpx6 plpx27 prpx27 fsize14 sm-fsize13 bgprimary sm-w-full sm-mtpx8">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="w-30 md-w-40 sm-w-full plpx10 sm-plpx1 sm-mtpx10">
          <div className="bgwhite p16 rounded-5 b-shadow">
            <h6 className="fsize16 textprimary mtpx1 mbpx1 leading">Summary</h6>
            <div className="rounded-5 bg-light-primary">
              <div className="mtpx16 p16">
                <div className="">
                  <div className="flex items-center justify-between pbpx12">
                    <p className="textgray fsize13">Management</p>
                    <p className="textgray fsize13">100/-</p>
                  </div>
                  <div className="flex items-center justify-between pbpx12">
                    <p className="textgray fsize13">Management</p>
                    <p className="textgray fsize13">100/-</p>
                  </div>
                  <div className="flex items-center justify-between pbpx12">
                    <p className="textgray fsize13">Management</p>
                    <p className="textgray fsize13">100/-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgwhite p12 rounded-5 b-shadow mtpx8">
            <div className="rounded-5 bg-light-primary">
              <div className="flex items-center justify-between p12">
                <p className="textprimary fsize14">Total</p>
                <p className="textsuccess fsize13">100/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
