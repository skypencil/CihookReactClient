import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Authentication from './ScreenAuthentication';

configure({ adapter: new Adapter() });

describe('Authentication Screen Logic Tests', () => {
    it("should display a screen with 'Login With Facebook, Twitter, Gmail, Apple, or our Database' text", () => {
        const wrapper = shallow(<Authentication />);

        expect(wrapper.find('div').text()).toEqual(
            'Login With Facebook, Twitter, Gmail, Apple, or our Database'
        );
    });
});
