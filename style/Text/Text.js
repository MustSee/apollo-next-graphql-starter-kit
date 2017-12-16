import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => (
  <p className="text">
    {children}
    <style jsx>
      {`
        .text {
          font-size: 15px;
          color: black;
        }
      `}
    </style>
  </p>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Text;
