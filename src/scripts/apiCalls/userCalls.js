const getUsers = async () => {
    const usersPromise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (response.status === 200){
                        resolve(response.json());
                    } else {
                        reject("There was an error fetching users.");
                    }
                })
    });

    const usersJson = await(usersPromise).catch(e => [{userError:"Couldn't fetch user list."}]);
    return usersJson;
}

module.exports = {getUsers};