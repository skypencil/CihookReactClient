import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure, mount} from "enzyme";
import Waiting from "./Waiting"

configure({adapter: new Adapter()});

describe("Waiting Screen Logic Test", () => {
    it("should display a screen with ' waiting to load information ' text", () => {
        const wrapper = shallow(<Waiting/>);

        expect(wrapper.find('div').text()).toEqual(" waiting to load information ");
    })
});