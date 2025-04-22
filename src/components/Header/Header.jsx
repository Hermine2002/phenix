import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import { IoIosPin, IoLogoFacebook } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import logoo from "../../assets/imgs/logo.png"


import logo from "../../assets/imgs/logo.png"




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerData, setHeaderData] = useState({
    menu: [],
    phone: "",
    email: "",
    address: "",
    socials: {},
    isLoading: true,
  });

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/header-data"
        );
        console.log(response.data);

        setHeaderData({
          logo: response.data.logo || "/default-logo.png",
          menu: response.data.menu || [],
          phone: response.data.phone || "+44 454 7800 112",
          email: response.data.email || "infotech@arino.com",
          address:
            response.data.address ||
            "50 Wall Street Suite, 44150 Ohio, United ",
          socials: response.data.socials || {},
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching header data:", error);
        setHeaderData((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    };

    fetchHeaderData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (headerData.isLoading) {
    return <div className="header-loading">Loading...</div>;
  }

  return (
    <header>
      <nav className="navbar">

        <div className="header-logo">
        <img
          src={logoo}
          alt="logo"
          className=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/default-logo.png";
          }}
        />
        </div>

        
{/*       
      <ul className="nav-links">
          {headerData.menu.map((item, index) => (
            <li key={index} className={item.children ? "dropdown" : ""}>
              <Link
                to={item.url}
                className="a"
                target={item.target_blank ? "_blank" : "_self"}
               >Home
                {item.title}
              </Link>
            </li>
          ))}
        </ul>  */}
         <div className="menu-box"> 
          <ul className="nav-menu">
         <li className="list" > <Link to='/' className="list"> Home</Link> </li>
           <li className="list"> <Link to='/about' className="list">About </Link> </li>
            <li className="list list2"><Link to='/what-we-do' className="list list2">what we do</Link></li>
            <li className="list"><Link className="list" to="/perspective">Perspective</Link></li>
            <li className="list" > <Link to="/coin" className="list">coin</Link></li>
            <li className="list"> <Link to="/curses" className="list">curses</Link></li>
             </ul>
        </div> 

         <div className="menu-icons-box">
         <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar1 ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar1 bar2 ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar1 bar3 ${menuOpen ? "open" : ""}`}></div>
        </div>
         </div>

      
      </nav>

      <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
        <div className="mobile-logo-wrapper">
        <img
            src={logo} 
            alt="logo"
            className="logo-icon"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default-logo.png";
            }}
          />
          <div className="close-box">
        <button className="close-btn" onClick={toggleMenu}>
          ✖
        </button>
        </div>
        </div>
        
       
        <div className="box11">
          


<div className="menu-box"> 
          <ul className="nav-menu">
         <li className="list" > <Link to='/' className="list"> Home</Link> </li>
           <li className="list"> <Link to='/about' className="list">About </Link> </li>
            <li className="list list2"><Link to='/what-we-do' className="list list2">what we do</Link></li>
            <li className="list"><Link className="list" to="/perspective">Perspective</Link></li>
            <li className="list" > <Link to="/coin" className="list">coin</Link></li>
            <li className="list"> <Link to="/curses" className="list">curses</Link></li>
             </ul>
        </div>

          <h2 className="burger-h2">
            Do you have a project in your mind? Keep connect us.
          </h2>

          <div className="contactus-box">
            <p className="contactus-box-p">Contact Us</p>
            <div className="contact-item">
              <span className="icon">
                <MdAddIcCall className="callll" />
              </span>
              <a href={`tel:${headerData.phone}`} className="icon-text">{headerData.phone}</a>
            </div>
            <div className="contact-item">
              <span className="icon">
                <MdEmail className="callll" />
              </span>
              <a href={`mailto:${headerData.email}`} className="icon-text">{headerData.email}</a>
            </div>
            <div className="contact-item">
              <span className="icon">
                <IoIosPin className="callll" /> 
              </span>
              <span className="icon-text">{headerData.address}</span>
            </div>
          </div>

          <div className="subscribe-container">
            <p className="Subsc-p">Subscribe</p>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="subscinput"
              />
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="logosbox">
            {headerData.socials.facebook && (
              <div className="krug">
                <a
                  href={headerData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="logoos" />
                </a>
              </div>
            )}
            {headerData.socials.linkedin && (
              <div className="krug">
                <a
                  href={headerData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImLinkedin2 className="logoos" />
                </a>
              </div>
            )}
            {headerData.socials.twitter && (
              <div className="krug">
                <a
                  href={headerData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="logoos" />
                </a>
              </div>
            )}
            {headerData.socials.youtube && (
              <div className="krug">
                <a
                  href={headerData.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="logoos" />
                </a>
              </div>
            )}
          </div>
        </div> 
       </div> 
    </header>
  );
};

export default Header;




