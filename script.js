document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const inputs = document.querySelectorAll(".inputs");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const messageAlert = document.querySelectorAll(".alert-message");
    form.setAttribute("novalidate", true);
    form.addEventListener("submit", function (event) {
        if (!alertMessageIcon()) {
            event.preventDefault();
        }
        let dados = new FormData(form);
        for (let [chave, valor] of dados.entries()) {
            console.log(`${chave}: ${valor}`);
        }
    });
    const alertIconOne = document.createElement("img");
    alertIconOne.src = "./assets/icons/icon-error.svg";
    alertIconOne.alt = "Alert icon";
    alertIconOne.setAttribute("class", "icon-alert");
    const alertIconTwo = document.createElement("img");
    alertIconTwo.src = "./assets/icons/icon-error.svg";
    alertIconTwo.alt = "Alert icon";
    alertIconTwo.setAttribute("class", "icon-alert");
    const alertIconThree = document.createElement("img");
    alertIconThree.src = "./assets/icons/icon-error.svg";
    alertIconThree.alt = "Alert icon";
    alertIconThree.setAttribute("class", "icon-alert");
    const alertIconFour = document.createElement("img");
    alertIconFour.src = "./assets/icons/icon-error.svg";
    alertIconFour.alt = "Alert icon";
    alertIconFour.setAttribute("class", "icon-alert");
    console.log(inputs[3]);
    function alertMessageIcon() {
        let inputValido = true;
        if (!firstName.value) {
            firstName.insertAdjacentElement("afterend", alertIconOne);
            messageAlert[0].style.display = "block";
            inputValido = false;
        }
        if (!lastName.value) {
            lastName.insertAdjacentElement("afterend", alertIconTwo);
            messageAlert[1].style.display = "block";
            inputValido = false;
        }
        if (!password.value) {
            messageAlert[4].style.display = "block";
            password.insertAdjacentElement("afterend", alertIconFour);
            inputValido = false;
        }
        if (!email.value) {
            messageAlert[3].style.display = "block";
            messageAlert[2].style.display = "none";
            email.insertAdjacentElement("afterend", alertIconThree);
        } else if (!email.value.includes("@")) {
            messageAlert[2].style.display = "block";
            messageAlert[2].style.display = "none";
            email.insertAdjacentElement("afterend", alertIconThree);
            inputValido = false;
        }
        return inputValido;
    }
    firstName.addEventListener("focus", function () {
        messageAlert[0].style.display = "none";
        alertIconOne.remove();
    });
    lastName.addEventListener("focus", function () {
        messageAlert[1].style.display = "none";
        alertIconTwo.remove();
    });
    email.addEventListener("focus", function () {
        messageAlert[2].style.display = "none";
        messageAlert[3].style.display = "none";
        alertIconThree.remove();
    });
    password.addEventListener("focus", function () {
        messageAlert[4].style.display = "none";
        alertIconFour.remove();
    });

    firstName.addEventListener("blur", function () {
        if (!firstName.value) {
            messageAlert[0].style.display = "block";
            firstName.insertAdjacentElement("afterend", alertIconOne);
        }
    });
    lastName.addEventListener("blur", function () {
        if (!lastName.value) {
            messageAlert[1].style.display = "block";
            lastName.insertAdjacentElement("afterend", alertIconTwo);
        }
    });
    email.addEventListener("blur", function () {
        if (!email.value) {
            messageAlert[3].style.display = "block";
            email.insertAdjacentElement("afterend", alertIconThree);
        }

        if (!email.value.includes("@")) {
            messageAlert[2].style.display = "block";
            email.insertAdjacentElement("afterend", alertIconThree);
        }
    });
    password.addEventListener("blur", function () {
        if (!password.value) {
            messageAlert[4].style.display = "block";
            password.insertAdjacentElement("afterend", alertIconFour);
        }
    });
});
