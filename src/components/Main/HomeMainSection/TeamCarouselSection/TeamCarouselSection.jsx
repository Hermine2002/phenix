import team1 from '../../../../assets/imgs/team1.png';
import team2 from '../../../../assets/imgs/team2.png';
import team3 from '../../../../assets/imgs/team3.png';
import team4 from '../../../../assets/imgs/team4.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from 'react-i18next';

import './TeamCarouselSection.css';

const TeamCarouselSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    initialSlide: 0,
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="teamcarousel-section">
      <h3 className="teammh3"> {t('home-section.team.title')}</h3>
      <h2 className="teammh2">{t('home-section.team.subtitle')}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={team1} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={team2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={team3} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={team4} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarouselSection;
