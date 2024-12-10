"use strict";

const form = document.forms.namedItem("registration");

//form.addEventListener("input", (event) => {
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value;
  const pass = form.password.value;

  //form.submit();

  const formData = new FormData(form);
  // OU
  //formData.set("name", name);
  //formData.set("password", pass);

  if (name && pass) {
    formData.forEach((element) => {
      console.log(element);
    });
  }
  if (formData.has("name")) {
    console.log(formData.get("name"));
  }

  formData.delete("name");
  console.log(formData.has("name"));

  // 003 Manipulando Input

  const newDiv = document.createElement("div");
  newDiv.innerText = name;
  form.nextElementSibling.remove();
  form.after(newDiv);
});

//004 - RadioButton

const formRad = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

formRad.addEventListener("submit", (event) => {
  event.preventDefault();

  const radio = formRad.radio;

  //console.log(radio);

  //radio.forEach((element) => {
  //  if (element.checked) {
  //    console.log(element);
  //  }
  //});

  submit.innerHTML = radio.value;
});

formRad.radio.forEach((element) => {
  element.addEventListener("change", (event) => {
    if (event.target.checked) {
      change.innerHTML = event.target.value;
    }
  });
});

//005 - Checkbox

const formChk = document.forms.namedItem("select-checkbox");
let chkedValues = [];

formChk.addEventListener("submit", (event) => {
  event.preventDefault();
  submit.innerHTML = chkedValues;
});

formChk.checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {
    hasChked(event, element);
    change.innerHTML = chkedValues;
  });
});

const hasChked = (event, element) => {
  const { target } = event;
  const { value } = element;

  if (target.checked) {
    return chkedValues.push(value);
  } else {
    return chkedValues.map((chkedValue, index) => {
      if (value === chkedValue) {
        return chkedValues.splice(index, 1);
      }
    });
  }
};
