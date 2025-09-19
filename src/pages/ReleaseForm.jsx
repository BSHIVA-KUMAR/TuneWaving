import React, { useState } from "react";
import "../styles/ReleaseForm.css";
import { useNavigate } from "react-router-dom";

const ReleaseForm = () => {
  const [selectedStores, setSelectedStores] = useState([]);
  const navigate = useNavigate();

  const stores = ["Zing MP3", "Tiktok", "Spotify", "Soundcloud", "Resso"];

  const handleCheckboxChange = (store) => {
    if (selectedStores.includes(store)) {
      setSelectedStores(selectedStores.filter((s) => s !== store));
    } else {
      setSelectedStores([...selectedStores, store]);
    }
  };
   const handleSaveNext = () => {
    navigate("/preview-distribute"); // route to next page
  };
  const handleSubmit = () => {
    console.log("Selected Stores:", selectedStores);
    alert("Selected Stores: " + selectedStores.join(", "));
  };

  return (
    <div className="release-container">
      <h2 className="title">Create A Store</h2>
      <p className="step">04/05</p>

      <div className="card">
        <h3 className="stores-title">Stores</h3>
        <div className="stores-list">
          {stores.map((store, index) => (
            <label key={index} className="store-option">
              <input
                type="checkbox"
                checked={selectedStores.includes(store)}
                onChange={() => handleCheckboxChange(store)}
              />
              {store}
            </label>
          ))}
        </div>

        <button className="new-release-button" style={{marginLeft:"30%"}} onClick={handleSaveNext}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default ReleaseForm;
