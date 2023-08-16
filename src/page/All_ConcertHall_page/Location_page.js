import React, { useState, useEffect } from "react";
import Map from "../../component/Body/Map";
import axios from "axios";
import { useParams } from "react-router-dom";

function Location() {
  const { theaterId } = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [theaterLocation, setTheaterLocation] = useState(null);

  useEffect(() => {
    const fetchTheaterLocation = async () => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/theater/${theaterId}`);
        const theaterData = response.data;
        setTheaterInfo("theaterData : "+theaterData);

        // 주소 정보와 검색 중심 좌표를 변수로 준비
        const address = theaterData.theaterLocation;
       

        console.log("address : "+address);
        

        // Geocoding API를 사용하여 주소를 위도와 경도로 변환
        const geocodingResponse = await axios.get(
          "/map-geocode/v2/geocode",
          
          {
            params: {
              query: address,
             
            },
            headers: {
              
              "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_API_KEY_ID,
              "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_API_KEY,
            },
          }
        );


        const locationData = geocodingResponse.data;
        console.log(locationData);

        if (
          locationData &&
          locationData.addresses &&
          locationData.addresses.length > 0
        ) {
          const { x: longitude, y: latitude } = locationData.addresses[0];
          setTheaterLocation({ latitude, longitude });
        }
      } catch (error) {
        console.error("Error fetching theater location: ", error);
      }
    };

    if (theaterId) {
      fetchTheaterLocation(theaterId);
    }
  }, [theaterId]);

  return (
    <>
      <hr/>
      <h1 className="center" style={{fontFamily:"Century Gothic,sans-serif"}}>Location Information</h1>
      <hr/>
      {theaterLocation ? <Map location={theaterLocation} /> : <p>Loading...</p>}
    </>
  );
}

export default Location;
