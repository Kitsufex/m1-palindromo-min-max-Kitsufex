function isPalindrome(str){
    /* Seu código aqui */
    let new_str = "";

    for (let i = str.length; i > 0; i--) {
        new_str +=str.charAt(i - 1);
    }

    return new_str == str;
}

function arrayMaxMin(arr){
    /* Seu código aqui */
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] < min) {
          min = arr[i];
        } else if (arr[i] > max) {
          max = arr[i];
        }
    }

    return [min, max];
}
