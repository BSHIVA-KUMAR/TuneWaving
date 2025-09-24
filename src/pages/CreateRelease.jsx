/* eslint-disable no-unused-vars */
import "../styles/CreateRelease.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DustbinIcon from "../assets/Dustbin.svg";
import iIcon from "../assets/material-symbols_info-outline.png"
import cloud from '../assets/Vector@3x.png'
import dot from "../assets/Component 22.png"

function CreateRelease() {
  const navigate = useNavigate();
  const [fileUploaded, setFileUploaded] = useState(null);
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [artistImage, setArtistImage] = useState(null);
  const [showLocalizeModal, setShowLocalizeModal] = useState(false);

  const [showLinkProfileModal, setShowLinkProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [artistProfileId, setArtistProfileId] = useState("");


  const [showAddArtistModal, setShowAddArtistModal] = useState(false);
  const [showPerformer,setShowPerformer] = useState(false)
  const [showProducer,setShowProducer]=useState(false)
  const [artist,setArtist]=useState(false)
  const [showicons,seticons] = useState(true)
  //const [artistRole, setArtistRole] = useState("");
  //const [artistName, setArtistName] = useState("");
  const [mainArtist,setMainArtist]= useState("")
  const [artistDropDownRole,setArtistDropDownRole] =useState("")
  const [artistdropDownName,setArtistdropDownName] = useState("")
  const [producerDropDownRole,setproducerDropDownRole]=useState("")
  const [contributors, setContributors] = useState("");
  const [performerDropDownRole,setperformerDropDownRole] = useState("")
  // State to control second dropdown visibility
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [showthirdDropdown,setthirdDropDown] = useState(false)
  const [originalDate,setOriginalDate] = useState("")
  const [digitalDate,setDigitalDate] = useState("")

  const [fileError, setFileError] = useState(""); // Add this state

  const [hasUPC, setHasUPC] = useState(null);


  const openLinkProfileModal = (profile) => {
    setSelectedProfile(profile);
    setArtistProfileId("");
    setShowLinkProfileModal(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      if (img.width === 3000 && img.height === 3000) {
        setFileUploaded(file);
        setFileError("");
      } else {
        setFileUploaded(null);
        setFileError("Image must be exactly 3000px by 3000px.");
      }
      URL.revokeObjectURL(img.src);
    };
  };

  return (
    <div className="create-release-page">

      <h2 className="page-title">Create A New Release</h2>

      {/* Step 1 */}
      <div className="section">
        <h3>Enter Release Details</h3>

        <div className="input-group">
          <label htmlFor="title" >Release Title <span style={{color:"red"}}>*</span> </label>
          <input type="text" id="title" placeholder="e.g., I got my summer" className="input-field" style={{width:"50%"}}  />
        </div>
        <br />

        <div className="input-group">
          <label htmlFor="titleversion">Title Version</label>
          <input type="text" id="titleversion" placeholder="e.g., Live, Remix, Remastered" className="input-field" style={{width:"50%"}} />
        </div>
        <br />

        <span></span>

        <button className="btn-secondary" style={{marginLeft:"140px"}} onClick={() => setShowLocalizeModal(true)}>
          Localize Your Release
        </button>
        
        <br />

 <div className="box-i-showdow">
    <div className="box-i">
      <p className="field-tip">
    ℹ️ Apple does not allow changes to Artist Name and Artist ID after initial submission.
  </p>
    </div>
  </div>
      </div>




      {/* Localize Your Release Modal Popup */}
{showLocalizeModal && (
  <div className="modal-overlay">
    <div className="modal-container">
      <h2>Localize Your Release</h2>

      <label>Language *</label>
      <input type="text" placeholder="e.g., English, French" className="input-field" />

      <label>Localized Title *</label>
      <input type="text" placeholder="Localized Title" className="input-field" />

      <label>Title Version</label>
      <input type="text" placeholder="Optional" className="input-field" />

      <div className="button-group">
        <button className="btn-secondary" onClick={() => setShowLocalizeModal(false)}>
          Cancel
        </button>
        <button className="new-release-button" onClick={() => setShowLocalizeModal(false)}>
          Apply
        </button>
      </div>
    </div>
  </div>
)}



      {/* Step 2 */}
      <div className="section upload-section">
        <h3>Upload Cover Artwork</h3>
        <div className="form-grid">
          <div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/png, image/jpeg, image/jpg, image/jfif"
              onChange={handleFileChange} // <-- use new handler
            />
            {fileUploaded ? (
              <img src={URL.createObjectURL(fileUploaded)} alt="Preview" className="upload-preview" />
            ) : (
              <div className="text">
                <p><img src={cloud} className="could-img" alt="could-image"/>Drag here or click to browse a file</p>
                <p className="file-types">Supported: JPG, JPEG, PNG, JFIF (Must be exactly 3000px x 3000px, Max 10MB)</p>
                {fileError && <p style={{color: "red"}}>{fileError}</p>}
              </div>
            )}
          </div>

          <div className="tips-box">
            <h4>Tips:</h4>
            <p>Please ensure your cover art is square, less than 10 MB and a minimum of 3000px wide (3000px width is recommended for best results).</p>
            <br />
            <h3>Your cover art cannot contain:</h3>
            <ul>
              <li><img src={dot}/>Any text other than the release title and/or artist name</li>
              <li><img src={dot}/>Third-party logos or trademarks without express written consent from the trademark holder</li>
              <li><img src={dot}/>Sexually explicit imagery</li>
              <li><img src={dot}/>Supported: JPG, JPEG, PNG, JFIF</li>
            </ul>
          </div>
        </div>
      </div>

    {/* Step 3 */}
<div className="section">
  <h3>Contributors</h3>

  

  { showicons && (
    <div className="contributors-buttons">
      <button className="btn-secondary" onClick={() => {setShowArtistModal(true)
       setArtistDropDownRole("");
        setShowSecondDropdown(false);
        setthirdDropDown(false);

      }}>
        + Add Main Primary Artist
      </button>

      <button className="btn-secondary" onClick={() => {setShowAddArtistModal(true)
      setArtistDropDownRole("");
        setShowSecondDropdown(false);
        setthirdDropDown(false);
      }

      }>
        + Add Artist
      </button>

      <button className="btn-secondary" onClick={() => {setShowPerformer(true)
        setperformerDropDownRole("");
        setShowSecondDropdown(false);
        setthirdDropDown(false);}
      }>
        + Add Performer
      </button>

      <button className="btn-secondary" onClick={() => {
        setShowProducer(true);
        setproducerDropDownRole("");
        setShowSecondDropdown(false);
        setthirdDropDown(false);
      }}>
        + Add Credit
      </button>
    </div>
  )}

  <div className="box-i-showdow">
    <div className="box-i">
      <p className="field-tip">
    ℹ️ Apple does not allow changes to Artist Name and Artist ID after initial submission.
  </p>
    </div>
  </div>

 
</div>

 {/* Artist Modal new Popup */}

 {
  showArtistModal && (
     <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add main Primary Artist</h3>
              <div className="second-dropdown">
                <label className="input-label">Artist Name <span style={{color:'red'}}>*</span> </label>
                <select className="input-field" style={{width:"100%"}}
                 id="DropDownArtistName"
                required
                value={artistdropDownName}
                onChange={e => {
                  setArtistdropDownName(e.target.value);
                  setthirdDropDown(!!e.target.value); // Show if any value is selected
                }}>
                  <option value="" disabled>Select Artist</option>
                  <option value="a">kavya</option>
                  <option value="b">venala</option>
                  <option value="c">isha</option>
                  <option value="d">krishna</option>
                </select>
              </div>

            {
              showthirdDropdown && 
              <div>
                 <div style={{ marginTop: "30px", marginLeft:"35%" }}>  {/* Add spacing before button */}
                    <button className="btn-secondary localize-btn" onClick={() => {setShowLocalizeModal(true); setShowArtistModal(false) }} >Localize Your Release</button>
            </div>

            <p className="field-tip">
              Select the services where the artist has previously distributed and link their artist profiles. If no profile exists, new profiles will automatically be created for Spotify and Apple Music upon their first release.
            </p>
            <div className="box-i-showdow">
              <div className="box-i">
              <img src={iIcon}/>
              <p>In order for your release to appear on the updated profile, please redeliver</p>
                </div>
              </div>

            <div className="profile-buttons-box">
              <div className="profile-button">
                <i className="fab fa-soundcloud"></i>
                <span>SoundCloud</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('SoundCloud')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Spotify')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-apple"></i>
                <span>Apple Music</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Apple Music')}>Link Profile</button>
              </div>
            </div>
                </div>

            }

            <hr className="line" />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => {
                setShowArtistModal(false);
                setArtistDropDownRole("");
                setArtistdropDownName("");
                setShowSecondDropdown(false);
                setthirdDropDown(false);
              }}>Cancel</button>
              <button className="new-release-button">Add Artist</button>
            </div>
          </div>
        </div>
    
  )
 }


      {/* Artist Modal Popup */}
      {artist && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Create a new Main Primary Artist</h3>

            <div className="artist-image-box">
              <input
                type="file"
                id="artistImageInput"
                style={{ display: "none" }}
                accept="image/png, image/jpeg, image/jpg, image/jfif"
                onChange={(e) => setArtistImage(e.target.files[0])}
              />

              {artistImage ? (
                <div style={{ position: "relative", width: "140px", height: "140px" }}>
                  <img
                    src={URL.createObjectURL(artistImage)}
                    alt="Artist Preview"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                  />
                  <button
                    type="button"
                    className="btn-reselect-icon"
                    onClick={() => document.getElementById("artistImageInput").click()}
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      border: "none",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div
                  className="placeholder-icon"
                  onClick={() => document.getElementById("artistImageInput").click()}
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    backgroundColor: "#f3f4f6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "50px",
                    color: "#2563eb",
                    cursor: "pointer",
                  }}
                >
                  +
                </div>
              )}
            </div>

            <p className="image-support-text">
              We Support PNG, JFIF, JPEG, Or JPG Images.
            </p>

             <div className="input-group">
                    <label className="input-label">enter your name</label>
                    <input type="text" placeholder="Your Name Here" className="input-field" />
              </div>

            <div style={{ marginTop: "30px" }}>  {/* Add spacing before button */}
                    <button className="btn-secondary ">Localize Your Release</button>
            </div>

            <p className="field-tip">
              Enter the name exactly as you want it to appear on platforms like Spotify, Apple Music, etc.
            </p>

            <div className="profile-buttons-box">
              <div className="profile-button">
                <i className="fab fa-soundcloud"></i>
                <span>SoundCloud</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('SoundCloud')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Spotify')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-apple"></i>
                <span>Apple Music</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Apple Music')}>Link Profile</button>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => {setShowArtistModal(false)  }}>Cancel</button>
              <button className="btn-primary">Create</button>
            </div>
          </div>
        </div>
      )}


      {/* show add artist model */}
      {
        showAddArtistModal &&   (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Key Artist</h3>
            <label className="input-label">Role<span style={{color:"red"}}>*</span></label>
              <select
                name="myDropdown"
                className="input-field" 
                style={{width:"100%"}}
                id="myDropdown"
                required
                value={artistDropDownRole}
                onChange={e => {
                  setArtistDropDownRole(e.target.value);
                  setShowSecondDropdown(!!e.target.value); // Show if any value is selected
                }}
              >
                <option value="" disabled>Select Artist</option>
                <option value="option1">Featuring</option>
                <option value="option2">Primary Artist</option>
                <option value="option3">Remixer</option>
                <option value="option4">With</option>
              </select>

            {showSecondDropdown && (
              <div className="second-dropdown">
                <label className="input-label">Artist Name <span style={{color:'red'}}>*</span> </label>
                <select className="input-field" style={{width:"100%"}}
                 id="DropDownArtistName"
                required
                value={artistdropDownName}
                onChange={e => {
                  setArtistdropDownName(e.target.value);
                  setthirdDropDown(!!e.target.value); // Show if any value is selected
                }}>
                  <option value="" disabled>Select Artist</option>
                  <option value="a">kavya</option>
                  <option value="b">venala</option>
                  <option value="c">isha</option>
                  <option value="d">krishna</option>
                </select>
              </div>
            )}

            {
              showthirdDropdown && 
              <div>
                 <div style={{ marginTop: "30px", marginLeft:"35%"}}>  {/* Add spacing before button */}
                    <button className="btn-secondary localize-btn" onClick={() => {setShowLocalizeModal(true) ; setShowAddArtistModal(false)}}  >Localize Your Release</button>
            </div>

            <p className="field-tip">
              Select the services where the artist has previously distributed and link their artist profiles. If no profile exists, new profiles will automatically be created for Spotify and Apple Music upon their first release.
            </p>
            <div className="box-i-showdow">
              <div className="box-i">
              <img src={iIcon}/>
              <p>In order for your release to appear on the updated profile, please redeliver</p>
                </div>
              </div>

            <div className="profile-buttons-box">
              <div className="profile-button">
                <i className="fab fa-soundcloud"></i>
                <span>SoundCloud</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('SoundCloud')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Spotify')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-apple"></i>
                <span>Apple Music</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Apple Music')}>Link Profile</button>
              </div>
            </div>
                </div>

            }

            <hr className="line" />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => {
                setShowAddArtistModal(false);
                setArtistDropDownRole("");
                setArtistdropDownName("");
                setShowSecondDropdown(false);
                setthirdDropDown(false);
              }}>Cancel</button>
              <button className="new-release-button">Add Artist</button>
            </div>
          </div>
        </div>
      )
      }



      {/* performer popup */}
      {
        showPerformer &&   (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Performer</h3>
            <label className="input-label">Role<span style={{color:"red"}}>*</span></label>
              <select
                name="myDropdown"
                className="input-field"
                style={{width:"100%"}}
                id="myPerformerDropdown"
                required
                value={performerDropDownRole}
                onChange={e => {
                  setperformerDropDownRole(e.target.value);
                  setShowSecondDropdown(!!e.target.value); // Show if any value is selected
                }}
              >
                <option value="" disabled>Select Role</option>
                <option value="option1">Acccordion</option>
                <option value="option2">Acoustic Baritone Guitar</option>
                <option value="option3">Acoustic Bass Guiter</option>
                <option value="option4">Acoustic Fretless Guiter</option>
                <option value="option5"> Acoustic Fretless Guiter</option>
                <option value="option6"> Acoustic Guitar</option>
                <option value="option7"> Actor</option>

              </select>

            {showSecondDropdown && (
              <div className="second-dropdown">
                <label className="input-label">Artist Name <span style={{color:'red'}}>*</span> </label>
                <select className="input-field" style={{width:"100%"}}
                 id="DropDownperformerName"
                required
                value={artistdropDownName}
                onChange={e => {
                  setArtistdropDownName(e.target.value);
                  setthirdDropDown(!!e.target.value); // Show if any value is selected
                }}>
                  <option value="" disabled>Select Artist</option>
                  <option value="a">kavya</option>
                  <option value="b">venala</option>
                  <option value="c">isha</option>
                  <option value="d">krishna</option>
                </select>
              </div>
            )}

            {
              showthirdDropdown && 
              <div>
                 <div style={{ marginTop: "30px",marginLeft:"35%" }}>  {/* Add spacing before button */}
                    <button className="btn-secondary localize-btn" onClick={() => {setShowLocalizeModal(true); setShowPerformer(false)}}>Localize Your Release</button>
            </div>

            <p className="field-tip">
              Select the services where the artist has previously distributed and link their artist profiles. If no profile exists, new profiles will automatically be created for Spotify and Apple Music upon their first release.
            </p>
            <div className="box-i-showdow">
              <div className="box-i">
              <img src={iIcon}/>
              <p>In order for your release to appear on the updated profile, please redeliver</p>
                </div>
              </div>

            <div className="profile-buttons-box">
              <div className="profile-button">
                <i className="fab fa-soundcloud"></i>
                <span>SoundCloud</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('SoundCloud')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Spotify')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-apple"></i>
                <span>Apple Music</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Apple Music')}>Link Profile</button>
              </div>
            </div>
                </div>

            }

            <hr className="line" />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => {setShowPerformer(false),setArtistDropDownRole(""),setArtistdropDownName(""),showSecondDropdown(false),showthirdDropdown(false)}}>Cancel</button>
              <button className="new-release-button">Add Artist</button>
            </div>
          </div>
        </div>
      )
      }

      {/* producer popup */}
      {
        showProducer &&   (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Producer & Engineer Credits</h3>
            <label className="input-label">Role<span style={{color:"red"}}>*</span></label>
              <select
                name="myDropdown"
                className="input-field"  style={{width:"100%"}}
                id="myProducerDropdown"
                required
                value={producerDropDownRole}
                onChange={e => {
                  setproducerDropDownRole(e.target.value);
                  setShowSecondDropdown(!!e.target.value); // Show if any value is selected
                }}
              >
                <option value="" disabled de>Select Artist</option>
                <option value="option1">Art Director</option>
                <option value="option2">Producer</option>
                <option value="option3">Art Work</option>
                <option value="option4">Acoustic Fretless Guiter</option>
                <option value="option5"> Acoustic Fretless Guiter</option>
                <option value="option6"> Acoustic Guitar</option>
                <option value="option7"> Actor</option>
              </select>

            {showSecondDropdown && (
              <div className="second-dropdown">
                <label className="input-label">Artist Name <span style={{color:'red'}}>*</span> </label>
                <select className="input-field" style={{width:"100%"}}
                 id="DropDownArtistName"
                required
                value={artistdropDownName}
                onChange={e => {
                  setArtistdropDownName(e.target.value);
                  setthirdDropDown(!!e.target.value); // Show if any value is selected
                }}>
                  <option value="" disabled>Select Artist</option>
                  <option value="a">kavya</option>
                  <option value="b">venala</option>
                  <option value="c">isha</option>
                  <option value="d">krishna</option>
                </select>
              </div>
            )}

            {
              showthirdDropdown && 
              <div>
                 <div style={{ marginTop: "30px",marginLeft:"35%"  }}>  {/* Add spacing before button */}
                    <button className="btn-secondary localize-btn" onClick={() => {setShowLocalizeModal(true);setShowProducer(false)}}>Localize Your Release</button>
            </div>

            <p className="field-tip">
              Select the services where the artist has previously distributed and link their artist profiles. If no profile exists, new profiles will automatically be created for Spotify and Apple Music upon their first release.
            </p>
            <div className="box-i-showdow">
              <div className="box-i">
              <img src={iIcon}/>
              <p>In order for your release to appear on the updated profile, please redeliver</p>
                </div>
              </div>

            <div className="profile-buttons-box">
              <div className="profile-button">
                <i className="fab fa-soundcloud"></i>
                <span>SoundCloud</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('SoundCloud')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Spotify')}>Link Profile</button>
              </div>

              <div className="profile-button">
                <i className="fab fa-apple"></i>
                <span>Apple Music</span>
                <button className="link-btn" onClick={() => openLinkProfileModal('Apple Music')}>Link Profile</button>
              </div>
            </div>
                </div>

            }

            <hr className="line" />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => {
                setShowProducer(false);
                setproducerDropDownRole("");
                setShowSecondDropdown(false);
                setthirdDropDown(false);
              }}>Cancel</button>
              <button className="new-release-button">Add Artist</button>
            </div>
          </div>
        </div>
      )
      }



      {/* Link Profile Modal Popup */}
      {showLinkProfileModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Link your Artist Profile - {selectedProfile}</h2>

            <label>Artist {selectedProfile} ID *</label>
            <input
              type="text"
              placeholder={`Enter your ${selectedProfile} ID`}
              className="input-field"
              value={artistProfileId}
              onChange={(e) => setArtistProfileId(e.target.value)}
            />

            <p className="helper-text">
              {selectedProfile === "Spotify" &&
                "Open your artist page on Spotify and copy only the numeric/ID part of the URL (e.g., 22bE4uQ6baNwSHPVcDxLCe)."
              }
              {selectedProfile === "Apple Music" &&
                "Open your artist page on Apple Music and copy only the ID part of the URL (e.g., 552010757)."
              }
              {selectedProfile === "SoundCloud" &&
                "Enter your SoundCloud username from your profile URL. For example, if your URL is https://soundcloud.com/artistname123, enter only artistname123 (not the full link).\n\nNote: SoundCloud maps each ISRC to a single profile, so only the Main Primary Artist’s profile URL will be sent."
              }
            </p>

            <div className="button-group">
              <button className="btn-secondary" onClick={() => setShowLinkProfileModal(false)}>
                Cancel
              </button>
              <button className="new-release-button" onClick={() => setShowLinkProfileModal(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      

      {/* Step 4 */}
      <div className="section">
        <h3>Genres</h3>

        <div className="genres-grid">
          <div>
          <label className="label-name" htmlFor="primary-genre">Primary Genre <span style={{color:"red"}}>*</span></label>
          <br />
          <select className="input-field" style={{width:"100%" }} id="primary-genre">
            <option>Select Primary Genre</option>
            <option>Pop</option>
            <option>Rock</option>
            <option>Hip-Hop</option>
          </select>
          </div>
          <div>

          <label className="label-name" htmlFor="second-genre">Secondary Genre <span style={{color:"red"}}>*</span></label>
          <br />
          <select className="input-field" style={{width:"100%" }} id="second-genre">

            <option>Select Secondary Genre</option>
            <option>Pop</option>
            <option>Rock</option>
            <option>Hip-Hop</option>
          </select>
        </div>
        </div>
      </div>


      {/* {step :5} */}

       <div className="section">
        <h3>Date</h3>
        <div style={{display:"flex",gap:"30px" , marginLeft:"10%"}}>
           <div className="date-box">
                <label>Digital Release Date <span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={digitalDate}
                  style={{width:"300px"}}
                  onChange={(e) => setDigitalDate(e.target.value)}
                />
              </div>

              <div className="date-box">
                <label>Original Release Date <span style={{color:"red"}}>*</span></label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={originalDate}
                  style={{width:"300px"}}
                  onChange={(e) => setOriginalDate(e.target.value)}
                />
              </div>
            </div>

        </div>
             
      {/* {step:6} */}
     <div className="section">
  <h3>UPC</h3>
  <div className="input-group">
    <label htmlFor="upc">
      Do you have a UPC Code? <span style={{ color: "red" }}>*</span>
    </label>
    <div style={{ display: "flex", gap: "30px", marginTop: "8px" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <input
          type="radio"
          name="upcOption"
          value="yes"
          onChange={() => setHasUPC("yes")}
          checked={hasUPC === "yes"}
        />
        <span>Yes</span>
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <input
          type="radio"
          name="upcOption"
          value="no"
          onChange={() => setHasUPC("no")}
          checked={hasUPC === "no"}
        />
        <span>No</span>
      </label>
    </div>
  </div>

  {hasUPC === "yes" && (
    <div className="input-group" style={{ marginTop: "15px" }}>
      <label htmlFor="upcCode">
        UPC Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        id="upcCode"
        placeholder="Enter Your UPC Code"
        className="input-field"
        style={{ width: "50%" }}
      />
    </div>
  )}
</div>


    
      {/* Action Buttons */}
      <div className="form-actions">
        <button className="btn-secondary" onClick={() => navigate("/")}>Cancel</button>
        <button className="new-release-button" onClick={() => navigate("/upload-tracks")}>Next</button>
      </div>


    </div>
  );
}

export default CreateRelease;
