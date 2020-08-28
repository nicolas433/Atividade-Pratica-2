const toConvertBtn = document.getElementById("to-convert-btn");
const resetBtn = document.getElementById("reset");
const visor = document.getElementById("visor-block");


toConvertBtn.addEventListener("click", () => {
    const input = document.getElementById("temperatures").value;
    const temperatures = input.split(",");

   const inMeasures = document.getElementById("in-measures").value;
   const outMeasures = document.getElementById("out-measures").value;
   
   if(String(inMeasures)=="celsius"){
        if(String(outMeasures)=="kelvin"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=newElement+273;
                if(newElement<=-273.15){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
        if(String(outMeasures)=="fahrenheit"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=(newElement*(9/5))+32;
                if(newElement<=-273.15){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
    }

    if(String(inMeasures)=="kelvin"){
        if(String(outMeasures)=="celsius"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=newElement-273;
                if(newElement<0){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
        if(String(outMeasures)=="fahrenheit"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=((newElement - 273.15) * (9/5)) + 32;
                if(newElement<0){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
    }

    if(String(inMeasures)=="fahrenheit"){
        if(String(outMeasures)=="celsius"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=(newElement - 32) * (5/9);
                if(newElement<-459.67){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
        if(String(outMeasures)=="kelvin"){
            temperatures.forEach(element => {
                const newElement = parseFloat(element);
                let outVal=((newElement - 32) * (5/9)) + 273.15;
                if(newElement<-459.67){
                    outVal="Valor incorreto"
                }
                createBox(newElement, outVal);
            });
        }
    }
})

function createBox(valueOne, valueTwo){
    const box = document.createElement("div");
    box.classList.add("result");
    const text = document.createTextNode(`${valueOne} -> ${valueTwo}`);
    box.appendChild(text);
    visor.appendChild(box);
}

resetBtn.addEventListener("click", () => {
    visor.innerHTML = "";
  });