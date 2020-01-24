
const getUser = (url) => {
    return fetch(url).then(response => response.json());
}

const getSnapshot = (url) => {
    return fetch(url).then(response => response.json());
}


module.exports ={
    getUser, getSnapshot
}

