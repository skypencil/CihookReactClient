const getUsers = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.status === 200){
                    resolve(response.json());
                } else {
                    reject("There was an error fetching users.");
                }
            })
});

module.exports = {getUsers};