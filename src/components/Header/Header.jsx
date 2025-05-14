import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import { IoIosPin, IoLogoFacebook } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import logoo from "../../assets/imgs/IMG_03171-2.png"
import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/IMG_03171-2.png"




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
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

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

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'am', name: 'Հայերեն', flag: '🇦🇲' }
  ];

  const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (code) => {
      i18n.changeLanguage(code);
      setIsOpen(false);
    };

    return (
      <div className="relative w-48">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between w-full"
        >
          <span>
            {languages.find(lang => lang.code === i18n.language)?.flag}{' '}
          </span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="px-3 py-2 text-white hover:bg-gray-700 cursor-pointer flex items-center"
              >
                {lang.flag} {lang.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  if (headerData.isLoading) {
    return <div className="header-loading">Loading...</div>;
  }

  return (
    <header>
      <nav className="navbar">
  
        
        <Link to='/'>
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
        </Link>
        

        
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
            <li className="lists" > <Link to='/' className="list"> {t('header.home')}</Link> </li>
            <li className="lists"> <Link to='/about' className="list">{t('header.about')} </Link> </li>
            <li className="lists"><Link to='/what-we-do' className="list">{t('header.whatWeDo')}</Link></li>
            <li className="lists"><Link className="list" to="/perspective">{t('header.blog')}</Link></li>
            <li className="lists" > <Link to="/coin" className="list">{t('header.coin')}</Link></li>
            <li className="lists"> <Link to="/curses" className="list">{t('header.courses')}</Link></li>
          </ul>
          <LanguageDropdown />
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
          <ul className="nav-menu-icon">
         <li className="list" > <Link to='/' className="list"> {t('header.home')}</Link> </li>
           <li className="list"> <Link to='/about' className="list">{t('header.about')} </Link> </li>
            <li className="list"><Link to='/what-we-do' className="list">{t('header.whatWeDo')}</Link></li>
            <li className="list"><Link className="list" to="/perspective">{t('header.blog')}</Link></li>
            <li className="list" > <Link to="/coin" className="list">{t('header.coin')}</Link></li>
            <li className="list"> <Link to="/curses" className="list">{t('header.courses')}</Link></li>
             </ul>
        </div>

          <h2 className="burger-h2">
            {t('header.burger-h2')}
          </h2>

          <div className="contactus-box">
            <p className="contactus-box-p">{t('header.contactus-box-p')}</p>
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
            <p className="Subsc-p">{t('header.Subsc-p')}</p>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="subscinput"
              />
              <button type="submit">{t('header.submit')}</button>
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




