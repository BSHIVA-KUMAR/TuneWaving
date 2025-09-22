
// // import React, { useState, useEffect } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import CatalogSidebar from "../components/CatalogSidebar";
// // import ReleasesTab from "../components/ReleasesTab";
// // import TracksTab from "../components/TracksTab";
// // import ArtistsTab from "../components/ArtistsTab";
// // import PerformersTab from "../components/PerformersTab";
// // import ProducersTab from "../components/ProducersTab";
// // import WritersTab from "../components/WritersTab";
// // import PublishersTab from "../components/PublishersTab";
// // import LabelsTab from "../components/LabelsTab";

// // import SearchIcon from "../assets/Vector.png";
// // import Download from "../assets/Download.svg";
// // import DownloadFull from "../assets/DownloadFill.svg";
// // // ✅ Proper icons
// // import List from "../assets/List.svg";
// // import ListFill from "../assets/ListFill.svg";
// // import Grid from "../assets/GridView.svg";

// // // import Filter from "../assets/Filter.svg";
// // // import FilterFill from "../assets/FilterFill.svg";

// // import Dot from "../assets/dot.png";
// // import DotFill from "../assets/dot.png"; // create this if missing
// // import GridFill from "../assets/GridFill.svg";
// // import "../styles/CatalogPage.css";

// // function CatalogPage() {
// //   const [activeTab, setActiveTab] = useState("releases");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [showMode, setShowMode] = useState("list");
// //   const [filterOpen, setFilterOpen] = useState(false);
// //   const [dotOpen, setDotOpen] = useState(false);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // keep your detectCategory if needed

// //   useEffect(() => {
// //     const urlParams = new URLSearchParams(location.search);
// //     const tab = urlParams.get("tab");
// //     const validTabs = [
// //       "releases",
// //       "tracks",
// //       "artists",
// //       "performers",
// //       "producers",
// //       "writers",
// //       "publishers",
// //       "labels",
// //     ];
// //     if (tab && validTabs.includes(tab)) {
// //       setActiveTab(tab);
// //     }
// //   }, [location]);

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case "releases":
// //         return <ReleasesTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "tracks":
// //         return <TracksTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "artists":
// //         return <ArtistsTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "performers":
// //         return <PerformersTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "producers":
// //         return <ProducersTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "writers":
// //         return <WritersTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "publishers":
// //         return <PublishersTab searchTerm={searchTerm} showMode={showMode} />;
// //       case "labels":
// //         return <LabelsTab searchTerm={searchTerm} showMode={showMode} />;
// //       default:
// //         return <h1>Page not found / No data found</h1>;
// //     }
// //   };

// //   return (
// //     <div className="catalog-page">
// //       <div className="catalog-header">
// //         <h2 className="catalog-title">
// //           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
// //         </h2>

// //         {/* ✅ Search Bar */}
// //         <div className="search-box">
// //           <img src={SearchIcon} alt="search" className="search-icon" />
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>

// //         {/* ✅ Icons Row */}
// //         <div className="catalog-icons" style={{ position: "relative" }}>
// //           {/* List Toggle */}
// //           <button className="btn-img" onClick={() => setShowMode("list")}>
// //             <img src={showMode === "list" ? List : ListFill} alt="list" />
// //           </button>

// //           {/* Grid Toggle */}
// //           <button className="btn-img" onClick={() => setShowMode("grid")}>
// //             <img src={showMode === "grid" ? GridFill : Grid} alt="grid" />
// //           </button>

// //           {/* Filter Toggle */}
// //           <button
// //             className="btn-img round"
// //             onClick={() => setFilterOpen((prev) => !prev)}
// //           >
// //             <img src={filterOpen ? DownloadFull : Download} alt="filter" />
// //             {/*<img src={filterOpen ? FilterFill : Filter} alt="filter" />  */}
// //           </button>

// //           {/* Dots Toggle */}
// //           <button
// //             className="btn-img round"
// //             onClick={() => setDotOpen((prev) => !prev)}
// //           >
// //             <img src={dotOpen ? DotFill : Dot} alt="options" />
// //           </button>

