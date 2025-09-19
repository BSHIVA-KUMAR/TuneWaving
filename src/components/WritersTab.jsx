
import React, { useState } from "react";
import DataTable from "./DataTable";
import CopyButton from "./CopyButton";
import "../styles/TabComponents.css";
import "../styles/TableShared.css";

function WritersTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const writersData = [
    { id: 1, name: "Gulzar", writerId: "WRT001", country: "India", isni: "0000000123456000", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Ed Sheeran", writerId: "WRT002", country: "UK", isni: "0000000987654000", image: "/src/assets/samplIcon.png" }
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
      sortable: true,
      render: (item) => (
        <div className="title-cell">
          <img src={item.image} alt={item.name} className="release-image" />
          <span>{item.name}</span>
        </div>
      )
    },
    { key: "writerId", label: "WRITER ID", sortable: true },
    { key: "country", label: "COUNTRY", sortable: true },
    {
      key: "isni",
      label: "ISNI",
      sortable: true,
      render: (item) => (
        <div className="copy-cell">
          <span>{item.isni}</span>
          <CopyButton text={item.isni} />
        </div>
      )
    }
  ];

  const filteredData = writersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <DataTable data={filteredData} columns={columns} 
  // itemsPerPage={12} 
  />;

}

export default WritersTab;
