import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../styles/Center.css";

function NowPerformance() {
  const { theaterId } = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [filteredPerformances, setFilteredPerformances] = useState([]);

  useEffect(() => {
    const fetchTheaterInfo = async () => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/theater/${theaterId}`);
        const theaterData = response.data;
        setTheaterInfo(theaterData);
        console.log(theaterData);
      } catch (error) {
        console.error("Error fetching theater info: ", error);
      }
    };

    const fetchPerformances = async () => {
      try {
        const response = await axios.get("https://apm-backend-a20e349efc23.herokuapp.com/pmshow/list");
        const pmShowData = response.data;
       
        const filtered = pmShowData.filter(
          (performance) => performance.theater.theaterId === Number(theaterId)
        );
        
        setFilteredPerformances(filtered);
      } catch (error) {
        console.error("Error fetching performance data: ", error);
      }
    };

    fetchTheaterInfo();
    fetchPerformances();
  }, [theaterId]);

  return (
    <>
      <hr/>
      <h1 className="center" style={{fontFamily:"Century Gothic,sans-serif"}}>An OnGoing Performance</h1>
      <hr/>
      <h3>{filteredPerformances.map((performance) => (
          <div>{performance.title}
          </div>
        ))}</h3>
      {/* 연결된 공연 정보 표시 */}
      <div>
        {filteredPerformances.map((performance) => (
          <div key={performance.pmShowId}>
            <img src={performance.poster} alt={performance.title} />
            {/* 추가적인 공연 정보 표시 */}
            <h4>{performance.synopsis}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default NowPerformance;
