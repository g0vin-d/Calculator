let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

function operate(a, b, opt) {
    let result = 0;
    switch (opt) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b);
            break;
        case "*":
            result = mul(a, b);
            break;
        case "/":
            result = div(a, b);
            break;
    }
    return result;
}

let buttons = document.querySelectorAll('button');
const dis1 = document.querySelector(".dis1");
const dis2 = document.querySelector(".dis2");
let var1 = 0;
let var2 = 0;
let lastOp = '';
let opt = '';
let count = 0;

buttons.forEach((btn) => {
        btn.addEventListener('click', event => clickfunction(event.target.textContent));
})

function clickfunction(char) {
    if (char == "+" || char == "-" || char == "*" || char == "/") {
        if ( opt != '') {
            var2 = Number(dis2.value);
            dis2.value = operate(var1, var2, opt);
            dis1.value = var1 + opt + var2 + '=';
            var1 = Number(dis2.value);
            opt = char;
            lastOp = char;
        } else {
            var1 = Number(dis2.value);
            opt = char;
            dis1.value = var1 + opt;
            dis2.value = '';
        }     
    } else if ( char == "=" ) { 
        if (opt != '') {
            var2 = Number(dis2.value);
            dis2.value = operate(var1, var2, opt);
            dis1.value = var1 + opt + var2 + '=';
            lastOp = char;
            opt = '';
        }
    } else if ( char == "AC" )  {
        var1 , var2 = 0;
        opt =  '';
        dis1.value = '';
        dis2.value = '';
    } else {
        updateScreen();
        dis2.value += char;
    }
}

function updateScreen() {
    if (lastOp == '=') {
        dis2.value = '';
        dis1.value = '';
        lastOp = '';
    }
    if (lastOp == "+" || lastOp == "-" || lastOp == "*" || lastOp == "/") {
        dis2.value = '';
        dis1.value = var1 + opt;
        lastOp = '';
    }
}