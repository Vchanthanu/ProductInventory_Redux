import React from 'react';
import Search from './Search'
import { mount } from 'enzyme';
import { render } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {configure} from 'enzyme'
configure({ adapter: new Adapter() });

it('Rendering Search component',
    () => {
        render(<Search></Search>)
    })

test('matches Search Snapshot', () => {
    const snap = renderer.create(<Search></Search>).toJSON()
    expect(snap).toMatchSnapshot();
})

it('Input Testing',()=>{
    const wrapper = mount(<input type='text' name='productName'></input>)
    const input = wrapper.find('input');
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('productName');
})



