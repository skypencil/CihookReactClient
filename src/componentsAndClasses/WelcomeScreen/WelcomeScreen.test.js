import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure, mount} from "enzyme";
import WelcomeScreen from "./WelcomeScreen";

configure({adapter: new Adapter()});

describe("Display Screen Logic from render method", ()=>{
    it("First Screen is : waiting message", () => {
        const wrapper = shallow(<WelcomeScreen/>).dive()

        expect(wrapper.find('div').text()).toEqual(" waiting to load information ")
    });

    it("should show Authentication screen if state.userLoggedIn is false", () => {
        const wrapper = shallow(<WelcomeScreen/>)
        wrapper.setState({userLoggedIn: false})
        expect(wrapper.dive().find('div').text()).toEqual("Login With Facebook, Twitter, Gmail, Apple, or our Database")
    });

    it("should show Profile screen if state.userLoggedIn is true", () => {
        const wrapper = shallow(<WelcomeScreen/>)
        wrapper.setState({userLoggedIn: true})
        expect(wrapper.dive().find('div').text()).toEqual(" is logged in")
    });


    it("should put the recieved data into this.state.userObject", () =>{
        const mockJSON = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            }
        }
        const wrapper = shallow(<WelcomeScreen/>);
        wrapper.instance().hasDataHandler(mockJSON);

        const userObject = wrapper.state("userObject");
        expect(Object.keys(userObject).length).toBeGreaterThan(0)
    });

    it("should change this.state.userLoggedIn to true if data is available", () =>{
        const mockJSON = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            }
        }
        const wrapper = shallow(<WelcomeScreen/>);
        wrapper.instance().hasDataHandler(mockJSON);

        const userLoggedIn = wrapper.state("userLoggedIn");
        expect(userLoggedIn).toBe(true)
    });

    it("should only make 1 call to the user api", () =>{
        const mockJSON = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            }
        }
        const wrapper = shallow(<WelcomeScreen/>);
        wrapper.instance().hasDataHandler(mockJSON);

        const callsMade = wrapper.state("callsMade");
        expect(callsMade).toBeLessThan(2)
    });

    it("should flip this.state.userLoggedIn to false", () =>{
        const wrapper = shallow(<WelcomeScreen/>);
        wrapper.instance().noDataHandler();

        const userLoggedIn = wrapper.state("userLoggedIn");
        expect(userLoggedIn).toBe(false);
    });


});

