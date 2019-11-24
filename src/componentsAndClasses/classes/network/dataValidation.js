const hasData = (json) => {
    if(Object.keys(json).length > 0 && (typeof json) === "object") {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    hasData: hasData
}