export const hasData = (data) => {
    if(Object.keys(data).length > 0) {
        return true;
    } else {
        return false;
    }
}