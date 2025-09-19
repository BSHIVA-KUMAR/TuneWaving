import React, { useState, useMemo, useRef, useEffect } from "react";
import "../styles/GridView.css";

function GridView({
  data,
  itemsPerPage = 12, // More items for grid view
  showPagination = true,
  showCheckboxes = true,
}) {
  const topCheckboxRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedItems, setSelectedItems] = useState(new Set());

  const sampleData = [
    { id: 1, title: "Lucid Dreams", releaseId: "5055500", labelName: "India Connects Music", artist: "Krishna Das", upc: "1234567891234", created: "Sep 03, 2025", tracks: 1, duration: "05:03", image: "/api/placeholder/200/200" },
    { id: 2, title: "Sunset Boulevard", releaseId: "5055501", labelName: "Melody Makers", artist: "Anita Sharma", upc: "1234567891235", created: "Sep 05, 2025", tracks: 1, duration: "04:21", image: "/api/placeholder/200/200" },
    { id: 3, title: "Midnight Serenade", releaseId: "5055502", labelName: "Harmony Records", artist: "Raj Patel", upc: "1234567891236", created: "Sep 07, 2025", tracks: 1, duration: "03:45", image: "/api/placeholder/200/200" },
    { id: 4, title: "Ocean Waves", releaseId: "5055503", labelName: "Blue Note Music", artist: "Priya Singh", upc: "1234567891237", created: "Sep 10, 2025", tracks: 1, duration: "04:12", image: "/api/placeholder/200/200" },
    { id: 5, title: "Desert Storm", releaseId: "5055504", labelName: "India Connects Music", artist: "Vikram Kumar", upc: "1234567891238", created: "Sep 12, 2025", tracks: 1, duration: "05:30", image: "/api/placeholder/200/200" },
    ...Array.from({ length: 15 }, (_, i) => ({
      id: i + 6,
      title: `Track ${i + 6}`,
      releaseId: `505550${i + 5}`,
      labelName: ["India Connects Music", "Melody Makers", "Harmony Records", "Blue Note Music"][i % 4],
      artist: `Artist ${i + 6}`,
      upc: `123456789123${i + 9}`,
      created: "Sep 15, 2025",
      tracks: 1,
      duration: `0${Math.floor(Math.random() * 6) + 3}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      image: "/api/placeholder/200/200"
    }))
  ];

  const gridData = data || sampleData;

  // Sorting
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

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = showPagination ? sortedData.slice(startIndex, startIndex + itemsPerPage) : sortedData;

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    else { setSortColumn(columnKey); setSortDirection("asc"); }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Selection
  const isAllSelected = paginatedData.length > 0 && paginatedData.every(item => selectedItems.has(item.id));

  useEffect(() => {
    if (topCheckboxRef.current) {
      topCheckboxRef.current.indeterminate =
        selectedItems.size > 0 && !isAllSelected;
    }
  }, [selectedItems, isAllSelected]);

  const handleSelectToggle = () => {
    if (selectedItems.size === 0) {
      const allIds = new Set(paginatedData.map(item => item.id));
      setSelectedItems(allIds);
    } else {
      setSelectedItems(new Set());
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

    // Prev arrow
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-btn pagination-arrow"
        >
          ‹
        </button>
      );
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    // Next arrow
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
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
          
          <div className="sort-controls">
            <select 
              value={sortColumn || ''} 
              onChange={(e) => handleSort(e.target.value)}
              className="sort-select"
            >
              <option value="">Sort by...</option>
              <option value="title">Title</option>
              <option value="artist">Artist</option>
              <option value="created">Date Created</option>
              <option value="duration">Duration</option>
            </select>
            
            {sortColumn && (
              <button 
                onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                className="sort-direction-btn"
              >
                {sortDirection === "asc" ? "↑" : "↓"}
              </button>
            )}
          </div>
        </div>

        {selectedItems.size > 0 && (
          <div className="selection-info">
            <span className="selected-count">{selectedItems.size} selected</span>
          </div>
        )}
      </div>

      {/* Grid Items */}
      <div className="grid-wrapper">
        <div className="grid-container">
          {paginatedData.map((item) => (
            <div 
              key={item.id} 
              className={`grid-item ${selectedItems.has(item.id) ? 'selected' : ''}`}
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
                <img src={item.image} alt={item.title} />
                <div className="duration-badge">{item.duration}</div>
              </div>
              
              <div className="grid-item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-artist">{item.artist}</p>
                <div className="item-metadata">
                  <span className="label-badge">{item.labelName}</span>
                  <span className="release-id">ID: {item.releaseId}</span>
                </div>
                <div className="item-details">
                  <span className="created-date">{item.created}</span>
                  <span className="track-count">{item.tracks} track{item.tracks !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 0 && (
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} items
            {selectedItems.size > 0 && <span className="selected-count-footer"> • {selectedItems.size} selected</span>}
          </div>
          <div className="pagination-buttons">{renderPaginationButtons()}</div>
        </div>
      )}
    </div>
  );
}

export default GridView;