// javascript

const inputEl = document.getElementById("input-el");
const cnv = document.getElementById("cnv");
const rst = document.getElementById("rst");
const err = document.getElementById("error");
const len = document.getElementById("len");
const vol = document.getElementById("vol");
const mass = document.getElementById("mass");

function metToFeet(val) {
    let mtF = val * 3.281;
    return mtF.toFixed(3);
}

function feetToMet(val) {
    let ftM = val / 3.281;
    return ftM.toFixed(3);
}

function litToGal(val) {
    let ltG = val * 0.264;
    return ltG.toFixed(3);
}

function galToLit(val) {
    let gtL = val / 0.264;
    return gtL.toFixed(3);
}

function kilToPou(val) {
    let ktP = val * 2.204;
    return ktP.toFixed(3);
}

function pouToKil(val) {
    let ptK = val / 2.204;
    return ptK.toFixed(3);
}

rst.addEventListener("click", function() {
        len.innerHTML = "";
        vol.innerHTML = "";
        mass.innerHTML = "";
});

cnv.addEventListener("click", function() {
    
    if(inputEl.value === "" || inputEl.value === "0") {
        err.style.display = "inline";
        len.innerHTML = "";
        vol.innerHTML = "";
        mass.innerHTML = "";
        setTimeout(function() {
            err.style.display = "none";
        }, 800)
    }
    else {
        let mF = `${inputEl.value} meters = ${metToFeet(inputEl.value)} feet | ${inputEl.value} feets = ${feetToMet(inputEl.value)} meters`;
    
        let lG = `${inputEl.value} litres = ${litToGal(inputEl.value)} gallons | ${inputEl.value} gallons = ${galToLit(inputEl.value)} litres`;
        
        let kP = `${inputEl.value} kilograms = ${kilToPou(inputEl.value)} pounds | ${inputEl.value} pounds = ${pouToKil(inputEl.value)} kilograms`;
    
        inputEl.value = "";
        
        len.innerHTML = mF;
        vol.innerHTML = lG;
        mass.innerHTML = kP;
    }
});
