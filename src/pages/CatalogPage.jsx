
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CatalogSidebar from "../components/CatalogSidebar";
// import ReleasesTab from "../components/ReleasesTab";
// import TracksTab from "../components/TracksTab";
// import ArtistsTab from "../components/ArtistsTab";
// import PerformersTab from "../components/PerformersTab";
// import ProducersTab from "../components/ProducersTab";
// import WritersTab from "../components/WritersTab";
// import PublishersTab from "../components/PublishersTab";
// import LabelsTab from "../components/LabelsTab";
// import menu from "../assets/menu.png";
// import box from "../assets/box.png";
// import filter from '../assets/filter.png';
// import dot from '../assets/dot.png'
// import GridView from "../assets/GridView.svg";
// import "../styles/CatalogPage.css";
// import SearchIcon from "../assets/Vector.png";
// import { FaSearch, FaBell, FaCog, FaUser, FaPlus } from "react-icons/fa"; // icons
// // import { SearchIcon } from "lucide-react";


// import FilterSidebar from "../components/FilterSidebar"; // import new component
  

// function CatalogPage() {
//   const [activeTab, setActiveTab] = useState("releases");
//   const [searchTerm,setSearchTerm] = useState("")
//   const [showMode,setShowMode] = useState("list") // list or grid
//   const location = useLocation();
//   const [filterOpen, setFilterOpen] = useState(false);

//   const navigate = useNavigate()

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tab = urlParams.get("tab");
//     const validTabs = [
//       "releases",
//       "tracks",
//       "artists",
//       "performers",
//       "producers",
//       "writers",
//       "publishers",
//       "labels",
//     ];
//     if (tab && validTabs.includes(tab)) {
//       setActiveTab(tab);
//     }
//   }, [location]);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "releases":
//         return <ReleasesTab searchTerm={searchTerm} showMode={showMode} />;
//       case "tracks":
//         return <TracksTab searchTerm={searchTerm} showMode={showMode}/>;
//       case "artists":
//         return <ArtistsTab serachTerm={searchTerm} showMode={showMode}/>;
//       case "performers":
//         return <PerformersTab searchTerm={searchTerm} showMode={showMode}/>;
//       case "producers":
//         return <ProducersTab searchTerm={searchTerm} showMode={showMode}/>;
//       case "writers":
//         return <WritersTab searchTerm={searchTerm} showMode={showMode}/>;
//       case "publishers":
//         return <PublishersTab  searchTerm={searchTerm} showMode={showMode}/>;
//       case "labels":
//         return <LabelsTab serachTerm={searchTerm} showMode={showMode}/>;
//       default:
//         return <h1>Page not found / No data found</h1>
//     }
//   };

//   return (
//     <div className="catalog-page">

//       <div className="catalog-header">    
//             <h2 className="catalog-title">
//               {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//             </h2>

//           {/* Search Bar */}
//             {/* <div className="catalog-search">
//               <img src={SearchIcon} className="search-icon" />
//               <input type="text" placeholder="Search..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
//             </div> */}

//             <div className="search-box">
//               <img src={SearchIcon} alt="search" className="search-icon" />
//               <input type="text" placeholder="Search..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
//             </div>
                  

//           {/* Icons Row */}
//             <div className="catalog-icons">
//               {/* <FaBell />
//               <FaCog />
//               <FaUser />
//               <FaPlus className="create-release" title="Create Release" /> */}
              
//               <button className="btn-img" onClick={()=>setShowMode("list")}><img  src={menu}/></button>
//               <button className="btn-img" onClick={()=>setShowMode("grid")}><img  src={GridView} /></button>
//               <button className="btn-img round"  onClick={() => setFilterOpen(true)}><img src={filter} /></button>
//               <button className="btn-img round"><img  src={dot} /></button>
//               <button
//         className="new-release-button"
//         onClick={() => navigate("/create-release")}
//         >
//           Create Release
//         </button>
//             </div>
//       </div>
      
//       <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="catalog-content">
//         {/* 🔹 Top Header Bar */}
        
//         {renderContent()}
//       </div>

      
//       {/* Filter Sidebar */}
//     </div>

//   );
// }

// // export default CatalogPage;
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CatalogSidebar from "../components/CatalogSidebar";
// import ReleasesTab from "../components/ReleasesTab";
// import TracksTab from "../components/TracksTab";
// import ArtistsTab from "../components/ArtistsTab";
// import PerformersTab from "../components/PerformersTab";
// import ProducersTab from "../components/ProducersTab";
// import WritersTab from "../components/WritersTab";
// import PublishersTab from "../components/PublishersTab";
// import LabelsTab from "../components/LabelsTab";
// import menu from "../assets/menu.png";
// import box from "../assets/box.png";
// import filter from "../assets/filter.png";
// import dot from "../assets/dot.png";
// import GridView from "../assets/GridView.svg";
// import "../styles/CatalogPage.css";
// import SearchIcon from "../assets/Vector.png";
// import FilterSidebar from "../components/FilterSidebar"; // ✅ import

