import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/About_Logo/Header";
import TopNav from "../../component/About_Nav/TopNav";
import { Outlet } from "react-router-dom";
import axios from "axios";
import ConcertHall_SearchBar from "../../component/About_Search/ConcertHall_SearchBar";
const TheaterPage = () => {
  const { theaterId } = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [performances, setPerformances] = useState([]);
  
  useEffect(() => {
    const fetchTheaterInfo = async () => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/theater/${theaterId}`);
        const theaterData = response.data;
        setTheaterInfo(theaterData);
      } catch (error) {
        console.error("Error fetching theater info: ", error);
      }
    };

    const fetchPerformances = async () => {
      try {
        const response = await axios.get("https://apm-backend-a20e349efc23.herokuapp.com/pmshow/list");
        const pmShowData = response.data;
        setPerformances(pmShowData);
      } catch (error) {
        console.error("Error fetching performance data: ", error);
      }
    };

    fetchTheaterInfo();
    fetchPerformances();
  }, [theaterId]);

  // 특정 theaterId에 해당하는 pm_show 데이터 필터링
  const filteredPerformances = performances.filter(
    (performance) => performance.theater.theaterId === Number(theaterId)
  );

  return (
    <div>
      <Header />
      <ConcertHall_SearchBar />
      <TopNav theaterId={theaterId} />
      <div>
        {theaterInfo ? (
          <div>
            <h1 className="center"style={{fontFamily:"Century Gothic,sans-serif"}}>{theaterInfo.theaterName}</h1>
            <p className="center"style={{fontFamily:"Century Gothic,sans-serif"}}>{theaterInfo.theaterLocation}</p>
          </div>
        ) : (
          <p>극장 정보를 불러오는 중...</p>
        )}
      </div>
  
      <Outlet theaterId={theaterId} />
    </div>
  );
};

export default TheaterPage;
