// New but will not work codes bellow
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// submit button
const submit_btn_id = "mybtn";
const btn = document.getElementById(submit_btn_id);

//for firstname validation and event listener
const firstname_id = "first_name";
const firstname_label_id = "firstname_label";
const firstname_element = document.getElementById(firstname_id);

// for lastname validation and event listener
const lastname_id = "last_name";
const lastname_label_id = "lastname_label";
const lastname_element = document.getElementById(lastname_id);

// for age validation and event listener
const age_id = "age";
const age_label_id = "age_label";
const age_element = document.getElementById(age_id);

// for email validation and event listener
const email_id = "email";
const email_label_id = "email_label";
const email_element = document.getElementById(email_id);

// first name validator
firstname_element.addEventListener("keypress", function () {
  empty_field_validator(firstname_id, firstname_label_id, submit_btn_id, false);
});

// last name validator
lastname_element.addEventListener("keypress", function () {
  empty_field_validator(lastname_id, lastname_label_id, submit_btn_id, false);
});

// Email validator
email_element.addEventListener("keypress", function () {
  empty_field_validator(email_id, email_label_id, submit_btn_id, true);
});

// Age validator
age_element.addEventListener("keypress", function () {
  empty_field_validator(age_id, age_label_id, submit_btn_id, false);
});

// Final validation by button

btn.addEventListener("mouseover", (event) => {
  const firstname_value = firstname_element.value.trim();
  const lastname_value = lastname_element.value.trim();
  const email_value = email_element.value.trim();
  const age_value = age_element.value.trim();

  if (
    firstname_value.length === 0 &&
    lastname_value.length === 0 &&
    email_value.length === 0 &&
    age_value.length === 0
  ) {
    btn.classList.add("disabled");
  }
});

// this function checks empty field or email field
// and doesn't allow to click on submit button
// if valuse are not valid or empty
function empty_field_validator(
  input_field_id,
  input_label_id,
  submit_btn_id,
  is_email
) {
  const field_value = document.getElementById(input_field_id).value.trim();
  const input_label = document.getElementById(input_label_id);
  const btn = document.getElementById(submit_btn_id);
  console.log("Field validator is working");

  // -------- Logic Parts ---
  if (field_value.length === 0) {
    btn.classList.add("disabled");
    if (input_label.childElementCount === 0) {
      console.log("Field validator is working");
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      input_label.appendChild(para);
      document.getElementById(input_label_id).appendChild(para);
    }
  } else if (input_label.querySelector("#label_info") !== null) {
    input_label.removeChild(input_label.firstElementChild);
  } else if (is_email) {
    if (field_value.includes("@") === false) {
      btn.classList.add("disabled");
      if (input_label.childElementCount === 0) {
        const para = document.createElement("span");
        para.innerHTML = " An email must contain @";
        para.classList.add("text-danger");
        para.setAttribute("id", "label_info");
        document.getElementById(input_label_id).appendChild(para);
      }
    }
  } else {
    btn.classList.remove("disabled");
  }
}