// //           {/* Create Release */}
// //           <button
// //             className="new-release-button"
// //             onClick={() => navigate("/create-release")}
// //           >
// //             Create Release
// //           </button>
// //         </div>
// //       </div>

// //       <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

// //       <div className="catalog-content">{renderContent()}</div>
// //     </div>
// //   );
// // }

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

// import SearchIcon from "../assets/Vector.png";
// import Download from "../assets/Download.svg";
// import DownloadFull from "../assets/DownloadFill.svg";

// import List from "../assets/List.svg";
// import ListFill from "../assets/ListFill.svg";
// import Grid from "../assets/GridView.svg";
// import GridFill from "../assets/GridFill.svg";

// import Dot from "../assets/dot.png";
// import DotFill from "../assets/dot.png";

// import "../styles/CatalogPage.css";

// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// function CatalogPage() {
//   const [activeTab, setActiveTab] = useState("releases");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showMode, setShowMode] = useState("list");
//   const [downloadOpen, setDownloadOpen] = useState(false);
//   const [dotOpen, setDotOpen] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Placeholder state for table data (replace with real data from each tab)
//   const [releasesData, setReleasesData] = useState([]);
//   const [tracksData, setTracksData] = useState([]);
//   const [artistsData, setArtistsData] = useState([]);
//   const [publishersData, setPublishersData] = useState([]);
//   const [labelsData, setLabelsData] = useState([]);
//   const [writersData, setWritersData] = useState([]);
//   const [producersData, setProducersData] = useState([]);
//   const [performersData, setPerfomersData] = useState([]);

//   // ... similarly for other tabs

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

//   // --- Download function ---
//   const getCurrentTableData = () => {
//     switch (activeTab) {
//       case "releases":
//         return releasesData;
//       case "tracks":
//         return tracksData;
//       case "artists":
//         return artistsData;
//       case "labels":
//         return labelsData;
//       case "performers":
//         return performersData;
//       case "writers":
//         return writersData;
//       case "publishers":
//         return publishersData;
//       case "producers":
//         return producersData;
//       // ... other tabs
//       default:
//         return [ "No Data TO Download"];
//     }
//   };

//   const handleDownload = (type) => {
//     const tableData = getCurrentTableData();
//     if (!tableData || tableData.length === 0) return;

//     if (type === "csv") {
//       const header = Object.keys(tableData[0]).join(",");
//       const rows = tableData
//         .map((row) => Object.values(row).join(","))
//         .join("\n");
//       const csvContent = header + "\n" + rows;
//       const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//       saveAs(blob, `${activeTab}.csv`);
//     } else if (type === "xls") {
//       const ws = XLSX.utils.json_to_sheet(tableData);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, activeTab);
//       const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//       saveAs(
//         new Blob([wbout], { type: "application/octet-stream" }),
//         `${activeTab}.xlsx`
//       );
//     }

//     setDownloadOpen(false); // close dropdown after download
//   };

  

//   const renderContent = () => {
//     switch (activeTab) {
//       case "releases":
//         return <ReleasesTab searchTerm={searchTerm} showMode={showMode} setTableData={setReleasesData}  onSelectionChange={setSelectedRows} />;
//       case "tracks":
//         return <TracksTab searchTerm={searchTerm} showMode={showMode} setTableData={setTracksData} onSelectionChange={setSelectedRows} />;
//       case "artists":
//         return <ArtistsTab searchTerm={searchTerm} showMode={showMode} setTableData={setArtistsData} onSelectionChange={setSelectedRows} />;
//       case "performers":
//         return <PerformersTab searchTerm={searchTerm} showMode={showMode} setTableData={setPerfomersData} onSelectionChange={setSelectedRows} />;
//       case "producers":
//         return <ProducersTab searchTerm={searchTerm} showMode={showMode} setTableData={setProducersData} onSelectionChange={setSelectedRows} />;
//       case "writers":
//         return <WritersTab searchTerm={searchTerm} showMode={showMode} setTableData={setWritersData} onSelectionChange={setSelectedRows} />;
//       case "publishers":
//         return <PublishersTab searchTerm={searchTerm} showMode={showMode} setTableData={setPublishersData} onSelectionChange={setSelectedRows} />;
//       case "labels":
//         return <LabelsTab searchTerm={searchTerm} showMode={showMode} setTableData={setLabelsData} onSelectionChange={setSelectedRows}/>;
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
//           <button className="btn-img round" onClick={() => setShowMode("list")}>
//             <img src={showMode === "list" ? List : ListFill} alt="list" />
//           </button>
//           <button className="btn-img round" onClick={() => setShowMode("grid")}>
//             <img src={showMode === "grid" ? GridFill : Grid} alt="grid" />
//           </button>

