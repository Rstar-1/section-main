import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorredux/ColorSlice";
import SeoSlice from "./seoredux/SeoSlice";
import TextSlice from "./cmsredux/TextSlice";
import ImageSlice from "./cmsredux/ImageSlice";
import DashboardSlice from "./automateredux/DashboardSlice";
import ManagementSlice from "./automateredux/ManagementSlice";
import SidebarSlice from "./automateredux/SidebarSlice";
import ClientSlice from "./managementredux/ClientSlice";
import TeamSlice from "./managementredux/TeamSlice";
import GallerySlice from "./managementredux/GallerySlice";
import ServiceSlice from "./managementredux/ServiceSlice";
import FaqSlice from "./managementredux/FaqSlice";
import ReviewSlice from "./managementredux/ReviewSlice";
import BrandSlice from "./managementredux/BrandSlice";

export const store = configureStore({
  reducer: {
    theme: colorReducer,
    seodata: SeoSlice,
    cmstextdata: TextSlice,
    cmsimagedata: ImageSlice,
    dashboarddata: DashboardSlice,
    managementdata: ManagementSlice,
    sidebardata: SidebarSlice,
    clientdata: ClientSlice,
    teamdata: TeamSlice,
    gallerydata: GallerySlice,
    servicedata: ServiceSlice,
    faqdata: FaqSlice,
    reviewdata: ReviewSlice,
    branddata: BrandSlice,
  },
});

export default store;
