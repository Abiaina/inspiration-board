import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount()
  });

});
