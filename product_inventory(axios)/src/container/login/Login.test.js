import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme'
configure({ adapter: new Adapter() });

it('Input Testing', () => {
    const wrapper = mount(<input type="email" id='email' name='email'></input>)
    const input = wrapper.find('input');
    expect(input.prop('type')).toEqual('email');
    expect(input.prop('name')).toEqual('email');
})

it('Input Testing', () => {
    const wrapper = mount(<input type="password" id='password'  name='password'></input>)
    const input = wrapper.find('input');
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('name')).toEqual('password');
})

