import React from 'react';
import PropTypes from 'prop-types';

const TitleStyle = ({ children, type }) => {
  switch (type) {
    case 'h2':
      return (<h2 className="h2">
        {children}
        <style jsx>
          {`
            .h2 {
              font-size: 15px;
              margin: 10px;
            }
          `}
        </style>
      </h2>);
    default:
      return (<h1 className="h1">
        {children}
        <style jsx>
          {`
            .h1 {
              font-size: 20px;
              margin: 15px;
            }
          `}
        </style>
      </h1>);
  }
};

TitleStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.string,
};

export default TitleStyle;
