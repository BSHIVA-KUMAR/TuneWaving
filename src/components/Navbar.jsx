
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Tunewavelogo from "../assets/Tunewave Media Logo Final-01 1.png";
import TunewaveLogoutImage from "../assets/tunewave.in.png";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaHandHoldingUsd, FaYoutube } from "react-icons/fa";
import NavProfile from "../assets/NavProfile.png";
import SearchIcon from "../assets/Vector.png";
import DownArrow from "../assets/DownArrow.png";
import UpArrow from "../assets/UpArrow.png";
import ReleasesIcon from "../assets/Releases.png";
import TracksIcon from "../assets/Tracks.png";
import ArtistIcon from "../assets/Artists.png";
import { useNavigate } from "react-router-dom";  
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);
  const navigate=useNavigate();

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={Tunewavelogo} alt="logo" className="logo" onClick={() => {
    navigate("/");
  }} />

       

      {/* Search */}
      <div className="search-box">
        <img src={SearchIcon} alt="search" className="search-icon" />
        <input type="text" className="input-box" placeholder="Search for..." />
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Menu */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        {/* Dashboard */}
        <li className="nav-item">
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? "active" : ""}
            onClick={() => {
              setMenuOpen(false);
              setCatalogOpen(false);
            }}
          >
            Dashboard
          </Link>
        </li>

        {/* Catalog Dropdown */}
        <li className="dropdown-parent nav-item">
          <button
            className={`dropdown-toggle ${isActive("/catalog") ? "active" : ""}`}
            onClick={() => setCatalogOpen(!catalogOpen)}
          >
            Catalog
            <img
              src={catalogOpen ? UpArrow : DownArrow}
              alt="arrow"
              className="arrow-icon"
            />
          </button>
          {catalogOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/catalog?tab=releases"
                  onClick={() => {
                    setMenuOpen(false);
                    setCatalogOpen(false);
                  }}
                >
                  <img src={ReleasesIcon} alt="releases" className="menu-icon" />{" "}
                  Releases
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog?tab=tracks"
                  onClick={() => {
                    setMenuOpen(false);
                    setCatalogOpen(false);
                  }}
                >
                  <img src={TracksIcon} alt="tracks" className="menu-icon" />{" "}
                  Tracks
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog?tab=artists"
                  onClick={() => {
                    setMenuOpen(false);
                    setCatalogOpen(false);
                  }}
                >
                  <img src={ArtistIcon} alt="artists" className="menu-icon" />{" "}
                  Artists
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Analytics */}
        <li className="nav-item">
          <Link
            to="/analytics"
            className={isActive("/analytics") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Analytics
          </Link>
        </li>

        {/* Wallet */}
        <li className="dropdown-parent nav-item">
          <li>
            <Link
              to="/wallet"
              onClick={() => {
                setMenuOpen(false);
                setWalletOpen(false);
              }}
            >
              <MdAccountBalanceWallet className="menu-icon" /> Wallet
            </Link>
          </li>
          {walletOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/wallet/withdraw"
                  onClick={() => {
                    setMenuOpen(false);
                    setWalletOpen(false);
                  }}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FaHandHoldingUsd className="menu-icon" /> Withdraw
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Tools Dropdown */}
        <li className="dropdown-parent nav-item">
          <button
            className={`dropdown-toggle ${isActive("/tools") ? "active" : ""}`}
            onClick={() => setToolsOpen(!toolsOpen)}
          >
            Tools
            <img
              src={toolsOpen ? UpArrow : DownArrow}
              alt="arrow"
              className="arrow-icon"
            />
          </button>
          {toolsOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/yt-services"
                  className="nav-link flex items-center gap-2"
                  onClick={() => {
                    setMenuOpen(false);
                    setToolsOpen(false);
                  }}
                >
                  <FaYoutube style={{ color: "red", fontSize: "20px" }} />
                  YT Services
                </Link>
              </li>
              <li>
                <Link to="/ticket-raise" onClick={() => setProfileOpen(false)}>
                  Support Ticket
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Profile Dropdown */}
      <div
        className="profile-section"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <img src={NavProfile} alt="profile" className="profile-icon" />
        {profileOpen && (
          <ul className="profile-menu">
            <li>
              <Link to="/settings" onClick={() => setProfileOpen(false)}>
                Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => setProfileOpen(false)}>
                <img
                  src={TunewaveLogoutImage}
                  alt="TuneWave"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
