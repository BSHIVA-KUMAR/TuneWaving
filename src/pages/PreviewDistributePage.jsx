import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PreviewDistributePage.css";

const PreviewDistributePage = () => {
  const navigate = useNavigate();
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showAddLinkPopup, setShowAddLinkPopup] = useState(false);
  const [showAttachFilePopup, setShowAttachFilePopup] = useState(false);

  const [links, setLinks] = useState([]);
  const [files, setFiles] = useState([]);
  const [currentLink, setCurrentLink] = useState("");
  const [currentFile, setCurrentFile] = useState(null);

  const handleCloseClick = () => {
    setShowExitPopup(true);
  };

  const handleConfirmLeave = () => {
    navigate("/dashboard");
  };

  const handleCancelLeave = () => {
    setShowExitPopup(false);
  };

  const handleAddLink = () => {
    if (currentLink.trim()) {
      setLinks([...links, currentLink.trim()]);
      setCurrentLink("");
      setShowAddLinkPopup(false);
    }
  };

  const handleAttachFile = () => {
    if (currentFile) {
      setFiles([...files, currentFile]);
      setCurrentFile(null);
      setShowAttachFilePopup(false);
    }
  };

  const handleRemove = (index, type) => {
    if (type === "link") {
      setLinks(links.filter((_, i) => i !== index));
    } else {
      setFiles(files.filter((_, i) => i !== index));
    }
  };

  const helpText = `If you used free beats or samples from YouTube or from elsewhere, please add the link(s) or attach relevant files here so we can process your release faster.
The beat(s) are 100% self-produced & Original`;

  return (
    <div className="preview-container">
      <div className="preview-card">
        {/* Cross symbol at top-right (container close) */}
        <span
          className="close-button"
          onClick={handleCloseClick}
        >
          ×
        </span>

        <h2 className="page-title">Preview & Distribute</h2>

        <div className="preview-details">
          <div><strong>Title:</strong> Happy days</div>
          <div><strong>Artist:</strong> Micky j meyer</div>
          <div><strong>Label:</strong> Vivo</div>

          <hr />

          <div><strong>Track 1:</strong> Happy days - Micky j meyer 8008008 (05:51)</div>
          <div><strong>Track 2:</strong> Happy days - Micky j meyer 8008008 (03:58)</div>

          <hr />

          <div><strong>Language:</strong> English</div>
          <div><strong>Primary Genre:</strong> Alternative/Experimental</div>
          <div><strong>Explicit Lyrics:</strong> Yes</div>
          <div><strong>Secondary Genre:</strong> Experimental</div>
          <div><strong>Copyright:</strong> 2025 ABC</div>
          <div><strong>Digital Release Date:</strong> 15/02/2025</div>
          <div><strong>Publishing rights:</strong> 2025 aBABAB</div>
          <div><strong>Original Release Date:</strong> 15/02/2025</div>
          <div><strong>ISRC Code:</strong> AA18079998989</div>
          <div><strong>Stores:</strong> <button className="new-release-button" onClick={()=>navigate("/four-page")}>View Store</button></div>
          <div><strong>UPC Code:</strong> AA18079998989</div>

          <hr />

          <div>
            <strong>Free Beat(s) / Samples:</strong>
            <p>{helpText}</p>
      <div style={{display:"flex"}}>
          <button
              className="new-release-button" style={{marginRight:"5%"}}
              onClick={() => setShowAddLinkPopup(true)}
            >
              + Add Link
            </button>
            <button
              className="new-release-button"
              onClick={() => setShowAttachFilePopup(true)}
            >
              + Attach File
            </button>


      </div>
          
            <div className="attachments-list">
              {links.map((link, i) => (
                <div key={i} className="attachment-item">
                  {link}
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(i, "link")}
                  >
                    Remove
                  </button>
                </div>
              ))}

              {files.map((file, i) => (
                <div key={i} className="attachment-item">
                  {file.name}
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(i, "file")}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="new-release-button" onClick={()=>navigate("/")} style={{marginLeft:"40%"}}>Submit</button>
        </div>
      </div>

      {/* Exit Confirmation Popup */}
      {showExitPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Do you want to leave this page?</p>
            <div className="popup-buttons">
              <button className="new-release-button" onClick={handleConfirmLeave}>
                Yes
              </button>
              <button className="btn-secondary" onClick={handleCancelLeave}>
                No
              </button>
              <button className="btn-secondary" onClick={handleCancelLeave}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Link Popup */}
      {showAddLinkPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add Free Beat / Sample Link</h3>
            <p>{helpText}</p>

            <input
              type="text"
              placeholder="Enter Link"
              value={currentLink}
              onChange={(e) => setCurrentLink(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <div className="popup-buttons">
              <button className="new-release-button" onClick={handleAddLink}>
                Add Link
              </button>
              <button
                className="btn-secondary"
                onClick={() => setShowAddLinkPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attach File Popup */}
      {showAttachFilePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Attach Free Beat / Sample File</h3>
            <p>{helpText}</p>

            <input
              type="file"
              onChange={(e) => setCurrentFile(e.target.files[0])}
              style={{ marginBottom: "20px" }}
            />

            <div className="popup-buttons">
              <button className="new-release-button" onClick={handleAttachFile}>
                Attach File
              </button>
              <button
                className="btn-secondary"
                onClick={() => setShowAttachFilePopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewDistributePage;
