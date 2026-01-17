console.log(String.fromCharCode(65+1));
function caesarChipher(str, shift){
    let arr = str.split('');
    for(let i = 0; i < str.length; i++){
      
        let charCode = arr[i].charCodeAt();
        charCode += shift;
        arr[i] = String.fromCharCode(charCode);
        
    }
    return arr.join('');
}
console.log(caesarChipher("Hello", 3)); 