viewNumber = "";
storedNumber = "";
ops = 0;
queuedOps = 0;
finalResult = false;

function clearView() {
    var view = document.getElementById("view");
        viewNumber = "";
        storedNumber = "";
        ops = 0;
        queuedOps = 0;        
        view.value = viewNumber;

}

function input(number) {
    var view = document.getElementById("view");

    if ((view.value == "") && number == "0") {
    return;
    }
    else if (finalResult == true) {
        view.value = number;
        finalResult = false;
    }
    else {
    view.value += number;
    }
}

function decimal(decimal) {
    var view = document.getElementById("view");

    for (i = 0; i < view.value.length; i++)
        if (view.value.charAt(i) == '.') {
            return;
        }
        view.value += decimal;
}

function operates(command) {
    var view = document.getElementById("view"),
        viewNumber = view.value;
        evalView = eval(viewNumber),
        evalStored = eval(storedNumber);
    
    if (queuedOps == 0) {
        storedNumber = view.value;
    }
    else if (queuedOps == 1) {
        storedNumber = evalStored + evalView;
    }
    else if (queuedOps == 2) {
        storedNumber = evalStored - evalView;
    }
    else if (queuedOps == 3) {
        storedNumber = evalStored * evalView;
    }

    if (command == 'add') {
        ops = 1;
    }
    else if (command == 'subtract') {
        ops = 2;
    }
    if (command == 'multiply') {
        ops = 3;
    }

        queuedOps = ops;
        view.value = '';
}

function result() {
    var view = document.getElementById("view");
        viewNumber = view.value;
    var evalView = eval(viewNumber),
        evalStored = eval(storedNumber);

    if (ops == 1) {
        viewNumber = evalStored + evalView;
    }
    else if (ops == 2) {
        viewNumber = evalStored - evalView;
    }
    else if (ops == 3) {
        viewNumber = evalStored * evalView;
    }
    view.value = viewNumber;
    if (ops != 0)
        finalResult = true;

        ops = 0;
        queuedOps = 0;
        viewNumber = "";
        storedNumber = "";
}