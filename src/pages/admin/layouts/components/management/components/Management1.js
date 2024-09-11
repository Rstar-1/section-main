import React from "react";
import { NavLink } from "react-router-dom";

const Management1 = () => {
  const managementcard = [
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Services",
      description: "accordion-2",
      route: "/services",
    },
  ];
  const managementcard2 = [
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Brands",
      description: "accordion-2",
      route: "/brands",
    },
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Mini Product",
      description: "accordion-2",
      route: "/brands",
    },
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Gallery",
      description: "accordion-2",
      route: "/gallery",
    },
  ];
  const managementcard3 = [
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Reviews",
      description: "accordion-2",
      route: "/review",
    },
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Teams",
      description: "accordion-2",
      route: "/teams",
    },
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Clients",
      description: "accordion-2",
      route: "/clients",
    },
  ];
  const managementcard4 = [
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "Events",
      description: "accordion-2",
      route: "/review",
    },
    {
      image:
        "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      name: "FAQ",
      description: "accordion-2",
      route: "/faq",
    },
  ];
  return (
    <div className="mtpx9 py30 bgcard sm-py20 px20 md-px10 sm-px10 rounded-10 cust-scroll">
      <div className="flex md-flex sm-block w-full">
        <div className="w-40 md-w-50 sm-w-full prpx10">
          <div className="p20 md-p10 sm-p10 bgwhite b-shadow rounded-5">
            <h6 className="fsize18 md-fsize16 sm-fsize16 bordb mtpx1 mbpx1 px9 md-px5 sm-px5 pbpx6 font-600 textprimary">
              Lorem Iosum
            </h6>
            <p className="fsize13 md-fsize12 sm-fsize12 px9 md-px5 sm-px5 mtpx6 textgray font-300">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="mtpx10 md-mtpx8 sm-mtpx6 grid-cols-1 px9 md-px5 sm-px5 py4">
              <div className="flex items-start pbpx8 md-pbpx4 sm-pbpx4">
                <div className="bgsuccess rounded-full dot mtpx6 sm-mtpx6"></div>
                <p className="fsize13 md-fsize12 sm-fsize12 w-90 plpx6 textgray font-300">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
              <div className="flex items-start pbpx8 md-pbpx4 sm-pbpx4 bordb">
                <div className="bgsuccess rounded-full dot mtpx6 sm-mtpx6"></div>
                <p className="fsize13 md-fsize12 sm-fsize12 w-90 plpx6 textgray font-300">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                </p>
              </div>
            </div>
            <div className="mtpx4 grid-cols-1 px9 md-px5 sm-px5 py4">
              <div className="flex items-start pbpx8 md-pbpx4 sm-pbpx4">
                <div className="bgsuccess rounded-full dot mtpx6 sm-mtpx6"></div>
                <p className="fsize13 md-fsize12 sm-fsize12 w-90 plpx6 textgray font-300">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
              </div>
              <div className="flex items-start pbpx8 md-pbpx4 sm-pbpx4">
                <div className="bgsuccess rounded-full dot mtpx6 sm-mtpx6"></div>
                <p className="fsize13 md-fsize12 sm-fsize12 w-90 plpx6 textgray font-300">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 md-w-50 sm-mtpx20 sm-w-full management1-scroll pbpx40">
          <div>
            <div>
              <h6 className="fsize18 md-fsize16 sm-fsize16 bordb mtpx1 mbpx1 px9 pbpx6 font-600 textprimary">
                Customize
              </h6>
            </div>
            <div className="grid-cols-2 md-grid-cols-1 sm-grid-cols-1 gap-8 mtpx14">
              {managementcard.map((e) => (
                <NavLink to={e.route}>
                  <div className="bgwhite flex items-center b-shadow rounded-5 p8 mx10">
                    <div className="">
                      <img
                        src={e.image}
                        alt="management-img"
                        className="management-img flex rounded-5"
                      />
                    </div>
                    <div className="plpx10">
                      <h6 className="fsize16 md-fsize14 sm-fsize14 mtpx4 mbpx1 leading textdark font-600">
                        {e.name}
                      </h6>
                      <p className="fsize12 textgray font-400">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mtpx20 md-mtpx16 sm-mtpx16">
            <div>
              <h6 className="fsize18 md-fsize16 sm-fsize16 bordb mtpx1 mbpx1 px9 pbpx6 font-600 textprimary">
                About Me
              </h6>
            </div>
            <div className="grid-cols-2 md-grid-cols-1 sm-grid-cols-1 gap-8 mtpx14">
              {managementcard2.map((e) => (
                <NavLink to={e.route}>
                  <div className="bgwhite flex items-center b-shadow rounded-5 p8 mx10">
                    <div className="">
                      <img
                        src={e.image}
                        alt="management-img"
                        className="management-img flex rounded-5"
                      />
                    </div>
                    <div className="plpx10">
                      <h6 className="fsize16 md-fsize14 sm-fsize14 mtpx4 mbpx1 leading textdark font-600">
                        {e.name}
                      </h6>
                      <p className="fsize12 textgray font-400">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mtpx20 md-mtpx16 sm-mtpx16">
            <div>
              <h6 className="fsize18 md-fsize16 sm-fsize16 bordb mtpx1 mbpx1 px9 pbpx6 font-600 textprimary">
                Read More
              </h6>
            </div>
            <div className="grid-cols-2 md-grid-cols-1 sm-grid-cols-1 gap-8 mtpx14">
              {managementcard3.map((e) => (
                <NavLink to={e.route}>
                  <div className="bgwhite flex items-center b-shadow rounded-5 p8 mx10">
                    <div className="">
                      <img
                        src={e.image}
                        alt="management-img"
                        className="management-img flex rounded-5"
                      />
                    </div>
                    <div className="plpx10">
                      <h6 className="fsize16 md-fsize14 sm-fsize14 mtpx4 mbpx1 leading textdark font-600">
                        {e.name}
                      </h6>
                      <p className="fsize12 textgray font-400">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mtpx20 md-mtpx16 sm-mtpx16">
            <div>
              <h6 className="fsize18 md-fsize16 sm-fsize16 bordb mtpx1 mbpx1 px9 pbpx6 font-600 textprimary">
                Management
              </h6>
            </div>
            <div className="grid-cols-2 md-grid-cols-1 sm-grid-cols-1 gap-8 mtpx14">
              {managementcard4.map((e) => (
                <NavLink to={e.route}>
                  <div className="bgwhite flex items-center b-shadow rounded-5 p8 mx10">
                    <div className="">
                      <img
                        src={e.image}
                        alt="management-img"
                        className="management-img flex rounded-5"
                      />
                    </div>
                    <div className="plpx10">
                      <h6 className="fsize16 md-fsize14 sm-fsize14 mtpx4 mbpx1 leading textdark font-600">
                        {e.name}
                      </h6>
                      <p className="fsize12 textgray font-400">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management1;
