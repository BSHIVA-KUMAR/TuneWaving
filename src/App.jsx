import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import Analytics from "./pages/Analytics.jsx";
import Transactions from "./pages/Transactions.jsx";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet.jsx";
import CreateRelease from "./pages/CreateRelease.jsx";
import ReleasesTab from "./components/ReleasesTab";
import ReleaseMetadataPage from "./pages/ReleaseMetadataPage";
import YTServicesPage from "./pages/YTServicesPage.jsx";
import WithdrawPage from "./pages/WithDrawPage.jsx";
import NewReleasePage from "./pages/NewReleasePage.jsx";
import UploadTracks from "./pages/UploadTracks.jsx";
import ReleaseForm from "./pages/ReleaseForm.jsx";
import PreviewDistributePage from "./pages/PreviewDistributePage.jsx";
import TrackDetails from "./pages/TrackDetails.jsx";
import TicketRaisePage from "./pages/TicketRaisePage.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/*" element={<CatalogPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-release" element={<CreateRelease />} />
        <Route path="/releases" element={<ReleasesTab />} />
        <Route path="/wallet/withdraw" element={<WithdrawPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/release-metadata" element={<ReleaseMetadataPage />} />
        <Route path="/upload-tracks" element={<UploadTracks />} />
        <Route path="/four-page" element={<ReleaseForm />} />
        <Route path="/preview-distribute" element={<PreviewDistributePage />} />
        <Route path="/track-details" element={<TrackDetails />} />
        <Route path="/ticket-raise" element={<TicketRaisePage />} />

        {/* ✅ Correct path for YT Services */}
        <Route path="/yt-services" element={<YTServicesPage />} />

      </Routes>
    </Router>
  );
}

export default App;
