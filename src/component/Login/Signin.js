import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Signin.css';
import My_info_page from '../../page/My_page/My_info_page';
import { Token } from '@mui/icons-material';

function Signin(props) {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); // 로그인 상태 초기화
  const navigate = useNavigate();

  const onUsernameHandler = (event) => {
    setUsername(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false'); // 로그아웃 시 로그인 상태 제거
    setIsLoggedIn(false);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // 서버로 로그인 정보를 전송하는 API 호출
      const response = await fetch('https://apm-backend-a20e349efc23.herokuapp.com/user/login', {
        method: 'POST',  // 요청 메서드를 POST로 지정
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: Password,
        }),
      });

      console.log(response)
      // 서버의 응답 상태 코드 확인
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token; // 실제로 받은 토큰 값 추출

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        navigate('/Main_page');
        console.log(token);
      } else if (response.status === 401) {
        // 로그인 실패 시 서버 응답을 JSON 형태로 파싱하여 오류 메시지 가져오기
        const data = await response.json();
        console.log(response.status)

        if (data && data.error) {
          // 오류 메시지가 존재하는 경우, 메시지를 출력
          alert(data.error);
        } else {
          // 오류 메시지가 없는 경우, 기본 오류 메시지 출력
          alert('로그인 실패: 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
        }
      } else {
        // 기타 오류 상태 코드 처리
        alert('로그인 실패: 서버에서 응답을 받지 못했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  if (isLoggedIn) {
    return <My_info_page isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />;
  } else {
        return (
          <div className="login-container">
            <form className="login-form" onSubmit={onSubmitHandler}>
              <div className="input-group">
                <input type="text" value={username} onChange={onUsernameHandler}  placeholder="아이디" />
              </div>

              <div className="password-group">
                <input type="password" value={Password} onChange={onPasswordHandler}      placeholder="비밀번호" />
              </div>

              <div className="button-group">
                <Link to="/signup_page" className="signup-link">회원가입 {'>'}</Link>
                <button type="submit">로그인</button>
              </div>
            </form>
          </div>
        )
      }
    }
export default Signin;