// function CatalogPage() {
//   const [activeTab, setActiveTab] = useState("releases");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showMode, setShowMode] = useState("list");
//   const [filterOpen, setFilterOpen] = useState(false); // ✅ state for filter sidebar


  
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tab = urlParams.get("tab");
//     const validTabs = [
//       "releases",
//       "tracks",
//       "artists",
//       "performers",
//       "producers",
//       "writers",
//       "publishers",
//       "labels",
//     ];
//     if (tab && validTabs.includes(tab)) {
//       setActiveTab(tab);
//     }
//   }, [location]);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "releases":
//         return <ReleasesTab searchTerm={searchTerm} showMode={showMode} />;
//       case "tracks":
//         return <TracksTab searchTerm={searchTerm} showMode={showMode} />;
//       case "artists":
//         return <ArtistsTab searchTerm={searchTerm} showMode={showMode} />;
//       case "performers":
//         return <PerformersTab searchTerm={searchTerm} showMode={showMode} />;
//       case "producers":
//         return <ProducersTab searchTerm={searchTerm} showMode={showMode} />;
//       case "writers":
//         return <WritersTab searchTerm={searchTerm} showMode={showMode} />;
//       case "publishers":
//         return <PublishersTab searchTerm={searchTerm} showMode={showMode} />;
//       case "labels":
//         return <LabelsTab searchTerm={searchTerm} showMode={showMode} />;
//       default:
//         return <h1>Page not found / No data found</h1>;
//     }
//   };

//   return (
//     <div className="catalog-page">
//       <div className="catalog-header">
//         <h2 className="catalog-title">
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h2>

//         {/* Search Bar */}
//         <div className="search-box">
//           <img src={SearchIcon} alt="search" className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Icons Row */}
//         <div className="catalog-icons" style={{ position: "relative" }}>
//   <button className="btn-img" onClick={() => setShowMode("list")}>
//     <img src={menu} />
//   </button>
//   <button className="btn-img" onClick={() => setShowMode("grid")}>
//     <img src={GridView} />
//   </button>
//   {/* Filter button */}
//   <button
//     className="btn-img round"
//     onClick={() => setFilterOpen((prev) => !prev)}
//   >
//     <img src={filter} />
//   </button>
//   <button className="btn-img round">
//     <img src={dot} />
//   </button>
//   <button
//     className="new-release-button"
//     onClick={() => navigate("/create-release")}
//   >
//     Create Release
//   </button>
// </div>

//       </div>

//       <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="catalog-content">{renderContent()}</div>

//       {/* ✅ Filter Sidebar */}
//       <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
//     </div>
//   );
// }

// export default CatalogPage;


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
import filter from "../assets/filter.png";
import dot from "../assets/dot.png";
import GridView from "../assets/GridView.svg";
import "../styles/CatalogPage.css";
import SearchIcon from "../assets/Vector.png";
//import FilterSidebar from "../components/FilterSidebar";

function CatalogPage() {
  const [activeTab, setActiveTab] = useState("releases");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMode, setShowMode] = useState("list");
  //const [filterOpen, setFilterOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ detect category from search input
  // const detectCategory = (term) => {
  //   if (!term) return null;

  //   // UPC → only numbers 12 or 13 digits
  //   if (/^\d{12,13}$/.test(term)) {
  //     return "releases";
  //   }

  //   // Release ID → e.g. REL123
  //   if (/^REL\d+$/i.test(term)) {
  //     return "releases";
  //   }

  //   // Label ID → e.g. LAB001
  //   if (/^LAB\d+$/i.test(term)) {
  //     return "labels";
  //   }

  //   // Artist ID → e.g. A001
  //   if (/^A\d+$/i.test(term)) {
  //     return "artists";
  //   }

  //   // Otherwise → treat as name (artist by default)
  //   return "artists";
  // };

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
        return <TracksTab searchTerm={searchTerm} showMode={showMode} />;
      case "artists":
        return <ArtistsTab searchTerm={searchTerm} showMode={showMode} />;
      case "performers":
        return <PerformersTab searchTerm={searchTerm} showMode={showMode} />;
      case "producers":
        return <ProducersTab searchTerm={searchTerm} showMode={showMode} />;
      case "writers":
        return <WritersTab searchTerm={searchTerm} showMode={showMode} />;
      case "publishers":
        return <PublishersTab searchTerm={searchTerm} showMode={showMode} />;
      case "labels":
        return <LabelsTab searchTerm={searchTerm} showMode={showMode} />;
      default:
        return <h1>Page not found / No data found</h1>;
    }
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h2 className="catalog-title">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>

        {/* ✅ Search Bar with detection */}
        <div className="search-box">
          <img src={SearchIcon} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const detectedTab = detectCategory(searchTerm);
                if (detectedTab) {
                  setActiveTab(detectedTab);
                  navigate(`?tab=${detectedTab}`);
                }
              }
            }}
          />
        </div>

        {/* Icons Row */}
        <div className="catalog-icons" style={{ position: "relative" }}>
          <button className="btn-img" onClick={() => setShowMode("list")}>
            <img src={menu} />
          </button>
          <button className="btn-img" onClick={() => setShowMode("grid")}>
            <img src={GridView} />
          </button>
          <button
            className="btn-img round"
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            <img src={filter} />
          </button>
          <button className="btn-img round">
            <img src={dot} />
          </button>
          <button
            className="new-release-button"
            onClick={() => navigate("/create-release")}
          >
            Create Release
          </button>
        </div>
      </div>

      <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="catalog-content">{renderContent()}</div>

      {/* Filter Sidebar */}
      {/* <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} /> */}
    </div>
  );
}

export default CatalogPage;
