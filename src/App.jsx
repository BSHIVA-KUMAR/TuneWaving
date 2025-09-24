// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import "./App.css";
// // import Navbar from "./components/Navbar.jsx";
// // import Home from "./pages/Home.jsx";
// // import CatalogPage from "./pages/CatalogPage.jsx";
// // import Analytics from "./pages/Analytics.jsx";
// // import Transactions from "./pages/Transactions.jsx";
// // import Settings from "./pages/Settings";
// // import Wallet from "./pages/Wallet.jsx";
// // import CreateRelease from "./pages/CreateRelease.jsx";
// // import ReleasesTab from "./components/ReleasesTab";
// // import ReleaseMetadataPage from "./pages/ReleaseMetadataPage";
// // import YTServicesPage from "./pages/YTServicesPage.jsx";
// // import WithdrawPage from "./pages/WithDrawPage.jsx";
// // import NewReleasePage from "./pages/NewReleasePage.jsx";
// // import UploadTracks from "./pages/UploadTracks.jsx";
// // import ReleaseForm from "./pages/ReleaseForm.jsx";
// // import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
// // import TrackDetails from "./pages/TrackDetails.jsx";
// // import TicketRaisePage from "./pages/TicketRaisePage.jsx";


// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/dashboard" element={<Home />} />
// //         <Route path="/catalog" element={<CatalogPage />} />
// //         <Route path="/catalog/*" element={<CatalogPage />} />
// //         <Route path="/analytics" element={<Analytics />} />
// //         <Route path="/transactions" element={<Transactions />} />
// //         <Route path="/settings" element={<Settings />} />
// //         <Route path="/create-release" element={<CreateRelease />} />
// //         <Route path="/releases" element={<ReleasesTab />} />
// //         <Route path="/wallet/withdraw" element={<WithdrawPage />} />
// //         <Route path="/wallet" element={<Wallet />} />
// //         <Route path="/release-metadata" element={<ReleaseMetadataPage />} />
// //         <Route path="/upload-tracks" element={<UploadTracks />} />
// //         <Route path="/four-page" element={<ReleaseForm />} />
// //         <Route path="/preview-distribute" element={<PreviewDistributePage />} />
// //         <Route path="/track-details" element={<TrackDetails />} />
// //         <Route path="/ticket-raise" element={<TicketRaisePage />} />

// //         {/* ✅ Correct path for YT Services */}
// //         <Route path="/yt-services" element={<YTServicesPage />} />

// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import "./App.css";
// // import Navbar from "./components/Navbar.jsx";
// // import Home from "./pages/Home.jsx";
// // import CatalogPage from "./pages/CatalogPage.jsx";
// // import Analytics from "./pages/Analytics.jsx";
// // import Transactions from "./pages/Transactions.jsx";
// // import Settings from "./pages/Settings";
// // import Wallet from "./pages/Wallet.jsx";
// // import CreateRelease from "./pages/CreateRelease.jsx";
// // import ReleasesTab from "./components/ReleasesTab";
// // import ReleaseMetadataPage from "./pages/ReleaseMetadataPage";
// // import YTServicesPage from "./pages/YTServicesPage.jsx";
// // import WithdrawPage from "./pages/WithDrawPage.jsx";
// // import NewReleasePage from "./pages/NewReleasePage.jsx";
// // import UploadTracks from "./pages/UploadTracks.jsx";
// // import ReleaseForm from "./pages/ReleaseForm.jsx";
// // import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
// // import TrackDetails from "./pages/TrackDetails.jsx";
// // import TicketRaisePage from "./pages/TicketRaisePage.jsx";
// // import Login from "./pages/Login.jsx";  // ✅ new login page

// // // Simple auth wrapper
// // const PrivateRoute = ({ element }) => {
// //   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
// //   return isLoggedIn ? element : <Navigate to="/login" />;
// // };

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/login" element={<Login />} />

