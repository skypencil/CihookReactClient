import User from "./user";


describe("User class constructor and methods", () => {
    it("should create a user object with new key word", () => {
        const userObject = new User("someone@domain.com", "231kdi", "John", "Doe", "url/to/picture")

        expect(typeof userObject).toBe('object');
    })

    it("return true if the user object has an id", () => {
        const userObject = new User("someone@domain.com", "231kdi", "John", "Doe", "url/to/picture")

        expect(userObject.isLoggedIn()).toBe(true);
    })
});