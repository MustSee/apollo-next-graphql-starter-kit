import React from 'react';
import withApp from '../lib/withApp';
import UserTable from '../components/UserTable/UserTable';
import { Layout, Title, Row } from '../style/index';

export const HomePage = () => (<Layout>
  <Row>
    <Title {...{ type: 'h1' }}>High performance web starter-kit</Title>
  </Row>
  <Row>
    <UserTable />
  </Row>
</Layout>);

export default withApp(HomePage);
