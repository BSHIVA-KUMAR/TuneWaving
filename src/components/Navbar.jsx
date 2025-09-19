import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Tunewavelogo from "../assets/Tunewave Media Logo Final-01 1.png";
import { FaRegHandPaper, FaExchangeAlt, FaWallet, FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import NavProfile from "../assets/NavProfile.png";
import SearchIcon from "../assets/Vector.png";
import DownArrow from "../assets/DownArrow.png";
import UpArrow from "../assets/UpArrow.png";
import ReleasesIcon from "../assets/Releases.png";
import TracksIcon from "../assets/Tracks.png";
import ArtistIcon from "../assets/Artists.png";
import { FaYoutube } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false); // fixed
  const [toolsOpen, setToolsOpen] = useState(false); // added
  const [profileOpen, setProfileOpen] = useState(false);
  const [toggleTube,settoggleTube] =useState(false)
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="navbar">
      <img src={Tunewavelogo} alt="logo" className="logo" />

      <div className="search-box">
        <img src={SearchIcon} alt="search" className="search-icon" />
        <input type="text" placeholder="Search for..." />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? "active" : ""}
            onClick={() => { setMenuOpen(false); setCatalogOpen(false); }}
          >
            Dashboard
          </Link>
        </li>

        {/* Catalog Dropdown */}
        <li className="dropdown-parent">
          <button
            className={`dropdown-toggle ${isActive("/catalog") ? "active" : ""}`}
            onClick={() => setCatalogOpen(!catalogOpen)}
          >
            Catalog
            <img src={catalogOpen ? UpArrow : DownArrow} alt="arrow" className="arrow-icon" />
          </button>

          {catalogOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/catalog?tab=releases" onClick={() => { setMenuOpen(false); setCatalogOpen(false); }}>
                  <img src={ReleasesIcon} alt="releases" className="menu-icon" /> Releases
                </Link>
              </li>
              <li>
                <Link to="/catalog?tab=tracks" onClick={() => { setMenuOpen(false); setCatalogOpen(false); }}>
                  <img src={TracksIcon} alt="tracks" className="menu-icon" /> Tracks
                </Link>
              </li>
              <li>
                <Link to="/catalog?tab=artists" onClick={() => { setMenuOpen(false); setCatalogOpen(false); }}>
                  <img src={ArtistIcon} alt="artists" className="menu-icon" /> Artists
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/analytics" className={isActive("/analytics") ? "active" : ""}>
            Analytics
          </Link>
        </li>

        {/* Wallet Dropdown */}
        <li className="dropdown-parent">
          <button
            className={`dropdown-toggle ${isActive("/wallet") ? "active" : ""}`}
            onClick={() => setWalletOpen(!walletOpen)}
          >
            100$
            <img src={walletOpen ? UpArrow : DownArrow} alt="arrow" className="arrow-icon" />
          </button>

          {walletOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/wallet/withdraw"
                  onClick={() => { setMenuOpen(false); setWalletOpen(false); }}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <FaHandHoldingUsd className="menu-icon" /> Withdraw
                </Link>
              </li>
              <li>
                <Link
                  to="/transactions"
                  onClick={() => { setMenuOpen(false); setWalletOpen(false); }}
                >
                  <AiOutlineTransaction className="menu-icon" /> Transactions
                </Link>
              </li>
              <li>
                <Link
                  to="/wallet"
                  onClick={() => { setMenuOpen(false); setWalletOpen(false); }}
                >
                  <MdAccountBalanceWallet className="menu-icon" /> Wallet
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Tools Dropdown */}
        <li className="dropdown-parent">
          <button
            className={`dropdown-toggle ${isActive("/tools") ? "active" : ""}`}
            onClick={() => setToolsOpen(!toolsOpen)}
          >
            Tools
            <img src={toolsOpen ? UpArrow : DownArrow} alt="arrow" className="arrow-icon" />
          </button>

          {toolsOpen && (
            <ul className="dropdown-menu">
              <li>
  <Link to="/Yt-services" onClick={()=>{toolsOpen(prev=>!prev)}} className="nav-link flex items-center gap-2">
    <FaYoutube style={{ color: "red", fontSize: "20px" }} />
    YT Services
  </Link>
</li>

            </ul>
          )}
        </li>
      </ul>

      {/* Profile Dropdown */}
      <div className="profile-container">
        <img src={NavProfile} alt="profile" className="profile" />
        <button className="dropdown-toggle profile-arrow" onClick={() => setProfileOpen(!profileOpen)}>
          <img src={profileOpen ? UpArrow : DownArrow} alt="arrow" className="arrow-icon" />
        </button>

        {profileOpen && (
          <ul className="dropdown-menu profile-menu">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
