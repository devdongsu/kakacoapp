import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getKakaoAccessToken } from '../apis/kakaoLoginAPI';

const initialState = {
  loading: false,
};

export const getKakaoAccessTokenThunk = createAsyncThunk(
  'kakao/getAccessToken',
  (payload) => getKakaoAccessToken(payload)
);

const CommonSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getToken: (state, action) => {},
  },
  extraReducers: {
    [getKakaoAccessTokenThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getKakaoAccessTokenThunk.fulfilled]: (state, action) => {
      state.loading = false;
      const { payload } = action;
      localStorage.setItem('AccessToken', payload);
    },
    [getKakaoAccessTokenThunk.rejected]: (state, action) => {
      // console.log(
      //   'CommonSlice/getKeywordSearchListThunk.rejected',
      //   action.payload
      // );
    },
  },
});

export const CommonActions = CommonSlice.actions;
export default CommonSlice.reducer;
