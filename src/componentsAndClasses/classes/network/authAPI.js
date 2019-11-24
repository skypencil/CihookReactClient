
class AuthAPI {

    constructor(url){
        this.url = url;
    }
    
    getUser() {
            return fetch(this.url);  
    }    
}

export default AuthAPI;

