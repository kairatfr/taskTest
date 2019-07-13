var InputWord = prompt("word");
function alphabet(str){
    var StringSort = str.split("");
    var StringSort1 = StringSort.sort();
    return StringSort1.join("");
}
console.log(alphabet(InputWord));