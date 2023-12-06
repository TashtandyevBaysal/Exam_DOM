const container= document.createElement("div")


const h1 = document.createElement("h1")

const UserName = document.createElement("input")
UserName.setAttribute("placeholder", "Name")
const Email = document.createElement("input")
Email.setAttribute("placeholder", "E-mail")
const Password = document.createElement("input")
Password.setAttribute("placeholder", "Password")



const btn = document.createElement("button")
btn.textContent = "Sign UP"



container.append(h1, UserName, Email, Password, btn, )
document.body.append(container)


function checkEmail(inputValue) {
    return inputValue.includes('@') && inputValue.includes('.');
}

Email.addEventListener('blur', function () {
    const text = Email.value;

    if (checkEmail(text)) {
        return text;
    } else {
        alert('Неверный формат email');
    }
});

document.body.appendChild(Email)
document.body.appendChild(btn)