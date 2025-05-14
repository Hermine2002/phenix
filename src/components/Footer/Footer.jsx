import { IoLogoFacebook } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useTranslation } from "react-i18next";

import logo from "../../assets/imgs/IMG_03171-2.png";

import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const [input, setInput] = useState("");
  const { t, i18n } = useTranslation()
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch("http://127.0.0.1:8000/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
  };

  return (
    <footer>
     <div className="footer-container">
      <div className="footer-container-child">
     <div className="footer-section">
      <div className="footer-section-img">
      <img src={logo} alt="logo" />
      </div>

   
          <p className="footer-container-p">
          {t('footer.aboutText')}
          </p>
        </div>
        <div className="icons-box">
            <a href="/" className="icons-box-child">  <IoLogoFacebook className="icons"/></a>
            <a href="/" className="icons-box-child" > <ImLinkedin2 className="icons"/></a>
            <a href="/" className="icons-box-child" > <IoLogoInstagram className="icons"/></a>
            <a href="/"className="icons-box-child"> <FaYoutube  className="icons"/></a>  
          </div>
          </div>
          {/* //////////////////////// */}
          <div className="footer-section2">
         
         <a href="/" className="menu-widget"><h3 className="sectionfooter-h3">   {t('footer.servicesTitle')}</h3></a> 
         <a href="/coin" className="menu-widget"> <p className="sectionfooter-p"> {t('footer.services.coin')} </p></a>
         <a href="/curses" className="menu-widget"> <p className="sectionfooter-p">  {t('footer.services.courses')}</p></a>
         <a href="/what-we-do" className="menu-widget"> <p className="sectionfooter-p"> {t('footer.services.whatWeDo')} </p></a> 
         <a href="/perspective" className="menu-widget"> <p className="sectionfooter-p"> {t('footer.services.perspective')} </p></a> 
     
          </div>
       {/* ///////////////////////////////// */}
       <div className="footer-section3">
          <h3 className="sectionfooter-h3">{t('footer.contactTitle')}</h3>
          <p className="sectionfooter-p"> {t('footer.contact.phone')}</p>
          <p className="sectionfooter-p"> info@sazday.com</p>
          <p className="sectionfooter-p">
          {t('footer.contact.address')}
          </p>
        </div>

        {/* ///////////////////////// */}

        <div className="footer-section-subscribe">
        <h3 className="sectionfooter-h3">  {t('footer.subscribeTitle')}</h3>
          <div className="button-box">
         
          <form action="" className="input-form">
          <input
            type="email"
            placeholder="example@gmail.com"
            className="input-footer"
            onChange={handleChange}
            value={input}
          /><button className="footer-button" onClick={handleSubmit}>
         {t('footer.sendButton')}
        </button>
        </form>
        </div>
          <p className="input-p2">
          {t('footer.subscribeText')}
          </p>
        </div>
     </div>

    </footer>
  );
};

export default Footer;
