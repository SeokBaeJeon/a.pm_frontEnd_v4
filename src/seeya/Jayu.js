import "../seeya_css/Jayu.css";
import "../seeya_css/Center.css";
import { Container } from "@mui/system";
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import Like from '../img/LikeLevel.png';
import axios from 'axios';


function Jayu() {
    const [seats, setSeats] = useState([]); // 좌석 정보를 담을 상태
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedSeatId, setSelectedSeatId] = useState(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const getSeatColorClass = (rating) => {
        if (rating >= 5) {
          return 'green';
        } else if (rating >= 4) {
            return 'lightgreen'; 
        } else if (rating >= 3) {
          return 'yellow';
        } else if (rating >= 2) {
          return 'orange';
        } else if (rating >= 1) {
            return 'red';
        } else {
          return 'gray';
        }
      };

    useEffect(() => {
        // 서버로부터 좌석 정보를 가져오는 함수
        const fetchSeats = async () => {
          try {
            const response = await axios.get('https://apm-backend-a20e349efc23.herokuapp.com/seat/list/101');
            setSeats(response.data); // 서버에서 받아온 좌석 정보를 상태에 설정
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching seats:', error);
          }
        };
        fetchSeats(); // 함수 호출하여 좌석 정보를 가져옴
      }, []); // 빈 배열을 두 번째 매개변수로 넘겨 useEffect를 한 번만 호출하도록 설정

    const handleSeatClick = (seatId) => {
      setSelectedSeatId(seatId);
      setPopupOpen(true);
    };
  
    const handleRatingChange = (event) => {
      setRating(parseInt(event.target.value));
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmitReview = async () => {
        try {
          // 서버로 리뷰 정보 전송
          const config = {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            }
          };
          await 
    axios.post
    (`https://apm-backend-a20e349efc23.herokuapp.com/view/write/${selectedSeatId}`, {
            seatScore: rating,
            comment,
            
          },config);
     
          console.log('Review submitted:', selectedSeatId, 'Rating:', rating, 'Comment:', comment);
    
          setPopupOpen(false); // 팝업 닫기
        } catch (error) {
          console.error('Error submitting review:', error);
        }
      }; 
  
    return (
    <>     
            <div className="rating-info">
                <img src={Like} alt="nope" />
            </div>

            <Container>
            {/* 층 */}
            <div style={{overflow:"scroll"}}>
             <div className="seat_all seat-all" 
                style={{paddingTop:"120px"}}
                data-elem="pinchzoomer">

            
             
                <div id="1층">
                
                {/* 좌석표에 층을 표시  */}
                <div className="seating_table_container">
                    <div className="seattable_floor">1층</div>
                </div>

                {/* 각 층의 좌석 표시 */}
                <div className="floor_container">
                    {/* 구역 */}
                    <div id="jayu" className="A11">
                        {/* 진짜 좌석표에 표시되는 구역 이름 */}
                        {/* 열 */}
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    A
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    B
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    C
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    D
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    E
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    F
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    G
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    H
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    I
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    J
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    K
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    L
                                </p>
                            </div>
                            
                        </div>
                        {/* 열 끝 */}
                    </div>
                    {/* 팝업 */}
      {popupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setPopupOpen(false)}>&times;</span>
            <h2>좌석 리뷰 작성</h2>
            <p>별점을 매겨주세요:</p>
            <select onChange={handleRatingChange} value={rating}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p>댓글을 작성해주세요:</p>
            <textarea onChange={handleCommentChange} value={comment}/>
            <button onClick={handleSubmitReview}>리뷰 제출</button>
          </div>
        </div>
      )}
                    <div id="jayu" className="AA1">
                        {/* 진짜 좌석표에 표시되는 구역 이름 */}
                        {/* 열 */}
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            
                            {seats.map((seat) => (
                            seat.seatId === 7436 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                            ) : null
                            ))}

                          
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7437 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                            ) : null
                            ))}
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7438 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                            ) : null
                            ))}
                       
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7439 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                            ) : null
                            ))}
                           
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7440 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                            ) : null
                            ))}
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7441 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                            ) : null
                            ))}
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7442 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                     
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7443 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7444 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7445 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7446 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7447 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7448 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7449 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7451 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7452 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7453 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7454 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7455 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7456 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7457 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7458 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7459 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7460 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7461 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7462 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7463 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7464 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7465 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7466 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7467 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7468 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7469 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7470 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7471 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7472 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7473 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7474 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7475 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7476 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7477 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7478 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7479 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7480 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7481 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7482 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7483 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7484 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7485 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7486 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7487 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7488 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7489 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7490 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7491 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7492 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7493 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7494 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7495 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7496 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>1</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7497 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>2</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7498 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>3</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7499 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>4</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7500 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>5</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7501 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>6</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        {/* 열 끝 */}
                    </div>
                    <div id="jayu" className="AB1">
                        {/* 진짜 좌석표에 표시되는 구역 이름 */}
                        {/* 열 */}
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}

                   
                            {seats.map((seat) => (
                            seat.seatId === 7502 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7503 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7504 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7505 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7506 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7507 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7508 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7509 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7510 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7511 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7512 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7513 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7514 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7515 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7516 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7517 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7518 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7519 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7520 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7521 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7522 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7523 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7524 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7525 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7526 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7527 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7528 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7529 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7530 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7531 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7532 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7533 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7534 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7535 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7536 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7537 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7538 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7539 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7540 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7541 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7542 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7543 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7544 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7545 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7546 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7547 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7548 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7549 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7550 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7551 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7552 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7553 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7554 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7555 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7556 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7557 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7558 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7559 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7560 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7561 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7562 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7563 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7564 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7565 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7566 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7567 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7568 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7569 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7570 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7571 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7572 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7573 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7574 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7575 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7576 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7577 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7578 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7579 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7580 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7581 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7582 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7583 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7584 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>7</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7585 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>8</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7586 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>9</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7587 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>10</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7588 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>11</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7589 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>12</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7590 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>13</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7591 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        {/* 열 끝 */}
                    </div>
                    <div id="jayu" className="AC1">
                        {/* 진짜 좌석표에 표시되는 구역 이름 */}
                        {/* 열 */}
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7592 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7593 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7594 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7595 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7596 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7597 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7598 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7599 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7600 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7601 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7602 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7603 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7604 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7605 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7606 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7607 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7608 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7609 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7610 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7611 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7612 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7613 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7614 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7615 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7616 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7617 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>21</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7618 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7619 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7620 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7621 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7622 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7623 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7624 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7625 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7626 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7627 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7628 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7629 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7630 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7631 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7632 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7633 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7634 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7635 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7636 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7637 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7638 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7639 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7640 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7641 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7642 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7643 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7644 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7645 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7646 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7647 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7648 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7649 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7650 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7651 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7652 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7653 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7654 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7655 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7656 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>14</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7657 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7658 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7659 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7660 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7661 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7662 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7663 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>15</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7664 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>16</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7665 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>17</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7666 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>18</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7667 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>19</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            {seats.map((seat) => (
                            seat.seatId === 7668 ? (
                                <div
                                className="seats"
                                onClick={() => handleSeatClick(seat.seatId)}
                                key={seat.seatId}
                                >
                                {/* 일반 좌석 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.averageSeatScore, rating)}`}
                                pk={seat.seatId}>
                                    <p>20</p>
                                </div>
                                </div>
                                ) : null
                                ))} 
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            <div id="seat"></div>
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        {/* 열 끝 */}
                    </div>
                    <div id="jayu" className="C11">
                        {/* 진짜 좌석표에 표시되는 구역 이름 */}
                        {/* 열 */}
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    A
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    B
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    C
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    D
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    E
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    F
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    G
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    H
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    I
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    J
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    K
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div id="row_zone">
                                <p className="seat_num">
                                    L
                                </p>
                            </div>
                            
                        </div>
                        {/* 열 끝 */}
                    </div>
                    {/* 구역 끝 */}
                </div>
                
               
                </div>
                
                </div>
                
                </div>
              
                </Container>
                <br/>
                <br/>
            {/* 층 끝 */}
        
    </>
    );
}
export default Jayu;