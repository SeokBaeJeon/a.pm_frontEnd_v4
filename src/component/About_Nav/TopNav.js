import '../../styles/TopNav.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav({ theaterId }) {
  const navigate = useNavigate();

  const navigateToNP = () => {
    navigate(`/theater/${theaterId}/NowPerformance_page`);
  };
  const navigateToInfo = () => {
    navigate(`/theater/${theaterId}/Infomation_page`);
  };
  const navigateToLoca = () => {
    navigate(`/theater/${theaterId}/Location_page`);
  };
  const navigateToSeeya = () => {
    navigate(`/theater/${theaterId}/Seeya_page`);
  };

  return (
    <div className="Top-menu-container">
      <button onClick={navigateToNP} className="Top-menu-item">
        진행중인 공연 정보
      </button>
      <button onClick={navigateToInfo} className="Top-menu-item">
        공연장 정보
      </button>
      <button onClick={navigateToLoca} className="Top-menu-item">
        위치 정보
      </button>
      <button onClick={navigateToSeeya} className="Top-menu-item">
        시야 정보
      </button>
    </div>
  );
}

export default TopNav;
