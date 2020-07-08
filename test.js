function evaluate(equation){
    return new Function ("return " + equation);
}
let foo = "7+5"

let testEval = new Function(
    "return " + foo

);

console.log(testEval);