// //         {/* ✅ Protected routes */}
// //         <Route path="/" element={<PrivateRoute element={<Home />} />} />
// //         <Route path="/dashboard" element={<PrivateRoute element={<Home />} />} />
// //         <Route path="/catalog" element={<PrivateRoute element={<CatalogPage />} />} />
// //         <Route path="/catalog/*" element={<PrivateRoute element={<CatalogPage />} />} />
// //         <Route path="/analytics" element={<PrivateRoute element={<Analytics />} />} />
// //         <Route path="/transactions" element={<PrivateRoute element={<Transactions />} />} />
// //         <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
// //         <Route path="/create-release" element={<PrivateRoute element={<CreateRelease />} />} />
// //         <Route path="/releases" element={<PrivateRoute element={<ReleasesTab />} />} />
// //         <Route path="/wallet/withdraw" element={<PrivateRoute element={<WithdrawPage />} />} />
// //         <Route path="/wallet" element={<PrivateRoute element={<Wallet />} />} />
// //         <Route path="/release-metadata" element={<PrivateRoute element={<ReleaseMetadataPage />} />} />
// //         <Route path="/upload-tracks" element={<PrivateRoute element={<UploadTracks />} />} />
// //         <Route path="/four-page" element={<PrivateRoute element={<ReleaseForm />} />} />
// //         <Route path="/preview-distribute" element={<PrivateRoute element={<PreviewDistributePage />} />} />
// //         <Route path="/track-details" element={<PrivateRoute element={<TrackDetails />} />} />
// //         <Route path="/ticket-raise" element={<PrivateRoute element={<TicketRaisePage />} />} />
// //         <Route path="/yt-services" element={<PrivateRoute element={<YTServicesPage />} />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;









// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home.jsx";
// import CatalogPage from "./pages/CatalogPage.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Settings from "./pages/Settings";
// import Wallet from "./pages/Wallet.jsx";
// import CreateRelease from "./pages/CreateRelease.jsx";
// import ReleasesTab from "./components/ReleasesTab";
// import ReleaseMetadataPage from "./pages/ReleaseMetadataPage";
// import YTServicesPage from "./pages/YTServicesPage.jsx";
// import WithdrawPage from "./pages/WithDrawPage.jsx";
// import NewReleasePage from "./pages/NewReleasePage.jsx";
// import UploadTracks from "./pages/UploadTracks.jsx";
// import ReleaseForm from "./pages/ReleaseForm.jsx";
// import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
// import TrackDetails from "./pages/TrackDetails.jsx";
// import TicketRaisePage from "./pages/TicketRaisePage.jsx";
// import Login from "./pages/Login.jsx";

// // ✅ Updated PrivateRoute for JWT
// const PrivateRoute = ({ element }) => {
//   const token = localStorage.getItem("jwtToken");
//   return token ? element : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes */}
//         <Route path="/" element={<PrivateRoute element={<Home />} />} />
//         <Route path="/dashboard" element={<PrivateRoute element={<Home />} />} />
//         <Route path="/catalog" element={<PrivateRoute element={<CatalogPage />} />} />
//         <Route path="/catalog/*" element={<PrivateRoute element={<CatalogPage />} />} />
//         <Route path="/analytics" element={<PrivateRoute element={<Analytics />} />} />
//         <Route path="/transactions" element={<PrivateRoute element={<Transactions />} />} />
//         <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
//         <Route path="/create-release" element={<PrivateRoute element={<CreateRelease />} />} />
//         <Route path="/releases" element={<PrivateRoute element={<ReleasesTab />} />} />
//         <Route path="/wallet/withdraw" element={<PrivateRoute element={<WithdrawPage />} />} />
//         <Route path="/wallet" element={<PrivateRoute element={<Wallet />} />} />
//         <Route path="/release-metadata" element={<PrivateRoute element={<ReleaseMetadataPage />} />} />
//         <Route path="/upload-tracks" element={<PrivateRoute element={<UploadTracks />} />} />
//         <Route path="/four-page" element={<PrivateRoute element={<ReleaseForm />} />} />
//         <Route path="/preview-distribute" element={<PrivateRoute element={<PreviewDistributePage />} />} />
//         <Route path="/track-details" element={<PrivateRoute element={<TrackDetails />} />} />
//         <Route path="/ticket-raise" element={<PrivateRoute element={<TicketRaisePage />} />} />
//         <Route path="/yt-services" element={<PrivateRoute element={<YTServicesPage />} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home.jsx";
// import CatalogPage from "./pages/CatalogPage.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Settings from "./pages/Settings";
// import Wallet from "./pages/Wallet.jsx";
// import CreateRelease from "./pages/CreateRelease.jsx";
// import ReleasesTab from "./components/ReleasesTab";
// import ReleaseMetadataPage from "./pages/ReleaseMetadataPage";
// import YTServicesPage from "./pages/YTServicesPage.jsx";
// import WithdrawPage from "./pages/WithDrawPage.jsx";
// import UploadTracks from "./pages/UploadTracks.jsx";
// import ReleaseForm from "./pages/ReleaseForm.jsx";
// import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
// import TrackDetails from "./pages/TrackDetails.jsx";
// import TicketRaisePage from "./pages/TicketRaisePage.jsx";
// import LoginPage from "./pages/LoginPage.jsx"; // ✅ Updated login page

