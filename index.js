


for (var key in localStorage){
 //   arrayfinisher(key, strToArr(localStorage[key]));
 strToArr(localStorage[key])
}

function strToArr(s) {
//str is a string that gets turned into an Array
    if (typeof s === 'string') {
    str = s.split("[").join("");
    str = str.split("]").join("");
    str = str.split("\"").join("");
    str = str.split(",");
    console.log(str);

    }

}

/*
function arrayfinisher(key, value) {
//value is an Array containing arrays of size 3 as elements
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++){
            console.log(key + value[i])

        }

    }


}
*/