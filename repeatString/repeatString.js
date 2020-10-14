const repeatString = function(str,times) {
    let results = '';
    while(times > 0) {
        results +=str;
        times--;
    } return results;

} 

module.exports = repeatString
