const form = document.querySelector("#form");
const userCard = document.querySelector("#userCard");
const btnBack = document.querySelector("#btnBack");

let username = document.querySelector("#username");
let user_age = document.querySelector("#user_age");
let user_email = document.querySelector("#user_email");
let user_country = document.querySelector("#user_country");
let user_gender = document.querySelector("#user_gender");
let user_comment = document.querySelector("#user_comment");



form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const age = event.target.age.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const pass1 = event.target.pass1.value;
    const country = event.target.country.value;
    const term = event.target.term.checked;
    const gender = event.target.gender.value;
    const comment = event.target.comment.value;

    if (
        name.trim() === "" ||
        age.trim() === "" ||
        email.trim() === "" ||
        pass.trim() === "" ||
        pass1.trim() === "" ||
        country.trim() === "" ||
        !term ||
        gender.trim() === "" ||
        comment.trim() === ""
    ) {
        alert("Todos los campos son necesarios");
    }

    if (pass !== pass1) {
        return alert("Las contra no coinciden");
    }
    console.log({
        name,
        age,
        email,
        pass,
        pass1,
        country,
        term,
        gender,
        comment,
    });
    username.textContent = name;
    user_age.textContent = age;
    user_email.textContent = email;
    user_country.textContent = country;
    user_gender.textContent = gender;
    user_comment.textContent = comment;


    form.classList.add('hide_block');

    userCard.classList.remove('hide_block');

});

btnBack.addEventListener('click', (event) => {
    event.preventDefault();

    form.classList.remove('hide_block');

    userCard.classList.add('hide_block');
})