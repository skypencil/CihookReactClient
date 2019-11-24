
const getUser = (url) => {
    return fetch(url).then(response => response.json());
}


module.exports ={
    getUser: getUser
}

