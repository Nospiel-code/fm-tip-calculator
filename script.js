const bill = document.getElementById("bill");
const reset = document.getElementById("reset");
const form = document.getElementById("form");
const people = document.getElementById("people");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const custom = document.getElementById("custom");


form.addEventListener("input", function () {
    const percentage = document.querySelector("input[name=tip]:checked");
    const billValue = +bill.value;
    const numPeople = +people.value;
    const percentageValue = percentage ? +percentage.value / 100 : 0;
    const customValue = +custom.value / 100;
    
    if (billValue && numPeople && percentageValue) {
        total.innerHTML = `$${(billValue / numPeople * percentageValue).toFixed(2)}`;
        tip.innerHTML = `$${(billValue * percentageValue).toFixed(2)}`;
    } else if (billValue && numPeople && customValue) {
        total.innerHTML = `$${(billValue / numPeople * customValue).toFixed(2)}`;
        tip.innerHTML = `$${(billValue * customValue).toFixed(2)}`;
    }
})

reset.addEventListener("click", function () {
    form.reset()
});