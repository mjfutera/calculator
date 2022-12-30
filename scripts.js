const buttonClick = value => {
    const result = document.getElementById("display").value;
    document.getElementById("display").value = `${result}${value}`;
}

const deleteField = () => {
    document.getElementById("display").value = `0`;
}

const calculate = () => {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}