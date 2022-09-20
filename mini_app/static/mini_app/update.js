const first_name = document.getElementById("name_first").innerText;
const last_name = document.getElementById("name_last").innerText;
const myemail = document.getElementById("myemail").innerText;
// console.log("It is working");
// console.log(first_name);
// console.log(last_name);
// console.log(myemail);
const btn = document.getElementById("mybtn");
const frst = document.getElementById("first_name");
const last = document.getElementById("last_name");

const first_note = document.getElementById("firstname_note");

const lastname_new = document.getElementById("last_name").value;
const email_new = document.getElementById("email");

email_new.addEventListener("keypress", (event) => {
  const email_new = document.getElementById("email").value.trim();
  label_email = document.getElementById("email_label");
  if (email_new.length === 0) {
    btn.classList.add("disabled");
    if (label_email.childElementCount === 0) {
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      document.getElementById("email_label").appendChild(para);
    }
  } else if (email_new.includes("@") === false) {
    btn.classList.add("disabled");
    if (label_email.querySelector("#label_info") !== null) {
      label_email.removeChild(label_email.firstElementChild);
    }
    if (label_email.childElementCount === 0) {
      const para = document.createElement("span");
      para.innerHTML = " An email must contain @ !";
      para.classList.add("text-danger");
      para.setAttribute("id", "label_info");
      document.getElementById("email_label").appendChild(para);
    }
  } else {
    if (label_email.querySelector("#label_info") !== null) {
      label_email.removeChild(label_email.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

frst.addEventListener("keypress", (event) => {
  const firstname_new = document.getElementById("first_name").value.trim();
  label_first = document.getElementById("firstname_label");
  if (firstname_new.length === 0) {
    btn.classList.add("disabled");
    if (label_first.childElementCount === 0) {
      //   console.log("It doesn't have a Child");
      const para = document.createElement("span");
      para.innerHTML = " This cant by empty!";
      para.classList.add("text-danger");
      document.getElementById("firstname_label").appendChild(para);
    }

    // console.log("btn has been disabled");
  } else {
    if (label_first.hasChildNodes()) {
      label_first.removeChild(label_first.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});

last.addEventListener("keypress", (event) => {
  const lastname_new = document.getElementById("last_name").value.trim();
  label_last = document.getElementById("lastname_label");
  if (lastname_new.length === 0) {
    btn.classList.add("disabled");
    if (label_last.childElementCount === 0) {
      //   console.log("It doesn't have a Child");
      const para = document.createElement("span");
      para.innerHTML = "This cant by empty!";
      para.classList.add("text-danger");
      document.getElementById("lastname_label").appendChild(para);
    }

    // console.log("btn has been disabled");
  } else {
    if (label_last.hasChildNodes()) {
      label_last.removeChild(label_last.firstElementChild);
    }
    // console.log("Good Job");
    btn.classList.remove("disabled");
  }
});
