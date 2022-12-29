import React, { useEffect, useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {
  mapActions,
  getKeywordSearchListThunk,
} from '../../../slices/MapSlice';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem';
import styled from 'styled-components';
import { Divider } from '@mui/material';

const ScrollDiv = styled.div`
  overflow-y: auto;
  background-color: ${(props) => props.color};
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 20rem;
    border-radius: 2px;
    background: #ccc;
  }
`;

export default function SearchBox() {
  const { searchKeyword, searchResultList } = useSelector(
    (state) => state.mapSlice.searchInfo
  );
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setKeyword(value);
  };

  const onClickHandler = () => {
    if (keyword) {
      dispatch(mapActions.setSearchKeyword(keyword));
      dispatch(getKeywordSearchListThunk(keyword));
    }
  };

  const keyupEvent = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid black',
      }}
    >
      <div
        className="searchArea"
        style={{
          backgroundColor: '#3396ff',
          height: '10rem',
          paddingTop: '20px',
        }}
      >
        <Paper
          component="div"
          onSubmit={null}
          sx={{
            p: '2px 4px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '19.5vw',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색하기"
            name="searchKeyword"
            value={keyword}
            onChange={onChangeHandler}
            onKeyUp={keyupEvent}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={onClickHandler}
          >
            <SearchIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />*/}
        </Paper>
      </div>
      <ScrollDiv
        className="searchList"
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          height: 'calc(100vh - 12rem - 10rem - 20px)',
          overflow: 'auto',
        }}
      >
        {searchResultList &&
          searchResultList.map((list, i) => (
            <div key={i}>
              <ListItem contents={list} />
              <Divider sx={{ height: 0, m: 0.5 }} orientation="horizontal" />
            </div>
          ))}
      </ScrollDiv>
    </div>
  );
}
