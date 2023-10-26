"use strict"

window.onload = function (event) {
    let AddressCalculator = document.getElementById("addressCalculator")
    addressCalculator.onsubmit = calculateLocation

    let additionForm = document.getElementById("additionForm")
    additionForm.onsubmit = calculatesum

    let ghostboy = document.getElementById("👻")
    ghostboy.onclick = flipghost
}

document.onkeydown = function (event) {
    console.log(event)
}


function calculatesum(event) {
    event.preventDefault()

    let additionForm = document.getElementById("additionForm")
    additionForm.onsubmit = calculatesum

    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    let sum = x + y
    let resultDiv = document.getElementById("additionResultMessage")

    resultDiv.innerHTML = `<h4>${x} + ${y} = <span class="display-sum" >${sum}</span> </h4>`


}



function calculateLocation(event) {
    event.preventDefault()
    let AddressCalculator = document.getElementById("addressCalculator")
    addressCalculator.onsubmit = calculateLocation

    let city = event.target.elements.city.value
    let state = event.target.elements.state.value
    let country = event.target.elements.country.value
    let location = ""
    let resultDiv = document.getElementById("locationResultMessage")

    resultDiv.innerHTML = `<h5> Address: ${city}, ${state}, ${country} </h5>`
}

function flipghost(event) {
    event.target.classList.toggle("flipped")
    console.log("ghost will be flipped")
}