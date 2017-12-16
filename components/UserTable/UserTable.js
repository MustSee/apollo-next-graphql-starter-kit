import React from 'react';
import PropTypes from 'prop-types';

import { getUsersQuery } from '../../graphql/user';
import { Table, Row, Title } from '../../style';

const UserTable = ({ data: { users } }) => (
  <div>
    <Row>
      <Title {...{ type: 'h2' }}>Users</Title>
    </Row>
    <Table
      {...{
        columns: [
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: id => <span>{id}</span>,
          },
          {
            title: 'Jméno',
            dataIndex: 'firstName',
            key: 'firstName',
            render: firstName => <span>{firstName}</span>,
          },
          {
            title: 'Příjmení',
            dataIndex: 'lastName',
            key: 'lastName',
            render: lastName => <span>{lastName}</span>,
          },
          {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
            render: email => <span>{email}</span>,
          },
        ],
        dataSource: users,
        rowKey: node => node.id,
        pagination: false,
        scroll: {
          x: '100%',
          y: '100%',
        },
      }}
    />
  </div>
);

UserTable.propTypes = {
  data: PropTypes.object,
};

export default getUsersQuery(UserTable);
