
import React, { useState } from "react";
import DataTable from "./DataTable";
import CopyButton from "./CopyButton";
import "../styles/TracksTab.css";
import "../styles/TabComponents.css";
import "../styles/TableShared.css";

function TracksTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const tracksData = [
    { id: 1, title: "Shape of You", trackId: "TRK001", duration: "03:54", isrc: "US-UM7-17-00001", image: "/src/assets/samplIcon.png" },
    { id: 2, title: "Believer", trackId: "TRK002", duration: "03:24", isrc: "US-UM7-17-00002", image: "/src/assets/samplIcon.png" }
  ];

  const columns = [
    {
      key: "title",
      label: "TITLE",
      sortable: true,
      render: (item) => (
        <div className="title-cell">
          <img src={item.image} alt={item.title} className="release-image" />
          <span>{item.title}</span>
        </div>
      )
    },
    { key: "trackId", label: "TRACK ID", sortable: true },
    { key: "duration", label: "DURATION", sortable: true },
    {
      key: "isrc",
      label: "ISRC",
      sortable: true,
      render: (item) => (
        <div className="copy-cell">
          <span>{item.isrc}</span>
          <CopyButton text={item.isrc} />
        </div>
      )
    }
  ];

  const filteredData = tracksData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <DataTable data={filteredData} columns={columns} 
  // itemsPerPage={12}
   />;
}

export default TracksTab;
