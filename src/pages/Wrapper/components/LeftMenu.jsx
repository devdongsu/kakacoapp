import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { menuActions } from '../../../slices/MenuSlice';
import { Link } from 'react-router-dom';

const menuList = [
  {
    menuIdx: 1,
    menuName: '지도검색',
    menuIcon: '',
    menuLink: '/mapSearch',
  },
  {
    menuIdx: 2,
    menuName: '경로탐색',
    menuIcon: '',
    menuLink: '/searchLoad',
  },
  {
    menuIdx: 3,
    menuName: '2048게임',
    menuIcon: '',
    menuLink: '/game2048',
  },
  {
    menuIdx: 4,
    menuName: localStorage.getItem('AccessToken') ? '로그아웃' : '로그인',
    menuIcon: '',
    menuLink: '/',
  },
  {
    menuIdx: 5,
    menuName: 'CSS Grid',
    menuIcon: '',
    menuLink: '/grid',
  },
];

export default function LeftMenu() {
  const currentMenu = useSelector((state) => state.menuSlice);
  const dispatch = useDispatch();
  const movePage = (menuIdx) => {
    dispatch(menuActions.setMenuIdx(menuIdx));
  };

  return (
    <div
      className="leftMenu"
      style={{
        borderRight: '1px solid black',
        width: '15%',
        height: '100%',
        minHeight: 'calc(100vh - 12rem)',
      }}
    >
      <Divider />
      <List>
        {menuList.map((list) => (
          <Link
            to={list.menuLink}
            style={{ textDecoration: 'none' }}
            key={list.menuIdx}
          >
            <ListItem
              selected={currentMenu.menuIdx === list.menuIdx ? true : false}
              disablePadding
            >
              <ListItemButton onClick={() => movePage(list.menuIdx)}>
                <ListItemText primary={list.menuName} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {currentMenu.menuIdx}
    </div>
  );
}
