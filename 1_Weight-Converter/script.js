document.getElementById('input').addEventListener('input', function (e) {
    let lbs = e.target.value;
    document.getElementById('gOut').innerHTML = lbs * 453.592;
    document.getElementById('kgOut').innerHTML = lbs * 0.453592;
    document.getElementById('oOut').innerHTML = lbs * 16;
});