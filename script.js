document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = 'Bajo peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Peso normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidad';
    }

    document.getElementById('result').innerText = `Tu IMC es ${bmi.toFixed(2)}. Categoría: ${category}`;
});