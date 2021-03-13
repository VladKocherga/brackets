module.exports = function check(str, bracketsConfig) {
    for (a = 0; a < bracketsConfig.length; a++) {
        brack = bracketsConfig[a].join("");
        if (str.includes(brack)) {
            str = str.replace(brack, "");
            a = -1;
        }
    }
    return !str;
};

