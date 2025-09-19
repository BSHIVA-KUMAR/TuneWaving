
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CatalogSidebar from "../components/CatalogSidebar";
import ReleasesTab from "../components/ReleasesTab";
import TracksTab from "../components/TracksTab";
import ArtistsTab from "../components/ArtistsTab";
import PerformersTab from "../components/PerformersTab";
import ProducersTab from "../components/ProducersTab";
import WritersTab from "../components/WritersTab";
import PublishersTab from "../components/PublishersTab";
import LabelsTab from "../components/LabelsTab";
import menu from "../assets/menu.png";
import box from "../assets/box.png";
import filter from '../assets/filter.png';
import dot from '../assets/dot.png'
import "../styles/CatalogPage.css";

import { FaSearch, FaBell, FaCog, FaUser, FaPlus } from "react-icons/fa"; // icons

function CatalogPage() {
  const [activeTab, setActiveTab] = useState("releases");
  const [searchTerm,setSearchTerm] = useState("")
  const [showMode,setShowMode] = useState("list") // list or grid
  const location = useLocation();

  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get("tab");
    const validTabs = [
      "releases",
      "tracks",
      "artists",
      "performers",
      "producers",
      "writers",
      "publishers",
      "labels",
    ];
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const renderContent = () => {
    switch (activeTab) {
      case "releases":
        return <ReleasesTab searchTerm={searchTerm} showMode={showMode} />;
      case "tracks":
        return <TracksTab searchTerm={searchTerm} />;
      case "artists":
        return <ArtistsTab serachTerm={searchTerm} />;
      case "performers":
        return <PerformersTab searchTerm={searchTerm} />;
      case "producers":
        return <ProducersTab searchTerm={searchTerm} />;
      case "writers":
        return <WritersTab searchTerm={searchTerm} />;
      case "publishers":
        return <PublishersTab  searchTerm={searchTerm} />;
      case "labels":
        return <LabelsTab serachTerm={searchTerm} />;
      default:
        return <ReleasesTab serachTerm={searchTerm} />;
    }
  };

  return (
    <div className="catalog-page">

      <div className="catalog-header">    
            <h2 className="catalog-title">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>

          {/* Search Bar */}
            <div className="catalog-search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
            </div>

          {/* Icons Row */}
            <div className="catalog-icons">
              {/* <FaBell />
              <FaCog />
              <FaUser />
              <FaPlus className="create-release" title="Create Release" /> */}
              
              <button className="btn-img" onClick={()=>setShowMode("list")}><img  src={menu}/></button>
              <button className="btn-img" onClick={()=>setShowMode("grid")}><img  src={box} /></button>
              <button className="btn-img round"><img src={filter} /></button>
              <button className="btn-img round"><img  src={dot} /></button>
              <button
        className="new-release-button"
        onClick={() => navigate("/create-release")}
        >
          Create Release
        </button>
            </div>
      </div>
      
      <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="catalog-content">
        {/* 🔹 Top Header Bar */}
        

        {/* Main Content */}
        {renderContent()}
      </div>
    </div>

  );
}

export default CatalogPage;
