import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const TableStyle = tableProps => (
  <Table
    {...{
      ...tableProps,
    }}
  />
);

TableStyle.propTypes = {
  tableProps: PropTypes.object,
};

export default TableStyle;
