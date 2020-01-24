class User {
    constructor(email, id, first_name, last_name, avatar){
        this.email = email;
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;

    }

    isLoggedIn = () => {
        const result = this.id !== undefined;
        return result;
    }
}

export default User;
