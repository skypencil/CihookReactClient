import {hasData} from "./dataValidation";


describe("Data Validations", () => {
    let json = {
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        }
    }

    let someString = "someString"

    let emptyObject = {}

    it("Should return false if the object passed to it is empty", () => {
        expect(hasData(emptyObject)).toBe(false);
    })


    it("Should return false if the object passed to it is not json", () => {
        expect(hasData(someString)).toBe(false);
    })

    it("Should return true if the json passed to it has data", () => {
        expect(hasData(json)).toBe(true);
    })
    
})