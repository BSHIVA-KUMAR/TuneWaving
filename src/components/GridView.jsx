

// import React, { useState, useMemo, useRef, useEffect } from "react";
// import "../styles/GridView.css";

// // 🔹 Helper function for dynamic rendering
// function renderItemDetails(item) {
//   return (
//     <>
//       <h3 className="item-title">{item.title || item.name}</h3>

//       {/* Artist / Performer / Writer / Country */}
//       {(item.artist || item.artistName || item.legalName || item.country) && (
//         <p className="item-artist">
//           {item.artist || item.artistName || item.legalName || item.country}
//         </p>
//       )}

//       <div className="item-metadata">
//         {item.labelName && <span className="label-badge">{item.labelName}</span>}
//         {item.releaseId && <span className="release-id">Release ID: {item.releaseId}</span>}
//         {item.artistId && <span className="artist-id">Artist ID: {item.artistId}</span>}
//         {item.labelId && <span className="label-id">Label ID: {item.labelId}</span>}
//         {item.performerId && <span className="performer-id">Performer ID: {item.performerId}</span>}
//         {item.producerId && <span className="producer-id">Producer ID: {item.producerId}</span>}
//         {item.publisherId && <span className="publisher-id">Publisher ID: {item.publisherId}</span>}
//         {item.writerId && <span className="writer-id">Writer ID: {item.writerId}</span>}
//         {item.trackId && <span className="track-id">Track ID: {item.trackId}</span>}
//         {item.upc && <span className="upc">UPC: {item.upc}</span>}
//       </div>

//       <div className="item-details">
//         {item.created && <span className="created-date">{item.created}</span>}
//         {item.creationDate && <span className="created-date">{item.creationDate}</span>}
//         {item.tracks && (
//           <span className="track-count">
//             {item.tracks} track{item.tracks !== 1 ? "s" : ""}
//           </span>
//         )}
//         {item.duration && <span className="duration">{item.duration}</span>}
//         {item.releases && <span className="release-count">{item.releases} releases</span>}
//         {item.country && <span className="country">{item.country}</span>}
//       </div>
//     </>
//   );
// }

// function GridView({
//   data,
//   itemsPerPage = 12,
//   showPagination = true,
//   showCheckboxes = true,
// }) {
//   const topCheckboxRef = useRef(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [selectedItems, setSelectedItems] = useState(new Set());

//   // 🔹 Sample fallback data (for testing without API)
//   const sampleData = [
//     {
//       id: 1,
//       title: "Lucid Dreams",
//       releaseId: "5055500",
//       labelName: "India Connects Music",
//       artist: "Krishna Das",
//       upc: "1234567891234",
//       created: "Sep 03, 2025",
//       tracks: 1,
//       duration: "05:03",
//       image: "/api/placeholder/200/200",
//     },
//     {
//       id: 2,
//       name: "Sony Music",
//       labelId: "LAB001",
//       country: "Japan",
//       image: "/api/placeholder/200/200",
//     },
//   ];

//   const gridData = data || sampleData;

//   // 🔹 Sorting
//   const sortedData = useMemo(() => {
//     if (!sortColumn) return gridData;
//     return [...gridData].sort((a, b) => {
//       const aValue = a[sortColumn];
//       const bValue = b[sortColumn];
//       if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
//       return 0;
//     });
//   }, [gridData, sortColumn, sortDirection]);

//   // 🔹 Pagination
//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedData = showPagination
//     ? sortedData.slice(startIndex, startIndex + itemsPerPage)
//     : sortedData;

//   // 🔹 Selection
//   const isAllSelected =
//     paginatedData.length > 0 &&
//     paginatedData.every((item) => selectedItems.has(item.id));

//   useEffect(() => {
//     if (topCheckboxRef.current) {
//       topCheckboxRef.current.indeterminate =
//         selectedItems.size > 0 && !isAllSelected;
//     }
//   }, [selectedItems, isAllSelected]);

