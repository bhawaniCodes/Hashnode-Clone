// for check expiry
function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    
    if (!itemStr) {
        console.log("not available");
        return null;
    }
    const item = JSON.parse(itemStr);
    console.log('itemm:', item)
    const now = new Date();
    if (now.getTime() > item) {
        localStorage.removeItem(key);
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("draft");
        return null;
    }
    return item;
}
export { getWithExpiry };
