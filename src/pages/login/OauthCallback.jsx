import React, { useEffect } from 'react';
import axios from 'axios';

function OauthCallback(props) {
  useEffect(() => {
    //현재 윈도우 창의 주소값 불러옴
    const href = window.location.href;
    //현재 url의 파라미터를 가져옴
    let params = new URL(window.location.href).searchParams;
    //params에 저장된 파라미터 안에서 'code'의 값을 가져옴
    let code = params.get('code');

    console.log('params', params);
    console.log('code', code);

    const GET_ACCESSTOKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/callback&code=${code}&client_secret=Ut6CIxQBYoVGOYM9jwwBcWtjnv4u7Inj`;
    console.log('GET_ACCESSTOKEN_URL', GET_ACCESSTOKEN_URL);
    axios
      .get(GET_ACCESSTOKEN_URL)
      .then((response) => {
        const { data } = response;
        console.log(data);
        localStorage.setItem('AccessToken', data.access_token);
        localStorage.setItem('IDToken', data.id_token);
        localStorage.setItem('RefreshToken', data.refresh_token);
      })
      .then(() => {
        window.location.href = `http://localhost:3000/mapsearch`;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>OauthCallback</div>;
}

export default OauthCallback;
