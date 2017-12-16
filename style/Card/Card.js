import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const CardStyle = ({ children }) => (<Card>{children}</Card>);

CardStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CardStyle;
