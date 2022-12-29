import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ItemComponent = styled.div`
   {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const boxArea = styled.div`
  &:hover {
    background-color: blue;
  }
`;

export default function ListItem(props) {
  const {
    place_name,
    phone = '',
    road_address_name = '',
    category_name,
  } = props.contents;

  const categoryAry = category_name.split('>');
  const lastCategory = categoryAry[categoryAry.length - 1].trim();

  return (
    <div className="blockOne" style={{ scrollY: 'auto' }}>
      <div
        className="boxArea"
        style={{
          // border: 'solid 1px blue',
          margin: '15px 10px',
          height: '90px',
          overflow: 'auto',
        }}
      >
        <div className="titleArea" style={{ display: 'flex' }}>
          <ItemComponent
            className="placeName"
            style={{
              margin: '5px 0px',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              paddingRight: '1.25rem',
            }}
          >
            {place_name}
          </ItemComponent>
          <ItemComponent
            className="category"
            style={{
              fontSize: '0.75rem',
              color: 'gray',
              margin: '5px 0px',
              display: 'flex',
              alignItems: 'end',
            }}
          >
            {lastCategory}
          </ItemComponent>
        </div>
        <ItemComponent
          className="addressName"
          style={{ fontSize: '0.75rem', color: 'gray', margin: '5px 0px' }}
        >
          {road_address_name}
        </ItemComponent>
        <ItemComponent
          className="pNumber"
          style={{ fontSize: '0.75rem', color: 'gray', margin: '5px 0px' }}
        >
          {phone}
        </ItemComponent>
      </div>
    </div>
  );
}
