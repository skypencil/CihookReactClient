import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from "enzyme";
import Profile from "./Profile";

configure({adapter: new Adapter()});

describe("Waiting Screen Logic Test", () => {
    it("should display a screen with ' is logged in' text", () => {
        const wrapper = shallow(<Profile/>);

        expect(wrapper.find('div').text()).toEqual(" is logged in");
    })
});