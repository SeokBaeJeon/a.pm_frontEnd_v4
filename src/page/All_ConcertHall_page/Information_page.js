import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Information() {
  const {theaterId} = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);

  const [performances, setPerformances] = useState([]);
  const [notice1ImgSrc, setNotice1ImgSrc] = useState(null);

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
        setPerformances(pmShowData);
        
        console.log(pmShowData);
      } catch (error) {
        console.error("Error fetching performance data: ", error);
      }
    };

    fetchPerformances();
  }, []);

  useEffect(() => {
    const fetchNotice1 = async (pmshowId) => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/pmshow/${pmshowId}`);
        const pmshowDetailData = response.data;
        console.log(pmshowDetailData);
        if (pmshowDetailData.notice1) {
          setNotice1ImgSrc(pmshowDetailData.notice1);
        }
      } catch (error) {
        console.error("Error fetching notice1: ", error);
      }
    };

    if (performances.length > 0) {
      const firstPerformance = performances.find(
        (performance) => performance.theater.theaterId === Number(theaterId)
      );

      if (firstPerformance) {
        fetchNotice1(firstPerformance.pmShowId);
      }
    }
  }, [performances, theaterId]);

  return (
    <>
      <hr/>
      <h1 className="center" style={{fontFamily:"Century Gothic,sans-serif"}}>Theater Information</h1>
      <hr/>
      <div style={{ flex: 1 }}>
        {notice1ImgSrc && (
          <img src={notice1ImgSrc} style={{ width: "100%", height: "auto" }} />
        )}
      </div>
    </>
  );
}

export default Information;
