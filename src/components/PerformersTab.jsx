
import React, { useState } from "react";
import DataTable from "./DataTable";
import CopyButton from "./CopyButton";
import "../styles/TabComponents.css";
import "../styles/TableShared.css";

function PerformersTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const performersData = [
    { id: 1, name: "Arijit Singh", performerId: "PER001", country: "India", isni: "0000000123456789", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Taylor Swift", performerId: "PER002", country: "USA", isni: "0000000987654321", image: "/src/assets/samplIcon.png" },
    { id: 1, name: "Arijit Singh", performerId: "PER001", country: "India", isni: "0000000123456789", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Taylor Swift", performerId: "PER002", country: "USA", isni: "0000000987654321", image: "/src/assets/samplIcon.png" },
    { id: 1, name: "Arijit Singh", performerId: "PER001", country: "India", isni: "0000000123456789", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Taylor Swift", performerId: "PER002", country: "USA", isni: "0000000987654321", image: "/src/assets/samplIcon.png" }
  ,
  { id: 1, name: "Arijit Singh", performerId: "PER001", country: "India", isni: "0000000123456789", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Taylor Swift", performerId: "PER002", country: "USA", isni: "0000000987654321", image: "/src/assets/samplIcon.png" }
  ,
  { id: 1, name: "Arijit Singh", performerId: "PER001", country: "India", isni: "0000000123456789", image: "/src/assets/samplIcon.png" },
    { id: 2, name: "Taylor Swift", performerId: "PER002", country: "USA", isni: "0000000987654321", image: "/src/assets/samplIcon.png" }
  
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
    { key: "performerId", label: "PERFORMER ID", sortable: true },
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

  const filteredData = performersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <DataTable data={filteredData} columns={columns} 
  // itemsPerPage={12}
   />;
}

export default PerformersTab;
