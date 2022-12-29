import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getKakaoAccessTokenThunk } from '../../slices/CommonSlice';
import LoginBtn from '../../asset/img/kakao_login_medium_narrow.png';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/callback&response_type=code`;

function Login(props) {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <img src={LoginBtn} alt="kakaoLogin" onClick={handleLogin} />
    </div>
  );
}

export default Login;
