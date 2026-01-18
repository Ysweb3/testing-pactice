console.log(((90-65+3+26)%26)+65);//B
function caesarChipher(str, shift){
    let arr = str.split('');
    for(let i = 0; i < str.length; i++){
        shift = shift % 26;
        if(arr[i].charCodeAt() >=65 && arr[i].charCodeAt() <= 90){//A-Z
            let code = arr[i].charCodeAt();
            let charCode = ((code-65+3+26)%26)+65;
            arr[i] = String.fromCharCode(charCode);    
        }
        else if (arr[i].charCodeAt() >=97 && arr[i].charCodeAt() <= 122) {
            let code = arr[i].charCodeAt();
            let charCode = ((code-97+3+26)%26)+97;
            arr[i] = String.fromCharCode(charCode);
        }
       
    }
    return arr.join('');
}
console.log(caesarChipher("xyz", 3)); 