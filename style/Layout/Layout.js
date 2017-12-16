import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const LayoutStyle = ({ children }) => (
  <div>
    <Layout className="layout">{children}</Layout>
    <style jsx>
      {`
        div :global(.layout) {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

LayoutStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LayoutStyle;
