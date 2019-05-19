function calculateImc() {
    var weight = document.getElementById('weightId').value;
    var height = document.getElementById('heightId').value / 100;

    var result = weight / Math.pow(height, 2);

    document.getElementById('resultImcId').innerHTML = result.toFixed(2);
    document.getElementById('resultTextId').innerHTML = getWeightStatus(result);
}

function getWeightStatus(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1';
    } if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2';
    } if (imc >= 40) {
        return 'Obesidade grau 3';
    }
}