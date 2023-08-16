
import '../../styles/Logo.css';
import SearchBar from "../../component/About_Search/SearchBar";
import PerformanceList from "../../component/About_Performance/Popular_play";
import './Main_page.css';
import Header from "../../component/About_Logo/Header";
import Top_PerformanceList from '../../component/About_Performance/TopPopular_play';
import ConcertHall_SearchBar from '../../component/About_Search/ConcertHall_SearchBar';

function Main_page() {
  return (
    <>
    <Header></Header>
    
    <div className="main_container">

      <ConcertHall_SearchBar/>

      <br/>
      <div className="Performance_container">
        <div className="Popular-Performance-title">
          TopTen Show</div>
        <br/>
        <Top_PerformanceList/>

        <br/>
        
        <div className="Total-performance-title">
          All Show</div>
        <br/>
          <PerformanceList/>
        </div>
      </div>
    </>

  );
}

export default Main_page;
