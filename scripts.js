// Calculator by Michal Futera
// v. 1.003
// https://linktr.ee/mjfutera

const array = [];

const buttonClick = value => {
    array.push(value);
    document.getElementById("display").value = array.join('');
}

const deleteField = () => {
    array.length = 0;
    document.getElementById("display").value = array.join('');
}

const deleteLastField = () => {
    array.pop();
    document.getElementById("display").value = array.join('');
}

const calculate = () => {
    document.getElementById("display").value = eval(array.join(''));
}