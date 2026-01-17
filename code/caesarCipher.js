console.log(String.fromCharCode(65+1));//B
function caesarChipher(str, shift){
    let arr = str.split('');
    for(let i = 0; i < str.length; i++){
        if(arr[i].charCodeAt() >=65 && arr[i].charCodeAt() <= 90|| arr[i].charCodeAt() >=97 && arr[i].charCodeAt() <= 122){//A-Z,a-z
            console.log(arr[i].charCodeAt());   
            let charCode = arr[i].charCodeAt();
            charCode += shift;
            arr[i] = String.fromCharCode(charCode);
        }
        
    }
    return arr.join('');
}
console.log(caesarChipher("Hello, World!", 3)); 