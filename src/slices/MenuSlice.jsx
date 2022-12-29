import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuIdx: 1,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuIdx: (state, action) => {
      const { payload } = action;
      if (payload === 4) {
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('IDToken');
        localStorage.removeItem('RefreshToken');
      } else {
        state.menuIdx = payload;
      }
      //   {
      //     ...state,
      //     menuIdx: payload
      //   }
      //   payload;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
