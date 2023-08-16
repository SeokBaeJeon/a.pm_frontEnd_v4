import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

function Signup(props) {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
    }

    try {
      // 서버로 회원가입 정보를 전송하는 API 호출
      const response = await fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 데이터를 보내는 헤더 설정
        },
        body: JSON.stringify({
          username: username,
          password1: Password,
          password2: ConfirmPassword,
        }),
      });

      // 서버로부터 받은 응답을 JSON 형태로 파싱
      const data = await response.json();

      if (response.status === 200) {
        // 회원가입 성공 시 로그인 페이지로 이동
        navigate('/My_page');
      } else {
        // 회원가입 실패 시 에러 메시지를 출력
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={onSubmitHandler}>
      <div className="input-group">
      <input type="text" value={username} onChange={onUsernameHandler}  placeholder="아이디" />
      </div>

      <div className="input-group">
        <input type="password" value={Password} onChange={onPasswordHandler}      placeholder="비밀번호" />
      </div>

      <div className="input-group">
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="비밀번호 확인"/>
      </div>
        <br />
        <div className='button-group'>
          <Link to="/My_page" className="signup-link">로그인 {'>'}</Link>
          <button type='submit'>회원가입</button>
        </div>
      </form>
      <div className="bottom-space"></div> {/* 여백을 추가하는 요소 */}
    </div>
  )
}

export default Signup;
