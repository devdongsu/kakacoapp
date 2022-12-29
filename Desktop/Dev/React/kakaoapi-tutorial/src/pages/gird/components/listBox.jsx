import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

listBox.propTypes = {
  // propsName: PropTypes.string.isRequired,
};

const BoxArea = {
  width: '100%',
  height: '100%',
};

function listBox(props) {
  return (
    <div style={BoxArea}>
      <div className="containter"></div>
    </div>
  );
}

listBox.defaultProps = {
  // propsName: 'defaultValue',
};

export default listBox;
