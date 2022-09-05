const sumAll = function(...args) {
    let min = 0;
    let max = 0;
    let sum = 0;
    if(!Number.isInteger(args[0]) || !Number.isInteger(args[1])){
        return 'ERROR';
    };
    if(args[0] < 0 || args[1] < 0 ){
        return 'ERROR';
    };

    if(args[0] > args[1]){
        max = args[0];
        min = args[1];
    }else{
        max = args[1];
        min = args[0];
    }
    for(let i = min; i <=max; i++){
        sum+=i;
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
