import {getUser} from './networkCall';


describe("AuthAPI netowrk calls", () => {
    it("should get a url put it in a fetch method, chain it with .then() take a response and call .json() onit - and finally should return the entire thing", () => {
        const url = "/some/url/"
        expect(typeof getUser(url)).toBe('object')
    })
});