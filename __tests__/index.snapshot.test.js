import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { HomePage } from '../pages/index';

const { test, expect } = global;

test('Homepage component shallow renderes its content correctly', () => {
  const snapshotComponent = shallow(
    <HomePage />,
    );
  expect(toJson(snapshotComponent)).toMatchSnapshot();
});