// // JWT-based PrivateRoute
// const PrivateRoute = ({ element }) => {
//   const token = localStorage.getItem("jwtToken");
//   return token ? element : <Navigate to="/login" />;
// };

// function App() {
//   const [authChecked, setAuthChecked] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");
//     setIsLoggedIn(!!token);
//     setAuthChecked(true);
//   }, []);

//   // Wait until auth is checked
//   if (!authChecked) return null;

//   return (
//     <Router>
//       {/* Navbar visible only if logged in */}
//       {isLoggedIn && <Navbar />}

//       <Routes>
//         {/* Public login route */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* Protected routes */}
//         <Route path="/" element={<PrivateRoute element={<Home />} />} />
//         <Route path="/dashboard" element={<PrivateRoute element={<Home />} />} />
//         <Route path="/catalog" element={<PrivateRoute element={<CatalogPage />} />} />
//         <Route path="/catalog/*" element={<PrivateRoute element={<CatalogPage />} />} />
//         <Route path="/analytics" element={<PrivateRoute element={<Analytics />} />} />
//         <Route path="/transactions" element={<PrivateRoute element={<Transactions />} />} />
//         <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
//         <Route path="/create-release" element={<PrivateRoute element={<CreateRelease />} />} />
//         <Route path="/releases" element={<PrivateRoute element={<ReleasesTab />} />} />
//         <Route path="/wallet/withdraw" element={<PrivateRoute element={<WithdrawPage />} />} />
//         <Route path="/wallet" element={<PrivateRoute element={<Wallet />} />} />
//         <Route path="/release-metadata" element={<PrivateRoute element={<ReleaseMetadataPage />} />} />
//         <Route path="/upload-tracks" element={<PrivateRoute element={<UploadTracks />} />} />
//         <Route path="/four-page" element={<PrivateRoute element={<ReleaseForm />} />} />
//         <Route path="/preview-distribute" element={<PrivateRoute element={<PreviewDistributePage />} />} />
//         <Route path="/track-details" element={<PrivateRoute element={<TrackDetails />} />} />
//         <Route path="/ticket-raise" element={<PrivateRoute element={<TicketRaisePage />} />} />
//         <Route path="/yt-services" element={<PrivateRoute element={<YTServicesPage />} />} />

//         {/* Catch-all redirect */}
//         <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

























import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import Analytics from "./pages/Analytics.jsx";
import Transactions from "./pages/Transactions.jsx";
import Settings from "./pages/Settings.jsx";
import Wallet from "./pages/Wallet.jsx";
import CreateRelease from "./pages/CreateRelease.jsx";
import ReleasesTab from "./components/ReleasesTab.jsx";
import ReleaseMetadataPage from "./pages/ReleaseMetadataPage.jsx";
import YTServicesPage from "./pages/YTServicesPage.jsx";
import WithdrawPage from "./pages/WithDrawPage.jsx";
import UploadTracks from "./pages/UploadTracks.jsx";
import ReleaseForm from "./pages/ReleaseForm.jsx";
import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
import TrackDetails from "./pages/TrackDetails.jsx";
import TicketRaisePage from "./pages/TicketRaisePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

// 🔒 PrivateRoute wrapper
const PrivateRoute = () => {
  const token = localStorage.getItem("jwtToken");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

// 📌 Layout for all authenticated pages (Navbar + Outlet)
const DashboardLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const token = localStorage.getItem("jwtToken");

  return (
    <Router>
      <Routes>
        {/* Public login route */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" replace /> : <LoginPage />}
        />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/*" element={<CatalogPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/create-release" element={<CreateRelease />} />
            <Route path="/releases" element={<ReleasesTab />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/withdraw" element={<WithdrawPage />} />
            <Route path="/release-metadata" element={<ReleaseMetadataPage />} />
            <Route path="/upload-tracks" element={<UploadTracks />} />
            <Route path="/four-page" element={<ReleaseForm />} />
            <Route path="/preview-distribute" element={<PreviewDistributePage />} />
            <Route path="/track-details" element={<TrackDetails />} />
            <Route path="/ticket-raise" element={<TicketRaisePage />} />
            <Route path="/yt-services" element={<YTServicesPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={token ? "/" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
