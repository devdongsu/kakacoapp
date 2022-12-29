export const getConfigure = (type) => {
  const headers = {
    Authorization: `${process.env.REACT_APP_KAKAOAPI_KEY}`,
  };

  if (['POST', 'PATCH'].includes(type)) {
    headers['Content-type'] = 'application/json; charset=UTF-8';
  }

  return { headers };
};

export const logConfig = (type) => {
  const headers = {};

  if (['POST'].includes(type)) {
    headers['Authorization'] = `Bearer ${localStorage.getItem('AccessToken')}`;
  }
};
