import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PickUp.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const handleResultItemMouseEnter = (theaterId) => {
    const resultItem = document.getElementById(`theater-${theaterId}`);
    if (resultItem) {
      resultItem.style.backgroundColor = "#f0f0f0"; // 변경할 배경 색상 설정
    }
  };

  const handleResultItemMouseLeave = (theaterId) => {
    const resultItem = document.getElementById(`theater-${theaterId}`);
    if (resultItem) {
      resultItem.style.backgroundColor = "transparent"; // 원래 배경 색상으로 복원
    }
  };
  
  const [theaterList, setTheaterList] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState("");
  const initialList = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get("https://apm-backend-a20e349efc23.herokuapp.com/theater/list/seoul");
        const theaterData = response.data; 
        setTheaterList(theaterData);
        console.log(theaterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInitialClick = (initial) => {
    if (initial === selectedInitial) {
      setSelectedInitial("");
    } else {
      setSelectedInitial(initial);
    }
  };

  // 자음 구분자별로 극장 이름을 필터링하는 함수
  const filterTheatersByInitial = (initial) => {
    
    return theaterList.filter((theater) => {
      const firstChar = theater.theaterName.trim().charAt(0);
      const consonant = getFirstConsonant(firstChar);
      return consonant === initial;
    });
  };

  const getFirstConsonant = (char) => {
    const consonants = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    const charCode = char.charCodeAt(0);
    if (charCode >= 44032 && charCode <= 55203) {
      // 한글 범위에 해당하는 글자일 때만 처리합니다.
      const index = Math.floor((charCode - 44032) / 588);
      return consonants[index];
    }
    return null; // 한글 자음이 아닌 경우 null을 반환합니다.
  };

  return (
    <div className="All_container">
      <div className="Sortation_container">
        <div className="Sortation_item_container">
          {initialList.map((initial) => (
            <div
              className={`Sortation_item ${selectedInitial === initial ? "active" : ""}`}
              key={initial}
              onClick={() => handleInitialClick(initial)}
            >
              {initial}
            </div>
          ))}
        </div>

        <div className="Result_item_container">
          {selectedInitial
            ? filterTheatersByInitial(selectedInitial).map((theater) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/theater/${encodeURIComponent(theater.theaterId)}`}
                  key={theater.theaterId}
                  onMouseEnter={() => handleResultItemMouseEnter(theater.theaterId)} // 마우스 진입 시 이벤트 핸들러 추가
                  onMouseLeave={handleResultItemMouseLeave} // 마우스 이탈 시 이벤트 핸들러 추가
                >
                  <div className="Result_item">{theater.theaterName}</div>
                </Link>
              ))
            : theaterList.map((theater) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/theater/${encodeURIComponent(theater.theaterId)}`}
                  key={theater.theaterId}
                  onMouseEnter={() => handleResultItemMouseEnter(theater.theaterId)} // 마우스 진입 시 이벤트 핸들러 추가
                  onMouseLeave={handleResultItemMouseLeave} // 마우스 이탈 시 이벤트 핸들러 추가
                > 
                  <div className="Result_item">{theater.theaterName}</div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
