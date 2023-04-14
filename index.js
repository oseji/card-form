"use strict";

console.log("hey");

//ELEMENTS

const nameInput = document.getElementById("name");
const numberInput = document.getElementById("cardNumber");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

const displayName = document.querySelector(".displayName");
const displayNumber = document.querySelector(".displayNumber");
const displayMonth = document.querySelector(".displayMonth");
const displayYear = document.querySelector(".displayYear");
const displayCvc = document.querySelector(".cvc");

const nameErr = document.getElementById("nameErr");
const numErr = document.getElementById("numCardError");
const numShort = document.getElementById("numCardShort");
const expErr = document.getElementById("expErr");
const expShort = document.getElementById("expShort");
const cvcErr = document.getElementById("cvcErr");
const cvcShort = document.getElementById("cvcShort");

const submit = document.querySelector(".submit");

console.log(nameErr.classList, numErr, expErr, cvcErr, numShort);

//CODE
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const ownerName = nameInput.value;
  const ownerNumber = numberInput.value;
  const cardMonth = monthInput.value;
  const cardYear = yearInput.value;
  const cvc = cvcInput.value;

  //name
  if (nameInput.value == "") {
    nameErr.classList.remove("close");
  } else {
    displayName.textContent = ownerName.toUpperCase();
    nameErr.classList.add("close");
  }

  //card number
  if (numberInput.value == "") {
    numErr.classList.remove("close");
    numShort.classList.add("close");
  } else if (ownerNumber.length !== 16) {
    numErr.classList.add("close");
    numShort.classList.remove("close");
  } else {
    displayNumber.textContent = ownerNumber;
    numErr.classList.add("close");
    numShort.classList.add("close");
  }

  //card month and year
  if (monthInput.value == "" || yearInput.value == "") {
    expErr.classList.remove("close");
    expShort.classList.add("close");
  } else if (cardMonth.length !== 2 || cardYear.length !== 2) {
    expErr.classList.add("close");
    expShort.classList.remove("close");
  } else {
    displayMonth.textContent = cardMonth;
    displayYear.textContent = cardYear;
    expErr.classList.add("close");
    expShort.classList.add("close");
  }

  //cvc
  if (cvcInput.value == "") {
    cvcErr.classList.remove("close");
    cvcShort.classList.add("close");
  } else if (cvc.length !== 3) {
    cvcShort.classList.remove("close");
    cvcErr.classList.add("close");
  } else {
    displayCvc.textContent = cvc;
    cvcErr.classList.add("close");
    cvcShort.classList.add("close");
  }
});
