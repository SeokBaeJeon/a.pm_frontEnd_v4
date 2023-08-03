import * as React from 'react';
import Header from '../component/Header';
import FixedBottomNavigation from '../component/BottomNav';
import Btn from "../component/Btn";
import '../styles/Btn.css';

function Play_information_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>예고 영상</div> 
        <div>포스터</div>
        <div>공연 정보</div>
        <div>공연 기간</div>
      </div>

      {/* Footer */}
      <FixedBottomNavigation />
    </div>
  );
}

export default Play_information_page;
