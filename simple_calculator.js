let numberButtons = document.querySelectorAll(".calcNumberBtn");
let operatorButtons = document.querySelectorAll(".calcOpBtn");
let bracketButtons = document.querySelectorAll(".calcBracketBtn");

function getBtnValue(number) {
    let btnVal = number.innerText
    document.querySelector("#clearBtn").innerText = "CE"
    document.querySelector("#mainDisplay").insertAdjacentText("beforeend", btnVal)
}

function returnAnswer(){
    let display = document.querySelector("#mainDisplay").innerText
    
    let result = new Function ('return ' + display)();
    if (typeof(result) == NaN){
        document.querySelector("#mainDisplay").innerText = "ERROR"
    }
    else{document.querySelector("#mainDisplay").innerText = result}
    
    document.querySelector("#clearBtn").innerText = "AC"

}

function evaluate(equation){
    return new Function ("return " + equation);
}

function getBtnOp(operator) {
    let btnOp = operator.innerText
    document.querySelector("#clearBtn").innerText = "CE"
    if (btnOp.includes("×")){
        btnOp = "*"
    }
    else if (btnOp.includes("÷")){
        btnOp = "/"
    }

    doubleOps()
    document.querySelector("#mainDisplay").insertAdjacentText("beforeend", btnOp)
}

function doubleOps() {
    let display = document.querySelector("#mainDisplay").innerText
    let last = display.charAt(display.length-1)
    if (last === "+" || last === "*" || last === "/"){
        document.querySelector("#mainDisplay").innerText = display.slice(0, display.length-1)
    }
}

function getBracket(func){
    let funcVal = func.innerText;
    document.querySelector("#mainDisplay").insertAdjacentText("beforeend", funcVal)
}

function clearFunc() {
    let button = document.querySelector("#clearBtn").innerText
    let display = document.querySelector("#mainDisplay").innerText
    if (button == "AC"){
        document.querySelector("#mainDisplay").innerText = ""
    }

    else{

        document.querySelector("#mainDisplay").innerText = display.slice(0, display.length-1)
    }
}

function isOverflown(){
    let updatedDisplayLength = el.innerHTML.length

    const overflowVal = 13
    const shrinkMultiplier = 1
    const currentFontSize = 30

    if (updatedDisplayLength <= overflowVal){
        document.getElementById("mainDisplay").style.fontSize = "30px"
    }

    else{
        alert("Shrink Please")
        let newLength = ((overflowVal - updatedDisplayLength) * shrinkMultiplier);
        let newFontSize = currentFontSize + newLength
        document.getElementById("mainDisplay").style.fontSize = newFontSize + "px"
    }
}

let el = document.getElementById("mainDisplay");

numberButtons.forEach(number => number.addEventListener("click", function() {getBtnValue(number);}))
document.querySelector(".calcReturnBtn").addEventListener("click", function() {returnAnswer();})
operatorButtons.forEach(operator => operator.addEventListener("click", function() {getBtnOp(operator);}))
bracketButtons.forEach(func => func.addEventListener("click", function() {getBracket(func);} ))
document.querySelector("#clearBtn").addEventListener("click", function() {clearFunc()})
document.querySelector("#mainDisplay").addEventListener("DOMSubtreeModified", isOverflown);

// Figure out how to get the InnerText as as argument into the Display area.