import { Route, Routes, useLocation } from "react-router-dom";
// Components
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
// Auth Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// Other pages
import Coming from "./pages/admin/layouts/components/coming/Coming";
import Error from "./pages/error/Error";
// Pages
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import Management from "./pages/admin/layouts/components/management/Management";
import Cms from "./pages/admin/layouts/components/cms/Cms";
import Billing from "./pages/admin/layouts/components/billing/Billing";
import Settings from "./pages/admin/layouts/components/settings/Settings";
import Brands from "./pages/admin/layouts/components/customize/brands/Brands";
import Clients from "./pages/admin/layouts/components/customize/clients/Clients";
import Team from "./pages/admin/layouts/components/customize/teams/Team";
import Service from "./pages/admin/layouts/components/customize/services/Service";
import Gallery from "./pages/admin/layouts/components/customize/gallery/Gallery";
import Review from "./pages/admin/layouts/components/customize/reviews/Review";
import Faq from "./pages/admin/layouts/components/customize/faqs/Faq";
import WhatsAppButton from "./WhatsAppButton";

const App = () => {
  const location = useLocation();
  return (
    <div className="App relative">
      <div className="flex bgtertiary h-100 overflow-hidden">
        {location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
        )}
        <div
          className={
            location.pathname === "/login" || location.pathname === "/register"
              ? "w-full"
              : "w-route mlpx9 md-mlpx1 sm-mlpx1 mrpx9 md-mrpx1 sm-mrpx1"
          }
        >
          {location.pathname === "/login" ||
          location.pathname === "/register" ? null : (
            <Header />
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* ======================= Start-Login ======================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ======================= Start-Login ======================= */}
            {/* ======================= Start-Pages ======================= */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/management" element={<Management />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/services" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/review" element={<Review />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cms" element={<Cms />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/automation" element={<Settings />} />
            {/* ======================= End-Pages ======================= */}
            {/* ======================= Start-Error ======================= */}
            <Route path="*" element={<Error />} />
            <Route path="/coming" element={<Coming />} />
            {/* ======================= End-Error ======================= */}
          </Routes>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 m10 z-50">
        <WhatsAppButton
          phoneNumber="9867517042"
          userName="John Doe"
          productName="Awesome Product"
          imageUrl="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        />
      </div>
    </div>
  );
};

export default App;
