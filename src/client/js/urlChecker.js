function checkForURL(inputURL) {
    let res = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    
    return (res == null ? false  : true);
 }


 export { checkForURL }

