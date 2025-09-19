import React, { useState } from "react";
import "../styles/TrackDetails.css";

const TrackDetails = () => {
  // State for all input fields
   const [lyricsLanguage, setLyricsLanguage] = useState("English");
    const [lyricsLanguageOption, setLyricsLanguageOption] = useState("Select Language");
  const [catalogId, setCatalogId] = useState("");
  const [crbtName, setCrbtName] = useState("");
  const [crbtTime, setCrbtTime] = useState("00:00:00");
  const [isrcOption, setIsrcOption] = useState("no");
  const [isrcCode, setIsrcCode] = useState("");

  // Add handlers for adding to arrays


  // Example: Save handler (for demonstration)
  const handleSave = () => {
    const trackData = {
      catalogId,
      crbtName,
      crbtTime,
      isrcOption,
      isrcCode,
    };
    console.log("Track Details:", trackData);
    // You can send trackData to your backend or use as needed
  };

  return (
    <div className="track-details-container">
      <h2 className="form-title">Track Details</h2>
      <div className="form-card">
        {/* Title Section */}
        {/* <div className="form-section">
          <h3 className="section-title">Title</h3>
          <label className="input-label">
            Track Title <span className="required">*</span>
            <input
              type="text"
              placeholder="e.g. I got my summer"
              className="form-input"
              value={trackTitle}
              onChange={e => setTrackTitle(e.target.value)}
            />
          </label>

          <label className="input-label">
            Title Version
            <input
              type="text"
              placeholder="e.g. Live, Remix, Remastered"
              className="form-input"
              value={titleVersion}
              onChange={e => setTitleVersion(e.target.value)}
            />
          </label>

          <button className="localize-btn">Localize Your Release</button>

          <div className="tip-box">
            <strong>Tips:</strong> Do not include version information like Remix
            or Uncut in the main Title field. Use the Title Version field
            instead.
          </div>
        </div> */}

        {/* language-container */}

         <div className="language-container">
              <div className="language-box">
                <h3 className="section-title">Language of Lyrics</h3>
                <div className="radio-group" style={{ gap: "12px" }}>
                  <label>
                    <input
                      type="radio"
                      name="lyricsLanguageOption"
                      value="Select Language"
                      checked={lyricsLanguageOption === "Select Language"}
                      onChange={(e) => setLyricsLanguageOption(e.target.value)}
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
                    />
                    Instrumental
                  </label>
                </div>

                {lyricsLanguageOption === "Select Language" && (
                  <select
                    value={lyricsLanguage}
                    onChange={(e) => setLyricsLanguage(e.target.value)}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="" disabled selected>Select Language *</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                )}
              </div>
            </div>

        {/* Artists Section */}
        {/* <div className="form-section">
          <h3 className="section-title">Artists</h3>
          <div className="button-group">
            <div>
              <button className="add-btn" type="button" onClick={handleAddMainArtist}>
                + Add Main Primary Artist
              </button>
              {mainArtists.length > 0 && (
                <ul>
                  {mainArtists.map((artist, idx) => (
                    <li key={idx}>{artist}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
             
              <button className="add-btn" type="button" onClick={handleAddPerformer}>
                + Add Performer
              </button>
              {performers.length > 0 && (
                <ul>
                  {performers.map((performer, idx) => (
                    <li key={idx}>{performer}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              
              <button className="add-btn" type="button" onClick={handleAddArtistCredit}>
                + Add Artist Credit
              </button>
              {artistCredits.length > 0 && (
                <ul>
                  {artistCredits.map((credit, idx) => (
                    <li key={idx}>{credit}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <button className="add-btn">+ Add Artist</button>
            </div>
            <div>
             
              <button className="add-btn">+ Add Credit</button>
            </div>
          </div>
          <div className="tip-box">
            <strong>Tips:</strong> Apple does not allow changes to Artist Name
            and Artist ID after initial submission. Make sure these are correct
            before you save.
          </div>
        </div> */}

        {/* Genres Section */}
        {/* <div className="form-section">
          <h3 className="section-title">Genres</h3>
          <div className="genre-row">
            <div className="genre-field">
              <label>
                Primary Genre <span className="required">*</span>
              </label>
              <select
                className="form-input"
                value={primaryGenre}
                onChange={e => setPrimaryGenre(e.target.value)}
              >
                <option value="">Select Genre</option>
                <option>Pop</option>
                <option>Rock</option>
                <option>Hip Hop</option>
                <option>Jazz</option>
              </select>
            </div>
            <div className="genre-field">
              <label>
                Secondary Genre <span className="required">*</span>
              </label>
              <select
                className="form-input"
                value={secondaryGenre}
                onChange={e => setSecondaryGenre(e.target.value)}
              >
                <option value="">Select Genre</option>
                <option>Electronic</option>
                <option>Classical</option>
                <option>Reggae</option>
                <option>Country</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Catalog ID */}
        <div className="form-section">
          <h3 className="section-title">Catalog ID</h3>
          <input
            type="text"
            placeholder="e.g. A12345"
            className="form-input"
            value={catalogId}
            onChange={e => setCatalogId(e.target.value)}
          />
          <div className="tip-box">
            <strong>Tips:</strong> Best to leave blank unless you really need
            these. Must be unique for each track.
          </div>
        </div>

        {/* CRBT Section */}
        <div className="form-section">
          <h3 className="section-title">Add CRBT</h3>
          <div className="crbt-row">
            <input
              type="text"
              placeholder="Enter CRBT Name"
              className="form-input"
              value={crbtName}
              onChange={e => setCrbtName(e.target.value)}
            />
            <input
              type="text"
              value={crbtTime}
              className="form-input"
              onChange={e => setCrbtTime(e.target.value)}
            />
          </div>
          <button className="add-btn">+ Add CRBT</button>
        </div>

        {/* ISRC Section */}
        <div className="form-section">
          <h3 className="section-title">
            Do you have an ISRC for this recording? <span className="required">*</span>
          </h3>
          <div className="radio-group">
            <label
              className={`radio-btn ${isrcOption === "no" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="isrc"
                value="no"
                checked={isrcOption === "no"}
                onChange={() => setIsrcOption("no")}
              />
              No
            </label>
            <label
              className={`radio-btn ${isrcOption === "yes" ? "active" : ""}`}
            >
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
            <strong>Info:</strong> An ISRC is a unique code that every track
            must have. If you don’t already have one, we will generate one for
            you (free). Note: ISRC is unique to each song, you should never
            create a new ISRC for a song that already has an ISRC.
          </div>

          {isrcOption === "yes" && (
            <div>
              <input
                type="text"
                placeholder="A1234..."
                className="form-input"
                value={isrcCode}
                onChange={e => setIsrcCode(e.target.value)}
              />
              <p className="info-text">
                Enter a code only if you already have one. Otherwise one will be
                generated when you distribute and it will be displayed on your
                track’s info page.
              </p>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="form-actions">
          <button className="save-btn" onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