//           {/* Download Dropdown */}
//           <div className="download-wrapper">
//             <button
//               className="btn-img round"
//               onClick={() => setDownloadOpen((prev) => !prev)}
//             >
//               <img src={downloadOpen ? DownloadFull : Download} alt="download" />
//             </button>
//             {downloadOpen && (
//               <div className="download-menu">
//                 <button onClick={() => handleDownload("csv")}>CSV</button>
//                 <button onClick={() => handleDownload("xls")}>XLS</button>
//               </div>
//             )}
//           </div>

//           {/* Dots Toggle */}
//           {/* <button
//             className="btn-img round"
//             onClick={() => setDotOpen((prev) => !prev)}
//           >
//             <img src={dotOpen ? DotFill : Dot} alt="options" />
//           </button> */}

//           {/* Create Release */}
//           <button
//             className="new-release-button"
//             onClick={() => navigate("/create-release")}
//           >
//             Create Release
//           </button>
//         </div>
//       </div>

//       <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="catalog-content">{renderContent()}</div>
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

import SearchIcon from "../assets/Vector.png";
import Download from "../assets/Download.svg";
import DownloadFull from "../assets/DownloadFill.svg";

import List from "../assets/List.svg";
import ListFill from "../assets/ListFill.svg";
import Grid from "../assets/GridView.svg";
import GridFill from "../assets/GridFill.svg";

