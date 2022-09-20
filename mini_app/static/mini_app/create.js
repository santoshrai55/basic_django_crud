console.log("The script is working");
const firstname_label = document.getElementById("firstname_label");
const firstname_field = document.getElementById("first_name");
const btn = document.getElementById("mybtn");

firstname_field.addEventListener("keypress", (event) => {
  const field = document.getElementById("first_name").value.trim();
  if (field.length === 0) {
    btn.classList.add("disabled");
    if (firstname_label.childElementCount === 0) {
      console.log("this portion has been running");
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      firstname_label.appendChild(para);
      document.getElementById("firstname_label").appendChild(para);
    }
  } else {
    if (firstname_label.hasChildNodes()) {
      firstname_label.removeChild(firstname_label.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

// ----- Last Name Validator-----
const lastname_field = document.getElementById("last_name");
const lastname_label = document.getElementById("lastname_label");

lastname_field.addEventListener("keypress", (event) => {
  const field2 = document.getElementById("last_name").value.trim();
  console.log("second validator is working");
  if (field2.length === 0) {
    btn.classList.add("disabled");
    if (lastname_label.childElementCount === 0) {
      console.log("this portion has been running");
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      lastname_label.appendChild(para);
      document.getElementById("lastname_label").appendChild(para);
    }
  } else {
    if (lastname_label.querySelector("#label_info") !== null) {
      lastname_label.removeChild(lastname_label.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

// Email Validator
const email_field = document.getElementById("email");
const email_label = document.getElementById("email_label");

email_field.addEventListener("keypress", (event) => {
  const field3 = document.getElementById("email").value.trim();
  console.log("email validator is working");
  if (field3.length === 0) {
    btn.classList.add("disabled");
    if (email_label.childElementCount === 0) {
      console.log("this portion has been running");
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      email_label.appendChild(para);
      document.getElementById("email_label").appendChild(para);
    }
  } else if (field3.includes("@") === false) {
    btn.classList.add("disabled");
    if (email_label.querySelector("#label_info") !== null) {
      email_label.removeChild(email_label.firstElementChild);
    }
    if (email_label.childElementCount === 0) {
      const para = document.createElement("span");
      para.innerHTML = " An email must contain @ !";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      document.getElementById("email_label").appendChild(para);
    }
  } else {
    if (email_label.querySelector("#label_info") !== null) {
      email_label.removeChild(email_label.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

// Age Validator
const age_field = document.getElementById("age");
const age_label = document.getElementById("age_label");

age_field.addEventListener("keypress", (event) => {
  const field4 = document.getElementById("age").value.trim();
  console.log("Age validator is working");
  if (field4.length === 0) {
    btn.classList.add("disabled");
    if (age_label.childElementCount === 0) {
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      age_label.appendChild(para);
      document.getElementById("age_label").appendChild(para);
    }
  } else {
    if (age_label.querySelector("#label_info") !== null) {
      age_label.removeChild(age_label.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

btn.addEventListener("mouseover", (event) => {
  const firstname = document.getElementById("first_name").value.trim();
  const lastname = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  if (
    firstname.length === 0 &&
    lastname.length === 0 &&
    email.length === 0 &&
    age.length === 0
  ) {
    btn.classList.add("disabled");
  }
});
