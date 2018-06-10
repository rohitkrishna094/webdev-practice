let i = 0;
let precision = 2;

function tempChange() {
    let temp = document.getElementById('temp');
    var lists = ['<i id="temp" class="fa fa-thermometer-empty fa-3x tempColor" aria-hidden="true"></i>'
        , '<i class="fa fa-thermometer-quarter fa-3x tempColor" aria-hidden="true"></i>'
        , '<i class="fa fa-thermometer-half fa-3x tempColor" aria-hidden="true"></i>'
        , '<i class="fa fa-thermometer-three-quarters fa-3x tempColor" aria-hidden="true"></i>'
        , '<i class="fa fa-thermometer-full fa-3x tempColor" aria-hidden="true"></i>'];
    temp.innerHTML = lists[i++];
    if (i == lists.length) i = 0;
    // setTimeout(tempChange, 1000);
}

tempChange();
setInterval(tempChange, 200);

let fIn1 = document.getElementById('fIn1');
let cIn2 = document.getElementById('cIn2');
let kIn3 = document.getElementById('kIn3');

fIn1.addEventListener('input', function (e) {
    let cOut1 = document.getElementById('cOut1');
    let kOut1 = document.getElementById('kOut1');
    let f1 = e.target.value;
    let f = parseFloat(f1);
    cOut1.innerHTML = ((f - 32) * (5 / 9)).toFixed(precision);
    kOut1.innerHTML = ((f + 459.67) * 5 / 9).toFixed(precision);
});

cIn2.addEventListener('input', function (e) {
    let kOut2 = document.getElementById('kOut2');
    let fOut2 = document.getElementById('fOut2');
    let c1 = e.target.value;
    let c = parseFloat(c1);
    kOut2.innerHTML = (c + 273.150).toFixed(precision);
    fOut2.innerHTML = ((c * (9 / 5)) + 32).toFixed(precision);
});

kIn3.addEventListener('input', function (e) {
    let fOut3 = document.getElementById('fOut3');
    let cOut3 = document.getElementById('cOut3');
    let k1 = e.target.value;
    let k = parseFloat(k1);
    fOut3.innerHTML = ((k * (9 / 5)) - 459.67).toFixed(precision);
    cOut3.innerHTML = (k - 273.15).toFixed(precision);
});