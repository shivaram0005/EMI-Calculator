 let loanAmonuntInput = document.querySelector(".loan-amount");
 let interstRateInput = document.querySelector(".interst-rate");
 let loanTenureInput = document.querySelector(".loan-tenure");

 let loanEmiValue = document.querySelector(".loan-emi .value")
 let totalInterstValue = document.querySelector(".total-interst .value")
 let totalAmountValue = document.querySelector(".total-amount .value");

let calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmonuntInput.value);
let interstRate = parseFloat(interstRateInput.value)
let loanTenure = parseFloat(loanTenureInput.value);
let interst = interstRate/12/100;
 

const calculateEmi = () => {
   let emi = loanAmount*interst * 
   (Math.pow(1 + interst , loanTenure) / (Math.pow(1 + interst , loanTenure)-1 ));

   return emi;
}

const updateData = (emi) => {
 loanEmiValue.innerHTML = Math.round(emi);

 let totalAmount = Math.round(loanTenure * emi);
 totalAmountValue.innerHTML = totalAmount;

 let totalInterstPayable = Math.round(totalAmount - loanAmount);
 totalInterstValue.innerHTML = totalInterstPayable;
}

const refrestInputValues = () => {
    loanAmount = parseFloat(loanAmonuntInput.value);
    interstRate = parseFloat(interstRateInput.value)
    loanTenure = parseFloat(loanTenureInput.value);
    interst = interstRate/12/100;
}

const init = () => {
    refrestInputValues();
   let emi = calculateEmi();
   updateData(emi)

}

init();

calculateBtn.addEventListener("click",init);