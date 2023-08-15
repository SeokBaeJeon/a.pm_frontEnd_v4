import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const ActorDetail = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);
  const [like, setLike] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [actorList, setActorList] = useState([]);
  const tokenFromLocalStorage = localStorage.getItem('token');

  useEffect(() => {
    const fetchActorDetail = async () => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/actor/${actorId}`);
        setActor(response.data);
      } catch (error) {
        console.error('배우 상세 정보 불러오기 에러:', error);
      }
    };

    const fetchActorSchedule = async () => {
      try {
        const response = await axios.get(`https://apm-backend-a20e349efc23.herokuapp.com/schedule/actor/${actorId}`);
        setSchedule(response.data);
      } catch (error) {
        console.error('배우 스케줄 불러오기 에러:', error);
      }
    };

    fetchActorDetail();
    fetchActorSchedule();

    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, [actorId]);

  const handleLikeClick = async (actorId) => {
    try {
      if (!tokenFromLocalStorage) {
        // 토큰이 없는 경우 로그인 페이지로 이동하거나, 알림 메시지를 표시할 수 있습니다.
        alert('로그인이 필요합니다.');
        return;
      }
  
      const config = {
        headers: {
          'Authorization': `Bearer ${tokenFromLocalStorage}`,
          'Content-Type': 'application/json'
        }
      };
  
      // 서버에 좋아요 업데이트 요청 보내기
      const response = await axios.post(`/user/likeActor/${actorId}`, null, config);
      // 서버 응답 확인
      if (response.status === 200) {
        // 서버 응답이 성공한 경우, 해당 배우의 isLiked 값을 업데이트
        setActorList(prevActorList => {
          return prevActorList.map(actor => {
            if (actor.actorId === actorId) {
              return { ...actor, isLiked: !actor.isLiked }; // 상태 반전
            }
            return actor;
          });
        });
      }
    } catch (error) {
      console.error('Error liking actor:', error);
    }
  };

  const handleCancelLikeClick = async () => {
    try {
      if (!tokenFromLocalStorage) {
        // 토큰이 없는 경우 로그인 페이지로 이동하거나, 알림 메시지를 표시할 수 있습니다.
        alert('로그인이 필요합니다.');
        return;
      }
  
      const config = {
        headers: {
          'Authorization': `Bearer ${tokenFromLocalStorage}`,
          'Content-Type': 'application/json'
        }
      };

    
      const response = await axios.delete(`/user/likeActor/${actorId}`, null, config);
      if (response.status === 200) {
        setActorList(prevActorList => {
          return prevActorList.map(actor => {
            if (actor.actorId === actorId) {
              return { ...actor, isLiked: !actor.isLiked }; // 상태 반전
            }
            return actor;
          });
        });
      }
    } catch (error) {
      console.error('Error cancelling like:', error);
    }
  };

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div style={containerStyle}>
      <img
        src={actor.image}
        alt={actor.actorName}
        style={{
          float: 'left',
          marginRight: '20px',
          marginBottom: '20px',
          width: '150px',
          height: 'auto',
        }}
      />
      <div style={infoStyle}>
        <h2>
          {actor.actorName}
          <span style={heart}>
            {like ? (
              <AiFillHeart onClick={handleCancelLikeClick} style={heartStyle} />
            ) : (
              <AiOutlineHeart onClick={handleLikeClick} style={heartStyle} />
            )}
          </span>
        </h2>
        <p>
          <strong>직업:</strong> {actor.actorJob}
        </p>
        <p style={recentPlayStyle}>
          <strong>최근 출연 작품1:</strong> {actor.actorRecentPlay1}
        </p>
        <p style={recentPlayStyle}>
          <strong>최근 출연 작품2:</strong> {actor.actorRecentPlay2}
        </p>
        <p style={recentPlayStyle}>
          <strong>최근 출연 작품3:</strong> {actor.actorRecentPlay3}
        </p>
      </div>
    </div>
    <div style={scheduleContainerStyle}> {/* 수정된 부분 */}
    <h3>배우 스케줄</h3>
    <ul>
      {schedule.map((item, index) => (
        <li key={index} style={scheduleItemStyle}>
          <p style={scheduleTitleStyle}>공연: {item.pmShowTitle}</p>
          <p>요일: {item.dayOfWeek}</p>
          <p>날짜: {item.reDate}</p>
        </li>
      ))}
    </ul>
  </div>
  </>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
};

const infoStyle = {
  marginLeft: '20px',
};

const scheduleContainerStyle = {
  marginTop: '20px',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};

const scheduleItemStyle = {
  marginBottom: '10px',
};

const scheduleTitleStyle = {
  fontWeight: 'bold',
};

const heart = {
  marginLeft: '140px',
};

const recentPlayStyle = {
  marginTop: '5px',
};

const heartStyle = {
  color: 'red',
  fontSize: '24px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default ActorDetail;
