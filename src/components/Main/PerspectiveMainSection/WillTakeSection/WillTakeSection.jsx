import React from 'react';
import walli from '../../../../assets/imgs/2ic9mJLofec7RwkvzwOs4RWqlKtw1iczrdCOlqqw.jpg';
import { AiOutlineSearch } from "react-icons/ai";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './WillTakeSection.css';
import CreativestudioSection from '../CreativestudioSection/CreativestudioSection';
import ARoadmapSection from '../ARoadmapSection/ARoadmapSection';
import ArtisticMindSection from '../ArtisticMindSection/ArtisticMindSection';
import Top21Section from '../Top21Section/Top21Section';

const WillTakeSection = () => {
  const categories = [
    { name: "Company", path: "/" },
    { name: "Corporate", path: "/" },
    { name: "Creative Agency", path: "/" },
    { name: "Painting Agency", path: "/" },
    { name: "Creative", path: "/" }
  ];

  return (
    <section className="willtake-section">
      <div className="willtake-container">
        
        <div className="willtake-article">
          <img src={walli} alt="Artificial Intelligence" className="willtake-featured-image" />
          <div className="willtake-article-meta">
            <div className="meta-info">
              <Link className="meta-link">Arino<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">Oct 10, 2023<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">7 Comments</Link>
            </div>
            <h2 className="willtake-article-title">
              Artificial will take all human job next year
            </h2>
            <p className="willtake-article-excerpt">
              Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laborator...
            </p>
          </div>
        <CreativestudioSection />
        <ARoadmapSection />
        <ArtisticMindSection />
        <Top21Section />
        </div>
        

        <div className="willtake-sidebar">

         
          <div className="search-box">
            <h4 className="sidebar-title">Search</h4>
            <div className="search-input-container">
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
              />
              <AiOutlineSearch className="search-icon" />
            </div>
          </div>

          
          <div className="categories-box">
            <h4 className="sidebar-title">Categories</h4>
            <ul className="categories-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <CgChevronDoubleRight className="category-icon" />
                  <Link to={category.path} className="category-link">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="recentpost-box">
            <h4 className='recentpost-box-h4'>Recent Post</h4>
            <div className="recentpost-box-photobox">
                <div className="recentpost-box-photobox-photo"></div>
                <div className="recentpost-box-photobox-text">
                    <h3 className='recentpost-box-photobox-text-h3'>Digital Marketing A...</h3>
                    <p className='recentpost-box-photobox-text-p'>Oct 28, 2023</p>
                </div>
            </div>
            <div className="recentpost-box-photobox">
                <div className="recentpost-box-photobox-photo1"></div>
                <div className="recentpost-box-photobox-text">
                    <h3 className='recentpost-box-photobox-text-h3'>Arino is the leading...</h3>
                    <p className='recentpost-box-photobox-text-p'>Oct 28, 2023</p>
                </div>
            </div>
            <div className="recentpost-box-photobox">
                <div className="recentpost-box-photobox-photo2"></div>
                <div className="recentpost-box-photobox-text">
                    <h3 className='recentpost-box-photobox-text-h3'>Top21 Must-Read Bl...</h3>
                    <p className='recentpost-box-photobox-text-p'>Oct 28, 2023</p>
                </div>
            </div>
            <div className="recentpost-box-photobox">
                <div className="recentpost-box-photobox-photo3"></div>
                <div className="recentpost-box-photobox-text">
                    <h3 className='recentpost-box-photobox-text-h3'>Artistic mind will be...</h3>
                    <p className='recentpost-box-photobox-text-p'>Oct 28, 2023</p>
                </div>
                

            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WillTakeSection;