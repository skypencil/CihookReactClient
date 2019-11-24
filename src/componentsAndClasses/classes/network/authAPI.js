
class AuthAPI {

    constructor(url){
        this.url = url;
    }
    
    getUser() {
            return fetch(this.url).then(response => response.json());  
    }    
}

export default AuthAPI;

