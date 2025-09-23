import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TrackDetails.css";

const TrackDetails = () => {
  const [lyricsLanguage, setLyricsLanguage] = useState("");
  const [lyricsLanguageOption, setLyricsLanguageOption] = useState("Select Language");
  const [catalogId, setCatalogId] = useState("");
  const [crbts, setCrbts] = useState([{ name: "", time: "00:00:00" }]); // CRBT rows
  const [isrcOption, setIsrcOption] = useState("no");
  const [isrcCode, setIsrcCode] = useState("");
  const [explicitStatus, setExplicitStatus] = useState("");
  const navigate = useNavigate();

  // Add new CRBT row
  const handleAddCrbt = () => {
    setCrbts([...crbts, { name: "", time: "00:00:00" }]);
  };

  // Delete CRBT row (but keep at least one)
  const handleDeleteCrbt = (index) => {
    if (crbts.length > 1) {
      setCrbts(crbts.filter((_, i) => i !== index));
    }
  };

  // Update CRBT field
  const handleCrbtChange = (index, field, value) => {
    const updatedCrbts = [...crbts];
    updatedCrbts[index][field] = value;
    setCrbts(updatedCrbts);
  };

  const handleSaveAndContinue = () => {
    const trackData = {
      lyricsLanguage,
      lyricsLanguageOption,
      catalogId,
      crbts,
      isrcOption,
      isrcCode,
      explicitStatus,
    };
    const tracks = JSON.parse(localStorage.getItem("tracks") || "[]");
    tracks.push(trackData);
    localStorage.setItem("tracks", JSON.stringify(tracks));
    navigate("/upload-tracks");
  };

  return (
    <div className="track-details-container">
      <h2 className="form-title">Track Details</h2>

      {/* Language of Lyrics */}
      <div className="language-container">
        <div className="language-box">
          <h3 className="section-title">Language of Lyrics</h3>

          <div className="radio-group" style={{ gap: "12px" }}>
            <label style={{gap:"10px"}}>
              <input
                type="radio"
                name="lyricsLanguageOption"
                value="Select Language"
                checked={lyricsLanguageOption === "Select Language"}
                onChange={(e) => setLyricsLanguageOption(e.target.value)}
                style={{width:"20px",marginTop:"10px"}}
              />
              Select Language
            </label>
            <label>
              <input
                type="radio"
                name="lyricsLanguageOption"
                value="Instrumental"
                checked={lyricsLanguageOption === "Instrumental"}
                onChange={(e) => setLyricsLanguageOption(e.target.value)}
                style={{width:"20px",marginTop:"10px"}}
                
              />
              Instrumental
            </label>
          </div>

          {/* Show language dropdown if "Select Language" */}
          {lyricsLanguageOption === "Select Language" && (
            <div style={{ marginTop: "15px" }}>
              <select
                value={lyricsLanguage}
                onChange={(e) => setLyricsLanguage(e.target.value)}
                style={{ marginTop: "10px" }}
              >
                <option value="" disabled>
                  Select Language *
                </option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>

              {/* Explicit Content radio buttons */}
              {lyricsLanguage && (
                <div
                  className="language-container"
                  style={{
                    flexDirection: "column",
                    padding: "20px",
                    gap: "15px",
                    marginTop: "20px",
                  }}
                >
                  <div className="language-box">
                    <div className="section-title">Explicit Content *</div>

                    <div
                      className="radio-group"
                      style={{ flexDirection: "column", gap: "12px" }}
                    >
                      <label>
                        <input
                          type="radio"
                          name="explicitStatus"
                          value="Explicit"
                          checked={explicitStatus === "Explicit"}
                          onChange={() => setExplicitStatus("Explicit")}
                        />
                        Explicit
                      </label>
                      {explicitStatus === "Explicit" && (
                        <p style={{ fontSize: "13px", color: "#555", marginLeft: "20px", marginTop: "4px" }}>
                          The track lyrics or title include explicit language (such as drug references, sexual, violent or discriminatory language, swearing etc.) not suitable for children.
                        </p>
                      )}

                      <label>
                        <input
                          type="radio"
                          name="explicitStatus"
                          value="Not Explicit"
                          checked={explicitStatus === "Not Explicit"}
                          onChange={() => setExplicitStatus("Not Explicit")}
                        />
                        Not Explicit
                      </label>
                      {explicitStatus === "Not Explicit" && (
                        <p style={{ fontSize: "13px", color: "#555", marginLeft: "20px", marginTop: "4px" }}>
                          The track does NOT include any explicit language in lyrics or title.
                        </p>
                      )}

                      <label>
                        <input
                          type="radio"
                          name="explicitStatus"
                          value="Cleaned"
                          checked={explicitStatus === "Cleaned"}
                          onChange={() => setExplicitStatus("Cleaned")}
                        />
                        Cleaned
                      </label>
                      {explicitStatus === "Cleaned" && (
                        <p style={{ fontSize: "13px", color: "#555", marginLeft: "20px", marginTop: "4px" }}>
                          Cleaned
                        </p>
                      )}
                    </div>

                    {/* General tip below all radio buttons */}
                    <p
                      className="explicit-tip"
                      style={{ marginTop: "12px", fontSize: "13px", color: "#555" }}
                    >
                      If your track contains explicit content, such as drug references, discriminatory language, swearing etc. then you MUST mark it as “Explicit”. If you don’t do this, your release may be rejected when you attempt to distribute it.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Catalog ID */}
      <div className="form-section">
        <h3 className="section-title">Catalog ID</h3>
        <input
          type="text"
          placeholder="e.g. A12345"
          className="form-input"
          value={catalogId}
          onChange={(e) => setCatalogId(e.target.value)}
        />
        <div className="tip-box">
          <strong>Tips:</strong> Best to leave blank unless you really need these. Must be unique for each track.
        </div>
      </div>

      {/* CRBT Section */}
      <div className="form-section">
        <h3 className="section-title">Add CRBT</h3>

        {crbts.map((crbt, index) => (
          <div
            className="crbt-row"
            key={index}
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <input
              type="text"
              placeholder="Enter CRBT Name"
              className="form-input"
              value={crbt.name}
              onChange={(e) => handleCrbtChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              value={crbt.time}
              className="form-input"
              onChange={(e) => handleCrbtChange(index, "time", e.target.value)}
            />

            {/* Delete only for extra rows */}
            {index > 0 && (
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteCrbt(index)}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                🗑
              </button>
            )}
          </div>
        ))}

        <button className="add-btn" type="button" onClick={handleAddCrbt}>
          + Add CRBT
        </button>
      </div>

      {/* ISRC Section */}
      <div className="form-section">
        <h3 className="section-title">
          Do you have an ISRC for this recording? <span className="required">*</span>
        </h3>
        <div className="radio-group">
          <label className={`radio-btn ${isrcOption === "no" ? "active" : ""}`}>
            <input
              type="radio"
              name="isrc"
              value="no"
              checked={isrcOption === "no"}
              onChange={() => setIsrcOption("no")}
            />
            No
          </label>
          <label className={`radio-btn ${isrcOption === "yes" ? "active" : ""}`}>
            <input
              type="radio"
              name="isrc"
              value="yes"
              checked={isrcOption === "yes"}
              onChange={() => setIsrcOption("yes")}
            />
            Yes
          </label>
        </div>

        <div className="tip-box">
          <strong>Info:</strong> An ISRC is a unique code that every track must have. If you don’t already have one, we will generate one for you (free). Note: ISRC is unique to each song.
        </div>

        {isrcOption === "yes" && (
          <div>
            <label>Enter Your ISRC Code</label>
            <input
              type="text"
              placeholder="Enter ISRC Code *"
              className="form-input"
              value={isrcCode}
              onChange={(e) => setIsrcCode(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="form-actions">
        <button className="new-release-button" onClick={handleSaveAndContinue}>
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default TrackDetails;