//   const handleSelectToggle = () => {
//     if (isAllSelected) {
//       setSelectedItems(new Set());
//     } else {
//       setSelectedItems(new Set(paginatedData.map((item) => item.id)));
//     }
//   };

//   const handleItemSelect = (id) => {
//     const newSelected = new Set(selectedItems);
//     if (newSelected.has(id)) newSelected.delete(id);
//     else newSelected.add(id);
//     setSelectedItems(newSelected);
//   };

//   const renderPaginationButtons = () => {
//     if (!showPagination || totalPages <= 1) return null;

//     const buttons = [];
//     const maxVisiblePages = 3;
//     let startPage = Math.max(1, currentPage - 1);
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     if (endPage - startPage + 1 < maxVisiblePages) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     if (currentPage > 1) {
//       buttons.push(
//         <button
//           key="prev"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           className="pagination-btn pagination-arrow"
//         >
//           ‹
//         </button>
//       );
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           className={`pagination-btn ${currentPage === i ? "active" : ""}`}
//         >
//           {i}
//         </button>
//       );
//     }

//     if (currentPage < totalPages) {
//       buttons.push(
//         <button
//           key="next"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           className="pagination-btn pagination-arrow"
//         >
//           ›
//         </button>
//       );
//     }

//     return buttons;
//   };

//   return (
//     <div className="grid-view-container">
//       {/* Header with controls */}
//       <div className="grid-header">
//         <div className="grid-controls">
//           {showCheckboxes && (
//             <div className="select-all-control">
//               <input
//                 type="checkbox"
//                 ref={topCheckboxRef}
//                 checked={isAllSelected}
//                 onChange={handleSelectToggle}
//                 className="select-all-checkbox"
//               />
//               <span className="select-all-label">Select All</span>
//             </div>
//           )}

//           <div className="sort-controls">
//             <select
//               value={sortColumn || ""}
//               onChange={(e) => setSortColumn(e.target.value)}
//               className="sort-select"
//             >
//               <option value="">Sort by...</option>
//               <option value="title">Title</option>
//               <option value="name">Name</option>
//               <option value="artist">Artist</option>
//               <option value="created">Date Created</option>
//               <option value="duration">Duration</option>
//             </select>

//             {sortColumn && (
//               <button
//                 onClick={() =>
//                   setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//                 }
//                 className="sort-direction-btn"
//               >
//                 {sortDirection === "asc" ? "↑" : "↓"}
//               </button>
//             )}
//           </div>
//         </div>

//         {selectedItems.size > 0 && (
//           <div className="selection-info">
//             <span className="selected-count">{selectedItems.size} selected</span>
//           </div>
//         )}
//       </div>

//       {/* Grid Items */}
//       <div className="grid-wrapper">
//         <div className="grid-container">
//           {paginatedData.map((item) => (
//             <div
//               key={item.id}
//               className={`grid-item ${selectedItems.has(item.id) ? "selected" : ""}`}
//             >
//               {showCheckboxes && (
//                 <input
//                   type="checkbox"
//                   checked={selectedItems.has(item.id)}
//                   onChange={() => handleItemSelect(item.id)}
//                   className="grid-item-checkbox"
//                 />
//               )}

//               <div className="grid-item-image">
//                 <img src={item.image} alt={item.title || item.name} />
//                 {item.duration && (
//                   <div className="duration-badge">{item.duration}</div>
//                 )}
//               </div>

//               <div className="grid-item-content">
//                 {renderItemDetails(item)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       {showPagination && totalPages > 0 && (
//         <div className="pagination-container">
//           <div className="pagination-info">
//             Showing {startIndex + 1}-
//             {Math.min(startIndex + itemsPerPage, sortedData.length)} of{" "}
//             {sortedData.length} items
//             {selectedItems.size > 0 && (
//               <span className="selected-count-footer">
//                 • {selectedItems.size} selected
//               </span>
//             )}
//           </div>
//           <div className="pagination-buttons">{renderPaginationButtons()}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GridView;



import React, { useState, useMemo, useRef, useEffect } from "react";
import "../styles/GridView.css";

// 🔹 Helper: entity-specific rendering
function renderItemDetails(item, type) {
  switch (type) {
    case "releases":
      return (
        <>
          <h3 className="item-title">{item.title}</h3>
          <p className="item-artist">{item.name}</p>
          <div className="item-details">
            {item.created && <span className="created-date">{item.created}</span>}
          </div>
        </>
      );

    case "tracks":
      return (
        <>
          <h3 className="item-title">{item.title}</h3>
          <div className="item-details">
            {item.duration && <span className="duration">{item.duration}</span>}
          </div>
        </>
      );

    case "artists":
      return (
        <>
          <h3 className="item-title">{item.name}</h3>
          {item.releases && (
            <div className="item-details">
              <span className="release-count">{item.releases} releases</span>
            </div>
          )}
        </>
      );

    case "performers":
    case "producers":
    case "writers":
    case "publishers":
    case "labels":
      return (
        <>
          <h3 className="item-title">{item.name}</h3>
          {item.country && (
            <div className="item-details">
              <span className="country">{item.country}</span>
            </div>
          )}
        </>
      );

    default:
      return (
        <>
          <h3 className="item-title">{item.title || item.name}</h3>
        </>
      );
  }
}

function GridView({
  data,
  type = "releases", // 👈 tell GridView which entity type it’s rendering
  itemsPerPage = 12,
  showPagination = true,
  showCheckboxes = true,
}) {
  const topCheckboxRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedItems, setSelectedItems] = useState(new Set());

  const gridData = data || [];

  // 🔹 Sorting
  const sortedData = useMemo(() => {
    if (!sortColumn) return gridData;
    return [...gridData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [gridData, sortColumn, sortDirection]);

  // 🔹 Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = showPagination
    ? sortedData.slice(startIndex, startIndex + itemsPerPage)
    : sortedData;

  // 🔹 Selection
  const isAllSelected =
    paginatedData.length > 0 &&
    paginatedData.every((item) => selectedItems.has(item.id));

  useEffect(() => {
    if (topCheckboxRef.current) {
      topCheckboxRef.current.indeterminate =
        selectedItems.size > 0 && !isAllSelected;
    }
  }, [selectedItems, isAllSelected]);

  const handleSelectToggle = () => {
    if (isAllSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(paginatedData.map((item) => item.id)));
    }
  };

  const handleItemSelect = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedItems(newSelected);
  };

  const renderPaginationButtons = () => {
    if (!showPagination || totalPages <= 1) return null;
    const buttons = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          className="pagination-btn pagination-arrow"
        >
          ‹
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          className="pagination-btn pagination-arrow"
        >
          ›
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="grid-view-container">
      {/* Header with controls */}
      <div className="grid-header">
        <div className="grid-controls">
          {showCheckboxes && (
            <div className="select-all-control">
              <input
                type="checkbox"
                ref={topCheckboxRef}
                checked={isAllSelected}
                onChange={handleSelectToggle}
                className="select-all-checkbox"
              />
              <span className="select-all-label">Select All</span>
            </div>
          )}
        </div>
      </div>

      {/* Grid Items */}
      <div className="grid-wrapper">
        <div className="grid-container">
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className={`grid-item ${selectedItems.has(item.id) ? "selected" : ""}`}
            >
              {showCheckboxes && (
                <input
                  type="checkbox"
                  checked={selectedItems.has(item.id)}
                  onChange={() => handleItemSelect(item.id)}
                  className="grid-item-checkbox"
                />
              )}

              <div className="grid-item-image">
                <img src={item.image} alt={item.title || item.name} />
              </div>

              <div className="grid-item-content">
                {renderItemDetails(item, type)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 0 && (
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, sortedData.length)} of{" "}
            {sortedData.length} items
            {selectedItems.size > 0 && (
              <span className="selected-count-footer">
                • {selectedItems.size} selected
              </span>
            )}
          </div>
          <div className="pagination-buttons">{renderPaginationButtons()}</div>
        </div>
      )}
    </div>
  );
}

export default GridView;
