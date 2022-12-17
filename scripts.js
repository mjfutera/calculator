const buttonClick = buttonID => {
    const result = document.getElementById("resultField").value;
    const button = document.getElementById(buttonID).innerText;
    document.getElementById("resultField").value = `${result}${button}`;
}

const deleteField = () => {
    document.getElementById("resultField").value = `0`;
}

const calculate = () => {
    document.getElementById("resultField").value = eval(document.getElementById("resultField").value);
}