import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getKeywordSearchList } from '../apis/kakaoAPI';

const initialState = {
  searchInfo: {
    searchKeyword: '',
    searchResultList: null,
    searchLat: '37.58713452365678',
    searchLng: '127.00226555855235',
  },
  loading: false,
};

export const getKeywordSearchListThunk = createAsyncThunk(
  'kakao/getAddSearchList',
  // (payload) => {
  //   console.log('getAddSearchListThunk');
  //   const response = getKeywordSearchList(payload);
  //   console.log(`MapSlice.getAddSearchListThunk`, response);
  //   return response;
  // }
  (payload) => getKeywordSearchList(payload)
);

const MapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      const { payload } = action;
      state.searchInfo.searchKeyword = payload;
      // console.log(state.searchInfo.searchKeyword);
    },
  },
  extraReducers: {
    [getKeywordSearchListThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getKeywordSearchListThunk.fulfilled]: (state, action) => {
      state.loading = false;
      const { payload } = action;
      state.searchInfo.searchResultList = payload.documents;
      state.searchInfo.searchLat = state.searchInfo.searchResultList[0].y;
      state.searchInfo.searchLng = state.searchInfo.searchResultList[0].x;
    },
    [getKeywordSearchListThunk.rejected]: (state, action) => {
      // console.log(
      //   'MapSlice/getKeywordSearchListThunk.rejected',
      //   action.payload
      // );
    },
  },
});

export const mapActions = MapSlice.actions;
export default MapSlice.reducer;
