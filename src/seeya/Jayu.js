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
        if (rating >= 4) {
          return 'green';
        } else if (rating >= 3) {
          return 'yellow';
        } else if (rating >= 2) {
          return 'orange';
        } else {
          return 'red';
        }
      };

    useEffect(() => {
        // 서버로부터 좌석 정보를 가져오는 함수
        const fetchSeats = async () => {
          try {
            const response = await axios.get('https://localhost:8080/seat/list/101');
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
      await axios.post('https://localhost:8080/view/write/{seatId}', {
        seatId: selectedSeatId,
        rating,
        comment,
      });

      console.log('Review submitted:', selectedSeatId, 'Rating:', rating, 'Comment:', comment);

      setPopupOpen(false); // 팝업 닫기
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  
    return (
    <>
        <h1 className="center">대학로 자유극장</h1>
       
           
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
                            <div
                                className={`seats ${getSeatColorClass(seat.rating)}`}
                                onClick={() => handleSeatClick(seat.id)}
                                key={seat.id}
                            >
                                {/* 좌석 번호 표시 */}
                                <div id="seat" className={`real ${getSeatColorClass(seat.rating)}`} pk={seat.id}>
                                <p>{seat.seatNumber}</p>
                                </div>
                            </div>
                            ))}

                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17027">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17028">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17032">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17033">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17034">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17036">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17037">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17038">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17039">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17040">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17041">
                                    <p>6</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17042">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17043">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17044">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17045">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17046">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17047">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17049">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17050">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17051">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17052">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17053">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17054">
                                    <p>6</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17055">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17056">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17057">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17058">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17059">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17060">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17062">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17063">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17064">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17065">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17066">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17067">
                                    <p>6</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17068">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17069">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17070">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17071">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17072">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17073">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17075">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17076">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17077">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17078">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17079">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17080">
                                    <p>6</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17081">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17082">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17083">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17084">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17085">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17086">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17088">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17089">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17090">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17091">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17092">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17093">
                                    <p>6</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17094">
                                    <p>1</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17095">
                                    <p>2</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17096">
                                    <p>3</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17097">
                                    <p>4</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17098">
                                    <p>5</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17099">
                                    <p>6</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17101">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17102">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17103">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17104">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17105">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17106">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17107">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17108">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17109">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17110">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17111">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17112">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17113">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17114">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17115">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17116">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17117">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17118">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17119">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17120">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17121">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17122">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17123">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17124">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17125">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17126">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17127">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17128">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17129">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17130">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17131">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17132">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17133">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17134">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17135">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17136">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17137">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17138">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17139">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17140">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17141">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17142">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17143">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17144">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17145">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17146">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17147">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17148">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17149">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17150">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17151">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17152">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17153">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17154">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17155">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17156">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17157">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17158">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17159">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17160">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17161">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17162">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17163">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17164">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17165">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17166">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17167">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17168">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17169">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17170">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17171">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17172">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17173">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17174">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17175">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17176">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17177">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17178">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17179">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17180">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17181">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17182">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17183">
                                    <p>7</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17184">
                                    <p>8</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17185">
                                    <p>9</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17186">
                                    <p>10</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17187">
                                    <p>11</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17188">
                                    <p>12</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17189">
                                    <p>13</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17190">
                                    <p>14</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17191">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17192">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17193">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17194">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17195">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17196">
                                    <p>19</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17199">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17200">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17201">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17202">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17203">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17204">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17206">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17207">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17208">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17209">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17210">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17211">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17212">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17214">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17215">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17216">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17217">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17218">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17219">
                                    <p>20</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17220">
                                    <p>21</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석 끝 */}
                        </div>
                        <div className="row">
                            {/* 좌석 */}
                            {/*seeyatheater*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17221">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17222">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17223">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17224">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17225">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17226">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17227">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17229">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17230">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17231">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17232">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17233">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17234">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17236">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17237">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17238">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17239">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17240">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17241">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17242">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17244">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17245">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17246">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17247">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17248">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17249">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17251">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17252">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17253">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17254">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17255">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17256">
                                    <p>19</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17259">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17260">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17261">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17262">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17263">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17264">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17266">
                                    <p>14</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17267">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17268">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17269">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17270">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17271">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17272">
                                    <p>20</p>
                                </div>
                            </div>
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
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17274">
                                    <p>15</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17275">
                                    <p>16</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17276">
                                    <p>17</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17277">
                                    <p>18</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17278">
                                    <p>19</p>
                                </div>
                            </div>
                            {/* 실제 좌석 끝 */}
                            {/* 가상 좌석 */}
                            {/* 가상 좌석  끝*/}
                            {/* 좌석표에 열 표시해주는 코드 */}
                            <div className="seats">
                                {/* 일반 좌석 */}
                                <div id="seat" className="real no_review" pk="17279">
                                    <p>20</p>
                                </div>
                            </div>
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
            {/* 층 끝 */}
        
    </>
    );
}
export default Jayu;