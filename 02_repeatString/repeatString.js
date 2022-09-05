const repeatString = function() {
    let str = ""
    let num = arguments[1]
    if(num < 0){
        return 'ERROR';
    }
    for(let i = 0; i < num; i++){
        str += arguments[0]
    }
    return str
};

// Do not edit below this line
module.exports = repeatString;
