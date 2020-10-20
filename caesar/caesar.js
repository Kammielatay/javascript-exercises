const caesar = function(str, n) {
    //let code = [];

    for (let i = 0; i < str.length; i++){
        let newStr = str.split('');
        let charCode = newStr[i].charCodeAt(newStr[i]) + n;

        console.log(charCode)
        
    
   }




    //return newStr
}



//module.exports = caesar

