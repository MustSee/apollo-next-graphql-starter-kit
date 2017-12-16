import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const RowStyle = ({ children }) => (<Row> {children}</Row>);

RowStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default RowStyle;