import "../styles/CatalogPage.css";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function CatalogPage() {
  const [activeTab, setActiveTab] = useState("releases");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMode, setShowMode] = useState("list");
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  // Placeholder state for table data (replace with real data from each tab)
  const [releasesData, setReleasesData] = useState([]);
  const [tracksData, setTracksData] = useState([]);
  const [artistsData, setArtistsData] = useState([]);
  const [publishersData, setPublishersData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);
  const [writersData, setWritersData] = useState([]);
  const [producersData, setProducersData] = useState([]);
  const [performersData, setPerfomersData] = useState([]);

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
    if (tab && validTabs.includes(tab)) setActiveTab(tab);
  }, [location]);

  // --- Get current tab table data ---
  const getCurrentTableData = () => {
    switch (activeTab) {
      case "releases": return releasesData;
      case "tracks": return tracksData;
      case "artists": return artistsData;
      case "labels": return labelsData;
      case "performers": return performersData;
      case "writers": return writersData;
      case "publishers": return publishersData;
      case "producers": return producersData;
      default: return [];
    }
  };

  // --- Download function ---
  const handleDownload = (type, scope = "all") => {
    const tableData = getCurrentTableData();
    if (!tableData || tableData.length === 0) return;

    let dataToExport = tableData;

    if (scope === "selected" && selectedRows.length > 0) {
      dataToExport = selectedRows;
    }

    if (!dataToExport || dataToExport.length === 0) return;

    if (type === "csv") {
      const header = Object.keys(dataToExport[0]).join(",");
      const rows = dataToExport.map((row) => Object.values(row).join(",")).join("\n");
      const csvContent = header + "\n" + rows;
      saveAs(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }), `${activeTab}.csv`);
    } else if (type === "xls") {
      const ws = XLSX.utils.json_to_sheet(dataToExport);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, activeTab);
      const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      saveAs(new Blob([wbout], { type: "application/octet-stream" }), `${activeTab}.xlsx`);
    }

    setDownloadOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "releases":
        return <ReleasesTab searchTerm={searchTerm} showMode={showMode} setTableData={setReleasesData} onSelectionChange={setSelectedRows} />;
      case "tracks":
        return <TracksTab searchTerm={searchTerm} showMode={showMode} setTableData={setTracksData} onSelectionChange={setSelectedRows} />;
      case "artists":
        return <ArtistsTab searchTerm={searchTerm} showMode={showMode} setTableData={setArtistsData} onSelectionChange={setSelectedRows} />;
      case "performers":
        return <PerformersTab searchTerm={searchTerm} showMode={showMode} setTableData={setPerfomersData} onSelectionChange={setSelectedRows} />;
      case "producers":
        return <ProducersTab searchTerm={searchTerm} showMode={showMode} setTableData={setProducersData} onSelectionChange={setSelectedRows} />;
      case "writers":
        return <WritersTab searchTerm={searchTerm} showMode={showMode} setTableData={setWritersData} onSelectionChange={setSelectedRows} />;
      case "publishers":
        return <PublishersTab searchTerm={searchTerm} showMode={showMode} setTableData={setPublishersData} onSelectionChange={setSelectedRows} />;
      case "labels":
        return <LabelsTab searchTerm={searchTerm} showMode={showMode} setTableData={setLabelsData} onSelectionChange={setSelectedRows} />;
      default:
        return <h1>Page not found / No data found</h1>;
    }
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h2 className="catalog-title">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>

        {/* Search Bar */}
        <div className="search-box">
          <img src={SearchIcon} alt="search" className="search-icon" />
          <input type="text" className="input-box" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        {/* Icons Row */}
        <div className="catalog-icons" style={{ position: "relative" }}>
          <button className="btn-img round" onClick={() => setShowMode("list")}>
            <img src={showMode === "list" ? List : ListFill} alt="list" />
          </button>
          <button className="btn-img round" onClick={() => setShowMode("grid")}>
            <img src={showMode === "grid" ? GridFill : Grid} alt="grid" />
          </button>

          {/* Download Dropdown */}
          {/* <div className="download-wrapper">
            <button className="btn-img round" onClick={() => setDownloadOpen((prev) => !prev)}>
              <img src={downloadOpen ? DownloadFull : Download} alt="download" />
            </button>
            {downloadOpen && (
              <div className="download-menu">
                <button onClick={() => handleDownload("csv", "selected")}>Download Selected CSV</button>
                <button onClick={() => handleDownload("xls", "selected")}>Download Selected XLS</button>
                <hr />
                <button onClick={() => handleDownload("csv", "all")}>Download Full CSV</button>
                <button onClick={() => handleDownload("xls", "all")}>Download Full XLS</button>
              </div>
            )}
          </div> */}

          {/* Download Dropdown */}
<div className="download-wrapper">
  <button
    className="btn-img round"
    onClick={() => setDownloadOpen((prev) => !prev)}
  >
    <img src={downloadOpen ? DownloadFull : Download} alt="download" />
  </button>

  {downloadOpen && (
    <div className="download-menu">
      {selectedRows.length > 0 && (
        <>
          <button onClick={() => handleDownload("csv", "selected")}>
            Download Selected CSV
          </button>
          <button onClick={() => handleDownload("xls", "selected")}>
            Download Selected XLS
          </button>
          <hr />
        </>
      )}
      <button onClick={() => handleDownload("csv", "all")}>
        Download Full CSV
      </button>
      <button onClick={() => handleDownload("xls", "all")}>
        Download Full XLS
      </button>
    </div>
  )}
</div>


          {/* Create Release */}
          <button className="new-release-button" onClick={() => navigate("/create-release")}>
            Create Release
          </button>
        </div>
      </div>

      <CatalogSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="catalog-content">{renderContent()}</div>
    </div>
  );
}

export default CatalogPage;
