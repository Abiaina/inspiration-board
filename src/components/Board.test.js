import React from 'react';
import Board from './Board';
//mount  will mount the component into the virtualDOM
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });
});
