import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/ScheduleCalendar.css'; // 스타일링 파일을 불러옵니다.

const ScheduleCalendar = ({ token }) => {
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const tokenFromLocalStorage = localStorage.getItem('token');

  useEffect(() => {
    const fetchLikedActorSchedules = async () => {
      try {
        const response = await axios.get('https://apm-backend-a20e349efc23.herokuapp.com/schedule/likeActorSchedules', {
          headers: {
            'Authorization': `Bearer ${tokenFromLocalStorage}`,
          },
        });
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching liked actor schedules:', error);
      }
    };

    fetchLikedActorSchedules();
  }, []);

  // 데이터가 있는 날짜를 추출하여 Set으로 저장합니다.
  const datesWithData = new Set(schedules.map(schedule => new Date(schedule.reDate).toDateString()));

  // 날짜가 데이터가 있는 경우, 특별한 스타일을 적용합니다.
  const tileClassName = ({ date }) => {
    if (datesWithData.has(date.toDateString())) {
      return 'data-present';
    }
    return '';
  };

  const formatDotDates = (dates) => {
    return dates.map(date => new Date(date).getDate());
  };

  const dateDots = formatDotDates([...datesWithData]);

  const renderDayContents = (date) => {
    if (dateDots.includes(date.getDate())) {
      return (
        <div className="day-content">
          <div className="dot"></div>
          {date.getDate()}
        </div>
      );
    } else {
      return date.getDate();
    }
  };

  const filteredSchedules = schedules.filter(schedule => {
    const scheduleDate = new Date(schedule.reDate);
    return scheduleDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div>
      <h2>관심 배우 일정</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName} // 특정 날짜에 클래스 적용
        formatShortWeekday={(locale, date) => date.toLocaleDateString('en-US', { weekday: 'short' })}
        formatDay={(locale, date) => renderDayContents(date)} // 날짜 아래에 컨텐츠 렌더링
      />
      <ul>
        {filteredSchedules.map(schedule => (
          <li key={schedule.scheduleId}>
            <div>
              <span>배우 : {schedule.actorName}</span><br />
              <span>공연 : {schedule.pmShowTitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleCalendar;
