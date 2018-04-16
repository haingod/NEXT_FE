import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../Login';
import { loginStatus } from '../login.constant';

describe('Login', () => {
  it('should render in progress message', () => {
    const wrapper = shallow(<Login status={loginStatus.inProgress} login={() => { }} />);
    const message = <span>Validating account...</span>;

    expect(wrapper.contains(message)).toEqual(true);
  });
});
