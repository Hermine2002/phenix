import React, { useState, useEffect } from "react";
import team1 from "../../../../assets/imgs/team1.png";
import team2 from "../../../../assets/imgs/team2.png";
import team3 from "../../../../assets/imgs/team3.png";
import team4 from "../../../../assets/imgs/team4.png";
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";


import './TeamCarouselSection.css';

const teamMembers = [team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4,  team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4,
    team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4,
    team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4,  team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4,
    team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4,
    team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4, team1, team2, team3, 
    team4,  team1, team2, team3, team4, team1, team2, team3, team4, team1, 
    team2, team3, team4, team1, team2, team3, team4,
    team1, team2, team3, team4, team1, team2, team3, 
    team4, team1, team2, team3, team4, team1, team2, team3, team4,]; 

const TeamCarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); 
        return () => clearInterval(interval); 
    }, [currentIndex]);

    return (
        <div className="teamcarousel-section">
            <h3 className="teammh3">Our Team</h3>
            <h2 className="teammh2">Awesome Team Members</h2>
            <div className="carouselll-container">
                <div className="carouselll">
                    

                    
                    <div
                        className="carousel-inner"
                        style={{
                            transform: `translateX(-${currentIndex * 20}%)`,
                            transition: "transform 1s ease-in-out",
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <div key={index} className="carousel-item">
                                <img src={member} alt={`team${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="buttooonbox">
                    <LuMoveLeft  className="nav-btn left" onClick={prevSlide}/>
                    <LuMoveRight  onClick={nextSlide} className="nav-btn right"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TeamCarouselSection;
