// import React, { useRef, useState } from "react";
// import "../styles/UploadTracks.css";
// import { useLocation } from "react-router-dom";
// const UploadTracks = () => {

//   const location = useLocation();

//   const [tracks, setTracks] = useState([]);
//   const fileInputRef = useRef(null);

//   const handleTrackUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const validFormats = ["audio/flac", "audio/wav"];
//     if (!validFormats.includes(file.type)) {
//       alert("Only FLAC and WAV formats are allowed.");
//       return;
//     }

//     const audioURL = URL.createObjectURL(file);

//     const audio = new Audio(audioURL);
//     audio.onloadedmetadata = () => {
//       setTracks((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           name: file.name,
//           format: file.type,
//           url: audioURL,
//           duration: audio.duration,
//         },
//       ]);
//     };
//   };

//   const handleUploadSectionClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = null; // reset file input
//       fileInputRef.current.click();
//     }
//   };

//   const handleDelete = (id) => {
//     setTracks(tracks.filter((track) => track.id !== id));
//   };

//   return (
//     <div className="upload-container">
//       <h2 className="title">Create A New Release</h2>

//       <div className="step-indicator">03/5</div>

//       <div className="upload-box">
//         <h3 className="tracks-heading">Tracks</h3>

//         <div
//           className="upload-section"
//           onClick={handleUploadSectionClick}
//           style={{ cursor: "pointer" }}
//         >
//           <div className="upload-area">
//             <p className="upload-title">Upload Tracks</p>
//             <p className="upload-subtitle">Format: flac or wav</p>
//             <p className="upload-requirements">
//               Requirements: Minimum of 16 bit, 44.1 Khz, stereo <br />
//               Recommended 24 bits, 48Khz or 24 bits 96Khz
//             </p>
//           </div>
//           <input
//             type="file"
//             accept=".flac,.wav"
//             style={{ display: "none" }}
//             ref={fileInputRef}
//             onChange={handleTrackUpload}
//           />
//         </div>

//         {/* Uploaded tracks */}
//         {tracks.length > 0 && (
//           <div className="uploaded-tracks-list">
//             {tracks.map((track, idx) => (
//               <div key={track.id} className="track-card">
//                 <div className="track-info">
//                   <strong>Track {idx + 1}</strong>
//                   <p>{track.name}</p>
//                 </div>

//                 <div className="track-controls">
//                   <audio controls src={track.url}></audio>
//                   <span className="duration">
//                     {new Date(track.duration * 1000).toISOString().substr(14, 5)}
//                   </span>
//                   <button className="edit-btn">Edit</button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(track.id)}
//                   >
//                     🗑
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <button className="next-btn">Next</button>
//       </div>
//     </div>
//   );
// };

// export default UploadTracks;
import React, { useRef, useState } from "react";
import "../styles/UploadTracks.css";
import { useLocation, useNavigate } from "react-router-dom";

const UploadTracks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive metadata from previous step
  const releaseMetadata = location.state || {};

  const [tracks, setTracks] = useState([]);
  const [draggedTrackIdx, setDraggedTrackIdx] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file upload
  const handleTrackUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validFormats = ["audio/flac", "audio/wav"];
    if (!validFormats.includes(file.type)) {
      alert("Only FLAC and WAV formats are allowed.");
      return;
    }

    const audioURL = URL.createObjectURL(file);
    const audio = new Audio(audioURL);
    audio.onloadedmetadata = () => {
      setTracks((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: file.name,
          format: file.type,
          url: audioURL,
          duration: audio.duration,
        },
      ]);
    };
  };

  // Open file input when upload section clicked
  const handleUploadSectionClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
      fileInputRef.current.click();
    }
  };

  const handleDelete = (id) => {
    setTracks(tracks.filter((track) => track.id !== id));
  };

  // Navigate to Preview & Distribute page
  const handleNextStep = () => {
    navigate("/four-page", {
      state: {
        ...releaseMetadata,
        tracks, // include uploaded tracks
      },
    });
  };

  // Handle drag start
  const handleDragStart = (idx) => {
    setDraggedTrackIdx(idx);
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (idx) => {
    if (draggedTrackIdx === null || draggedTrackIdx === idx) return;
    const updatedTracks = [...tracks];
    const [removed] = updatedTracks.splice(draggedTrackIdx, 1);
    updatedTracks.splice(idx, 0, removed);
    setTracks(updatedTracks);
    setDraggedTrackIdx(null);
  };

  return (
    <div className="upload-container">
      <h2 className="title">upload Track</h2>

      <div className="step">03/5</div>

      <div className="upload-box">
        <h3 className="tracks-heading">Tracks</h3>

        <div
          className="upload-section"
          onClick={handleUploadSectionClick}
          style={{ cursor: "pointer" }}
        >
          <div className="upload-area">
            <p className="upload-title">Upload Tracks</p>
            <p className="upload-subtitle">Format: flac or wav</p>
            <p className="upload-requirements">
              Requirements: Minimum of 16 bit, 44.1 Khz, stereo <br />
              Recommended 24 bits, 48Khz or 24 bits 96Khz
            </p>
          </div>
          <input
            type="file"
            accept=".flac,.wav"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleTrackUpload}
          />
        </div>

        {/* Uploaded tracks */}
        {tracks.length > 0 && (
          <div className="uploaded-tracks-list">
            {tracks.map((track, idx) => (
              <div
                key={track.id}
                className="track-card"
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(idx)}
                style={{
                  opacity: draggedTrackIdx === idx ? 0.5 : 1,
                  cursor: "move",
                }}
              >
                <div className="track-info" style={{ textAlign: "center" }}>
                  <strong>upload Track {idx + 1}</strong>
                  <p>{track.name}</p>
                </div>
                <div className="track-controls">
                  <audio controls src={track.url}></audio>
                  <span className="duration">
                    {new Date(track.duration * 1000)
                      .toISOString()
                      .substr(14, 5)}
                  </span>
                  <button className="edit-btn" onClick={() => navigate("/track-details")}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(track.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tracks.length <1? <p style={{color:"red"}}>please uploads track</p> : <></>}

        <button className="new-release-button next-btn" onClick={handleNextStep} disabled={tracks.length<1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadTracks;
