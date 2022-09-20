console.log("The script is working");
const firstname_label = document.getElementById("firstname_label");
const firstname_field = document.getElementById("first_name");
const firstname_stripped = firstname_field.value.strip();

function formValidator(label, field) {
  if (field.length === 0) {
    console.log("this portion has been running");
    const para = document.createElement("span");
    para.innerHTML = " This cant by empty!";
    para.classList.add("text-danger");
    para.setAttribute("id", "label_info");
    label.appendChild(para);
    // document.getElementById("firstname_label").appendChild(para);
  }
}
firstname_field.addEventListener("keypress", (event) => {
  event.formValidator(firstname_label, firstname_stripped);
});
