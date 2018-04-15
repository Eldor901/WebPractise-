//первый способ
function withOutLastFirst(string){
    var anotherString = '';
    for (var i = 0; i < string.length - 1 ; i++){
            anotherString += string[i];
        }
    return anotherString;
}

//второй способ
function withOutLastSecond(string){
    return string.substring(0, string.length - 1);
}

//первый способ
function lastSymbol(string){
    return string.charAt(string.length - 1);
}

//второй способ
function lastSybolSecond(string){
    return string.slice(-1);
}
//первый способ
function reverseString(string){
    return string.split('').reverse().join('');
}
//второй способ
function reverseStringSecond(string) {
    var anotherString = "";
    for (var i = string.length - 1 ; i >= 0; i--) {
        anotherString += string[i];
    }
    return anotherString;
}
//первый способ
function deleteSpace(string){
    var STATE_BEGIN =  "begin";
    var STATE_SPACE = "space";
    var STATE_WORD  = "Word";
    var state = STATE_BEGIN;
    var word = '';

    for (var i = 0 ; i < string.length; i++ ){
        if(string.charAt(i) != ' '){
            if (state == STATE_SPACE ){
                word += " ";
            }

            word += string.charAt(i);
            state = STATE_WORD;
        }
        else {
            if (state == STATE_WORD);{
                 state = STATE_SPACE;
             }
        }
    }
    return word;

}

function deleteSpaceSecond(string){
    word = '';
    space = '';
    openSpace = ' ';
    closeSpace = '';
    for (var i = 0 ; i < string.length; i++ ){
        if(string.charAt(i) != ' '){
            if (space == openSpace){
                word += " ";
                space = closeSpace;
            }

            word += string.charAt(i) ;
        }
        else {
            space = openSpace;
        }
    }
    return  word;
}

function inputText(){
    alert(deleteSpaceSecond(prompt('write me something')));
}
