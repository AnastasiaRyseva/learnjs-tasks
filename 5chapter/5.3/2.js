const checkSpam = (str) => {
    return str.toUpperCase().includes('viagra'.toUpperCase()) ? true :
            str.toUpperCase().includes('XXX'.toUpperCase()) ? true : false;
}